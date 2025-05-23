import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";
import { randomUUID } from "crypto";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { organizationId, name, email, password } = body;

    // Validate required fields
    if (!organizationId || !name || !email || !password) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Check if organization exists
    const organization = await prisma.organization.findUnique({
      where: { id: organizationId },
    });

    if (!organization) {
      return NextResponse.json(
        { error: "Organization not found" },
        { status: 404 }
      );
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "User with this email already exists" },
        { status: 400 }
      );
    }

    // Create user
    const hashedPassword = await hash(password, 12);
    const user = await prisma.user.create({
      data: {
        id: randomUUID(),
        name,
        email,
        emailVerified: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    // Create account with password
    await prisma.account.create({
      data: {
        id: randomUUID(),
        accountId: user.id,
        providerId: "credentials",
        userId: user.id,
        password: hashedPassword,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    // Create member record
    await prisma.member.create({
      data: {
        id: randomUUID(),
        organizationId,
        userId: user.id,
        role: "admin", // First user is always an admin
        createdAt: new Date(),
      },
    });

    return NextResponse.json({
      success: true,
      message: "Account setup completed successfully",
      userId: user.id,
    });
  } catch (error) {
    console.error("Error setting up account:", error);
    return NextResponse.json(
      { error: "Failed to setup account" },
      { status: 500 }
    );
  }
} 