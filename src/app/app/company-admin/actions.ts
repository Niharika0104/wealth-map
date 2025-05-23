import { PrismaClient } from "@prisma/client";
import { auth } from "@/lib/auth";

const prisma = new PrismaClient();

type MemberWithUser = {
  user: {
    id: string;
    name: string | null;
    email: string;
    lastActive: Date | null;
    createdAt: Date;
    twoFactorEnabled: boolean;
  };
  role: string;
  status: string;
};

export async function getEmployees() {
  const session = await auth();
  if (!session?.user) {
    throw new Error("Unauthorized");
  }

  // Get user's organization
  const userOrg = await prisma.member.findFirst({
    where: { userId: session.user.id },
    include: { organization: true },
  });

  if (!userOrg) {
    throw new Error("Unauthorized");
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
    status: member.status,
    lastActive: member.user.lastActive || member.user.createdAt,
    twoFactorEnabled: member.user.twoFactorEnabled,
  }));
} 