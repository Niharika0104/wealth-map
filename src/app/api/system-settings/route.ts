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

    // Check if user has permission to view system settings
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

    const hasPermission = user?.roles.some(role =>
      role.permissions.some(p => p.name === "system:*")
    );

    if (!hasPermission) {
      return NextResponse.json(
        { error: "You don't have permission to view system settings" },
        { status: 403 }
      );
    }

    let settings = await prisma.systemSettings.findFirst();
    if (!settings) {
      // Create default settings if not present
      settings = await prisma.systemSettings.create({
        data: {
          systemName: "Wealth Management System",
          timezone: "utc",
          maintenance: false,
        },
      });
    }
    return NextResponse.json(settings);
  } catch (error) {
    console.error("Error fetching system settings:", error);
    return NextResponse.json(
      { error: "Error fetching system settings" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Check if user has permission to manage system settings
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

    const hasPermission = user?.roles.some(role =>
      role.permissions.some(p => p.name === "system:*")
    );

    if (!hasPermission) {
      return NextResponse.json(
        { error: "You don't have permission to manage system settings" },
        { status: 403 }
      );
    }

    const body = await req.json();
    let settings = await prisma.systemSettings.findFirst();
    if (!settings) {
      settings = await prisma.systemSettings.create({
        data: {
          systemName: body.systemName || "Wealth Management System",
          timezone: body.timezone || "utc",
          maintenance: body.maintenance ?? false,
        },
      });
    } else {
      settings = await prisma.systemSettings.update({
        where: { id: settings.id },
        data: {
          systemName: body.systemName,
          timezone: body.timezone,
          maintenance: body.maintenance,
        },
      });
    }
    return NextResponse.json(settings);
  } catch (error) {
    console.error("Error updating system settings:", error);
    return NextResponse.json(
      { error: "Error updating system settings" },
      { status: 500 }
    );
  }
} 