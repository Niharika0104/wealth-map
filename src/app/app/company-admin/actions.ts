"use server";

import { PrismaClient } from "@/generated/prisma";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

type MemberWithUser = {
  user: {
    id: string;
    name: string | null;
    email: string | null;
    emailVerified: boolean;
    image: string | null;
    password: string | null;
    createdAt: Date;
    updatedAt: Date;
    twoFactorEnabled: boolean | null;
    banned: boolean | null;
    banReason: string | null;
    banExpires: Date | null;
    currentRole: string;
  };
  role: string;
};

export async function getEmployees() {
  try {
    const session = await auth();
    
    if (!session?.user) {
      redirect('/auth/login');
    }

    // Prevent super admin access
    if (session.user.role === 'SUPER_ADMIN') {
      redirect('/app/super-admin');
    }

    // Verify user has COMPANY_ADMIN role
    if (session.user.role !== 'COMPANY_ADMIN') {
      redirect('/app/employee');
    }

    // Get user's organization
    const userOrg = await prisma.member.findFirst({
      where: { 
        userId: session.user.id,
        role: 'COMPANY_ADMIN'
      },
      include: { organization: true },
    });

    if (!userOrg) {
      redirect('/auth/login');
    }

    // Get all members of the organization
    const members = await prisma.member.findMany({
      where: {
        organizationId: userOrg.organizationId,
      },
      include: {
        user: true,
      },
    });

    return members.map((member: MemberWithUser) => ({
      id: member.user.id,
      name: member.user.name || "Unnamed User",
      email: member.user.email,
      role: member.role,
      status: "active", // Default status since it's not in the schema
      lastActive: member.user.updatedAt,
      twoFactorEnabled: member.user.twoFactorEnabled || false,
    }));
  } catch (error) {
    console.error("Error fetching employees:", error);
    redirect('/auth/login');
  }
} 