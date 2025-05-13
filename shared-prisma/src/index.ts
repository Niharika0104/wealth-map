import { PrismaClient } from "@prisma/client";

// Export the Prisma client instance
export const prisma = new PrismaClient();

// Export all services
export * from './services/prisma.service';
export * from './services/user.service';
export * from './services/session.service';
export * from './services/mfa.service';
export * from './services/notification.service';
