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

    // Prevent removing the last admin
    if (employee.role === 'admin') {
      const adminCount = await prisma.member.count({
        where: {
          organizationId: userOrg.organizationId,
          role: 'admin',
        },
      });

      if (adminCount <= 1) {
        return NextResponse.json(
          { error: "Cannot remove the last admin" },
          { status: 400 }
        );
      }
    }

    // Toggle role
    const updatedEmployee = await prisma.member.update({
      where: { id: employee.id },
      data: {
        role: employee.role === 'admin' ? 'employee' : 'admin',
      },
    });

    return NextResponse.json(updatedEmployee);
  } catch (error) {
    console.error('Role update error:', error);
    return NextResponse.json(
      { error: "Failed to update role" },
      { status: 500 }
    );
  }
} 