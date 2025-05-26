import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import Resend from "next-auth/providers/resend"
import { PrismaClient, User } from "@/generated/prisma"
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
      role?: 'SUPER_ADMIN' | 'COMPANY_ADMIN' | 'EMPLOYEE'
      permissions?: {
        name: string
        category: string
        description: string
      }[]
    }
    requiresTwoFactor?: boolean
  }
}

type UserWithAccounts = User & {
  accounts: {
    password: string | null
  }[]
  roles: {
    name: string
    permissions: {
      name: string
      category: string
      description: string
    }[]
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
              roles: {
                include: {
                  permissions: true
                }
              }
            },
          }) as UserWithAccounts | null;

          console.log('Auth Debug - User Roles:', {
            userId: user?.id,
            roles: user?.roles.map(r => ({
              name: r.name,
              permissions: r.permissions.map(p => p.name)
            }))
          });

          if (!user) {
            throw new Error("No user found with this email");
          }

          // Check if user has super_admin role
          const isSuperAdmin = user.roles.some(role => role.name === 'SUPER_ADMIN');
          const isCompanyAdmin = user.roles.some(role => role.name === 'COMPANY_ADMIN');
          console.log('Auth Debug - Role Check:', { isSuperAdmin, isCompanyAdmin, roles: user.roles.map(r => r.name) });

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

          // Determine role based on available roles, prioritizing super_admin
          let role: 'SUPER_ADMIN' | 'COMPANY_ADMIN' | 'EMPLOYEE' = 'EMPLOYEE';
          if (isSuperAdmin) {
            role = 'SUPER_ADMIN';
          } else if (isCompanyAdmin) {
            role = 'COMPANY_ADMIN';
          }
          
          // Ensure the user has at least one role
          if (user.roles.length === 0) {
            // If no roles are assigned, add the EMPLOYEE role by default
            const defaultRole = await prisma.role.findUnique({
              where: { name: 'EMPLOYEE' },
              include: { permissions: true }
            });
            
            if (defaultRole) {
              console.log('Auth Debug - Assigning default EMPLOYEE role');
              
              // Update user with default role (async, won't block login)
              prisma.user.update({
                where: { id: user.id },
                data: {
                  roles: {
                    connect: [{ name: 'EMPLOYEE' }]
                  }
                }
              }).catch(err => console.error('Failed to update user roles:', err));
              
              // Add default role for current session
              user.roles = [{
                name: defaultRole.name,
                permissions: defaultRole.permissions.map(p => ({
                  name: p.name,
                  category: p.category,
                  description: p.description || '' // Convert null to empty string
                }))
              }];
              role = 'EMPLOYEE';
            }
          }

          // Get all permissions from user's roles
          const permissions = user.roles.flatMap(role => role.permissions);

          // Log the final role assignment
          console.log('Auth Debug - Final Role Assignment:', { 
            userId: user.id,
            assignedRole: role,
            availableRoles: user.roles.map(r => r.name),
            permissions: permissions.map(p => p.name)
          });

          if (user.twoFactorEnabled) {
            // Return a special object to indicate 2FA is required
            return {
              id: user.id,
              email: user.email,
              name: user.name,
              requiresTwoFactor: true,
              role,
              permissions
            };
          }

          return {
            id: user.id,
            email: user.email,
            name: user.name,
            role,
            permissions
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
        token.role = user.role;
        token.permissions = user.permissions;
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.requiresTwoFactor = token.requiresTwoFactor as boolean;
        session.user.role = token.role as 'SUPER_ADMIN' | 'COMPANY_ADMIN' | 'EMPLOYEE';
        session.user.permissions = token.permissions as {
          name: string;
          category: string;
          description: string;
        }[];
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