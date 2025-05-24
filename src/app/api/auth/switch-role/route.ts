import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";
import { auth } from "@/lib/auth";

const prisma = new PrismaClient();

// Available roles for switching based on current role
const availableRoles = {
  SUPER_ADMIN: ["SUPER_ADMIN", "COMPANY_ADMIN", "EMPLOYEE"],
  COMPANY_ADMIN: ["COMPANY_ADMIN", "EMPLOYEE"],
  EMPLOYEE: ["EMPLOYEE"],
};

export async function POST(req: Request) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { role } = await req.json();

    // Get user's current role
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      include: { roles: true },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Check if user has permission to switch to the requested role
    const userRole = user.roles[0]?.name || "EMPLOYEE";
    const allowedRoles = availableRoles[userRole as keyof typeof availableRoles];

    if (!allowedRoles?.includes(role)) {
      return NextResponse.json(
        { error: "Not authorized to switch to this role" },
        { status: 403 }
      );
    }

    // Update user's current role
    await prisma.user.update({
      where: { id: session.user.id },
      data: {
        currentRole: role,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error switching role:", error);
    return NextResponse.json(
      { error: "Failed to switch role" },
      { status: 500 }
    );
  }
} 