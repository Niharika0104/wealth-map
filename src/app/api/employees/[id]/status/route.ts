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

    // Get user's organization
    const userOrg = await prisma.member.findFirst({
      where: { userId: session.user.id },
      include: { organization: true },
    });

    if (!userOrg || userOrg.role !== 'admin') {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get target employee
    const employee = await prisma.member.findFirst({
      where: {
        userId: params.id,
        organizationId: userOrg.organizationId,
      },
    });

    if (!employee) {
      return NextResponse.json({ error: "Employee not found" }, { status: 404 });
    }

    // Toggle status
    const updatedEmployee = await prisma.member.update({
      where: { id: employee.id },
      data: {
        status: employee.status === 'active' ? 'inactive' : 'active',
      },
    });

    return NextResponse.json(updatedEmployee);
  } catch (error) {
    console.error('Status update error:', error);
    return NextResponse.json(
      { error: "Failed to update status" },
      { status: 500 }
    );
  }
} 