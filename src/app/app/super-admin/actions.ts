"use server";

import { PrismaClient } from "@/generated/prisma";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

export type SuperAdminData = {
  stats: {
    totalCompanies: number;
    activeCompanies: number;
    totalUsers: number;
    growth: {
      companies: number;
      users: number;
    };
  };
  recentActivity: Array<{
    name: string;
    createdAt: Date;
    status: string;
  }>;
};

export async function getSuperAdminData(): Promise<SuperAdminData> {
  const session = await auth();
  if (!session?.user || session.user.role !== 'SUPER_ADMIN') {
    redirect('/auth/login');
  }

  // Get total companies
  const totalCompanies = await prisma.organization.count({
    where: { isSuperAdmin: false }
  });

  // Get active companies
  const activeCompanies = await prisma.organization.count({
    where: { 
      isSuperAdmin: false,
      status: 'active'
    }
  });

  // Get total users (excluding super admins)
  const totalUsers = await prisma.user.count({
    where: {
      roles: {
        some: {
          name: {
            not: 'SUPER_ADMIN'
          }
        }
      }
    }
  });

  // Get monthly growth
  const lastMonth = new Date();
  lastMonth.setMonth(lastMonth.getMonth() - 1);
  
  const newCompaniesThisMonth = await prisma.organization.count({
    where: {
      isSuperAdmin: false,
      createdAt: {
        gte: lastMonth
      }
    }
  });

  const newUsersThisMonth = await prisma.user.count({
    where: {
      createdAt: {
        gte: lastMonth
      },
      roles: {
        some: {
          name: {
            not: 'SUPER_ADMIN'
          }
        }
      }
    }
  });

  // Get recent activity
  const recentActivity = await prisma.organization.findMany({
    where: {
      isSuperAdmin: false
    },
    orderBy: {
      createdAt: 'desc'
    },
    take: 5,
    select: {
      name: true,
      createdAt: true,
      status: true
    }
  });

  return {
    stats: {
      totalCompanies,
      activeCompanies,
      totalUsers,
      growth: {
        companies: newCompaniesThisMonth,
        users: newUsersThisMonth
      }
    },
    recentActivity
  };
}

export async function getCompanies() {
  const session = await auth();
  if (!session?.user) {
    throw new Error("Unauthorized");
  }

  // Verify super admin status
  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    include: { roles: true }
  });

  if (!user?.roles.some(role => role.name === 'SUPER_ADMIN')) {
    throw new Error("Unauthorized");
  }

  const companies = await prisma.organization.findMany({
    where: {
      isSuperAdmin: false,
    },
    include: {
      _count: {
        select: { members: true },
      },
    },
  });

  return companies.map((company) => ({
    id: company.id,
    name: company.name,
    email: company.metadata ? JSON.parse(company.metadata).billingEmail : '',
    status: company.status,
    memberCount: company._count.members,
    createdAt: company.createdAt,
  }));
} 