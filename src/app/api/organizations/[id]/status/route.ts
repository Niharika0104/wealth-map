import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { auth } from "@/lib/auth";

const prisma = new PrismaClient();

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Verify super admin status
    const userOrg = await prisma.member.findFirst({
      where: { userId: session.user.id },
      include: { organization: true },
    });

    if (!userOrg?.organization.isSuperAdmin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get target organization
    const organization = await prisma.organization.findUnique({
      where: { id: params.id },
    });

    if (!organization) {
      return NextResponse.json({ error: "Organization not found" }, { status: 404 });
    }

    // Toggle status
    const updatedOrg = await prisma.organization.update({
      where: { id: params.id },
      data: {
        status: organization.status === 'active' ? 'suspended' : 'active',
      },
    });

    return NextResponse.json(updatedOrg);
  } catch (error) {
    console.error('Status update error:', error);
    return NextResponse.json(
      { error: "Failed to update status" },
      { status: 500 }
    );
  }
} 