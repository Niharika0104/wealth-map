import { Suspense } from "react";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { PrismaClient } from "@/generated/prisma";

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

async function getSuperAdminData(): Promise<SuperAdminData> {
  const session = await auth();
  if (!session?.user) {
    redirect('/auth/login');
  }

  // Only allow super admin access
  if (session.user.role !== 'SUPER_ADMIN') {
    // Redirect company admins to company admin dashboard
    if (session.user.role === 'COMPANY_ADMIN') {
      redirect('/app/company-admin');
    }
    // Redirect employees to employee dashboard
    redirect('/app/employee');
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

export default async function SuperAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getSuperAdminData();

  return (
    <div className="flex h-screen">
      <Suspense fallback={<div>Loading...</div>}>
        {children}
      </Suspense>
    </div>
  );
} 