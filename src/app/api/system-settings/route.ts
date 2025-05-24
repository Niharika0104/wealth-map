import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function GET() {
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
}

export async function POST(req: Request) {
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
} 