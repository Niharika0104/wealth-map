import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: "No session" }, { status: 401 });
    }

    // Get user with roles and permissions
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      include: {
        roles: {
          include: {
            permissions: true,
          },
        },
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Get all permissions from all roles
    const allPermissions = user.roles.flatMap(role => role.permissions);

    return NextResponse.json({
      session: {
        user: {
          id: session.user.id,
          name: session.user.name,
          email: session.user.email,
          role: session.user.role,
        },
      },
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        roles: user.roles.map(role => ({
          name: role.name,
          permissions: role.permissions.map(p => p.name),
        })),
        allPermissions: allPermissions.map(p => p.name),
      },
    });
  } catch (error) {
    console.error("Error in debug session:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
} 