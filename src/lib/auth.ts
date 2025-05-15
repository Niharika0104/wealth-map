import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";
import { twoFactor } from "better-auth/plugins";
 
export const auth = betterAuth({
  appName: "Wealth Map",
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),
  emailAndPassword: {  
    enabled: true
  },
  socialProviders: { 
    google: {
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  plugins: [
    twoFactor(),
  ],
  session: {
    expiresIn: 60 * 30,
    updateAge: 60 * 5, // 5 minutes
  }
});