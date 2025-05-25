import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";
import { auth } from "@/lib/auth";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get user's organization
    const userOrg = await prisma.member.findFirst({
      where: { userId: session.user.id },
      include: { organization: true },
    });

    if (!userOrg) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get total employees
    const totalEmployees = await prisma.member.count({
      where: { organizationId: userOrg.organizationId },
    });

    // Get total properties
    const totalProperties = await prisma.property.count();

    // Get active invitations
    const activeInvitations = await prisma.invitation.count({
      where: {
        organizationId: userOrg.organizationId,
        status: "pending",
        expiresAt: {
          gt: new Date(),
        },
      },
    });

    return NextResponse.json({
      totalEmployees,
      totalProperties,
      activeInvitations,
    });
  } catch (error) {
    console.error("Error fetching stats:", error);
    return NextResponse.json(
      { error: "Failed to fetch stats" },
      { status: 500 }
    );
  }
} 