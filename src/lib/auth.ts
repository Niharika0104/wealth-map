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
        if (!credentials?.email || !credentials?.password) {
          return null;
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

        if (!user || !user.accounts[0]?.password) {
          return null;
        }

        const isPasswordValid = await compare(
          credentials.password as string,
          user.accounts[0].password as string
        );

        if (!isPasswordValid) {
          return null;
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
        };
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
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
  debug: process.env.NODE_ENV === "development",
}

export const { handlers, signIn, signOut, auth } = NextAuth(authOptions)