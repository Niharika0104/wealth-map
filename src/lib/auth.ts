import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import Resend from "next-auth/providers/resend"
import { PrismaClient, User } from "@prisma/client"
import Credentials from "next-auth/providers/credentials"
import { compare } from "bcryptjs"
import { JWT } from "next-auth/jwt"
import { Session } from "next-auth"

const prisma = new PrismaClient()

// Extend the built-in session types
declare module "next-auth" {
  interface Session {
    user: {
      id: string
      name?: string | null
      email?: string | null
    }
    requiresTwoFactor?: boolean
  }
}

type UserWithAccounts = User & {
  accounts: {
    password: string | null
  }[]
}

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) {
            throw new Error("Email and password are required");
          }

          const user = await prisma.user.findUnique({
            where: { email: credentials.email as string },
            include: {
              accounts: {
                where: { providerId: "credentials" },
                select: { password: true },
              },
            },
          }) as UserWithAccounts | null;

          if (!user) {
            throw new Error("No user found with this email");
          }

          if (user.banned) {
            throw new Error(user.banReason || "Account has been banned");
          }

          if (user.banExpires && user.banExpires > new Date()) {
            throw new Error(`Account is temporarily banned until ${user.banExpires.toLocaleDateString()}`);
          }

          if (!user.accounts[0]?.password) {
            throw new Error("Invalid authentication method");
          }

          const isPasswordValid = await compare(
            credentials.password as string,
            user.accounts[0].password as string
          );

          if (!isPasswordValid) {
            throw new Error("Invalid password");
          }

          if (user.twoFactorEnabled) {
            // Return a special object to indicate 2FA is required
            return {
              id: user.id,
              email: user.email,
              name: user.name,
              requiresTwoFactor: true,
            };
          }

          return {
            id: user.id,
            email: user.email,
            name: user.name,
          };
        } catch (error) {
          console.error("Auth error:", error);
          throw error;
        }
      },
    }),
    Resend({
      from: "no-reply@prisma.com",
      apiKey: process.env.RESEND_API_KEY,
    }),
  ],
  session: {
    strategy: "jwt" as const,
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async jwt({ token, user }: { token: JWT; user: any }) {
      if (user) {
        token.id = user.id;
        token.requiresTwoFactor = user.requiresTwoFactor;
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.requiresTwoFactor = token.requiresTwoFactor as boolean;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  debug: process.env.NODE_ENV === "development",
}

export const { handlers, signIn, signOut, auth } = NextAuth(authOptions)