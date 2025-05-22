import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import Resend from "next-auth/providers/resend"
import { PrismaClient } from "@/generated/prisma"
import Credentials from "next-auth/providers/credentials"
 

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(PrismaClient),
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
    }),
    Resend({
        from: "no-reply@prisma.com",
        apiKey: process.env.RESEND_API_KEY,
    }),
  ],
})