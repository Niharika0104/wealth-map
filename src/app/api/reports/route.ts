import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";
import { auth } from "@/lib/auth";

const prisma = new PrismaClient();

// Save report
export async function POST(req: Request) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Check if user has permission to create reports
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
      role.permissions.some(p => p.name === "reports:create")
    );

    if (!hasPermission) {
      return NextResponse.json(
        { error: "You don't have permission to create reports" },
        { status: 403 }
      );
    }

    const { title, description, notes, reportType } = await req.json();

    if (!title || !reportType) {
      return NextResponse.json(
        { error: "Missing required fields: title, reportType" },
        { status: 400 }
      );
    }

    const report = await prisma.report.create({
      data: {
        title,
        description,
        notes,
        reportType,
        userId: session.user.id,
      },
    });

    return NextResponse.json({ message: "Report saved successfully", report });
  } catch (error) {
    console.error("Error saving report:", error);
    return NextResponse.json(
      { error: "Error saving report" },
      { status: 500 }
    );
  }
}

// Get reports
export async function GET(req: Request) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Check if user has permission to view reports
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
      role.permissions.some(p => p.name === "reports:view")
    );

    if (!hasPermission) {
      return NextResponse.json(
        { error: "You don't have permission to view reports" },
        { status: 403 }
      );
    }

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (id) {
      const report = await prisma.report.findUnique({
        where: { id },
      });

      if (!report) {
        return NextResponse.json(
          { error: "Report not found" },
          { status: 404 }
        );
      }

      return NextResponse.json(report);
    }

    const reports = await prisma.report.findMany({
      where: { userId: session.user.id },
    });

    return NextResponse.json(reports);
  } catch (error) {
    console.error("Error getting reports:", error);
    return NextResponse.json(
      { error: "Error retrieving reports" },
      { status: 500 }
    );
  }
}

// Delete report
export async function DELETE(req: Request) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Check if user has permission to delete reports
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
      role.permissions.some(p => p.name === "reports:create")
    );

    if (!hasPermission) {
      return NextResponse.json(
        { error: "You don't have permission to delete reports" },
        { status: 403 }
      );
    }

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Report ID is required" },
        { status: 400 }
      );
    }

    const report = await prisma.report.findUnique({
      where: { id },
    });

    if (!report) {
      return NextResponse.json(
        { error: "Report not found" },
        { status: 404 }
      );
    }

    // Check if user owns the report
    if (report.userId !== session.user.id) {
      return NextResponse.json(
        { error: "You don't have permission to delete this report" },
        { status: 403 }
      );
    }

    await prisma.report.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Report deleted successfully" });
  } catch (error) {
    console.error("Error deleting report:", error);
    return NextResponse.json(
      { error: "Error deleting report" },
      { status: 500 }
    );
  }
}
