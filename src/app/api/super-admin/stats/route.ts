import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";
import { auth } from "@/lib/auth";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const session = await auth();
    if (!session?.user || session.user.role !== 'SUPER_ADMIN') {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get total companies
    const totalCompanies = await prisma.organization.count({
      where: { isSuperAdmin: false }
    });

    // Get active companies (status = 'active')
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

    return NextResponse.json({
      totalCompanies,
      activeCompanies,
      totalUsers,
      growth: {
        companies: newCompaniesThisMonth,
        users: newUsersThisMonth
      },
      recentActivity
    });
  } catch (error) {
    console.error("Error fetching stats:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
} 