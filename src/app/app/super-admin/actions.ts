"use server";

import { PrismaClient } from "@prisma/client";
import { auth } from "@/lib/auth";

const prisma = new PrismaClient();

export async function getCompanies() {
  const session = await auth();
  if (!session?.user) {
    throw new Error("Unauthorized");
  }

  // Verify super admin status
  const userOrg = await prisma.member.findFirst({
    where: { userId: session.user.id },
    include: { organization: true },
  });

  if (!userOrg?.organization.isSuperAdmin) {
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

  return companies.map((company: { id: string; name: string; email: string; status: string; _count: { members: number }; createdAt: Date }) => ({
    id: company.id,
    name: company.name,
    email: company.email,
    status: company.status,
    memberCount: company._count.members,
    createdAt: company.createdAt,
  }));
} 