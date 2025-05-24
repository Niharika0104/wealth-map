"use server";

import { PrismaClient } from "@/generated/prisma";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

export async function getEmployeeData() {
  try {
    const session = await auth();
    
    if (!session?.user) {
      redirect('/auth/login');
    }

    // Prevent super admin access
    if (session.user.role === 'SUPER_ADMIN') {
      redirect('/app/super-admin');
    }

    // Verify user has EMPLOYEE role
    if (session.user.role !== 'EMPLOYEE') {
      redirect('/app/company-admin');
    }

    // Get user's organization
    const userOrg = await prisma.member.findFirst({
      where: { 
        userId: session.user.id,
        role: 'EMPLOYEE'
      },
      include: { organization: true },
    });

    if (!userOrg) {
      redirect('/auth/login');
    }

    // Fetch user from DB to get twoFactorEnabled and updatedAt
    const dbUser = await prisma.user.findUnique({ where: { id: session.user.id } });
    if (!dbUser) {
      redirect('/auth/login');
    }

    // Return employee data
    return {
      id: dbUser.id,
      name: dbUser.name,
      email: dbUser.email,
      organization: userOrg.organization,
      role: userOrg.role,
      status: "active",
      lastActive: dbUser.updatedAt,
      twoFactorEnabled: dbUser.twoFactorEnabled || false,
    };
  } catch (error) {
    console.error("Error fetching employee data:", error);
    redirect('/auth/login');
  }
} 