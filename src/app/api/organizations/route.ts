import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { auth } from "@/lib/auth";
import { authOptions } from "@/lib/auth";
import { z } from "zod";
import { hash } from "bcryptjs";
import { randomUUID } from "crypto";

const prisma = new PrismaClient();

// Validation schema for company registration
const companySchema = z.object({
  name: z.string().min(2, "Company name must be at least 2 characters"),
  companyType: z.string().min(1, "Please select a company type"),
  industry: z.string().min(1, "Please select an industry"),
  website: z.string().url("Please enter a valid website URL").optional(),
  address: z.string().min(5, "Please enter a valid address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  taxId: z.string().min(1, "Please enter your tax ID"),
  billingEmail: z.string().email("Please enter a valid email address"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log('Received request body:', body);

    const { name, companyType, industry, website, address, phone, taxId, billingEmail } = body;

    // Validate required fields
    const requiredFields = ['name', 'companyType', 'industry', 'address', 'phone', 'taxId', 'billingEmail'];
    const missingFields = requiredFields.filter(field => !body[field]);

    if (missingFields.length > 0) {
      return NextResponse.json(
        { 
          error: "Missing required fields", 
          fields: missingFields 
        },
        { status: 400 }
      );
    }

    // Check if organization already exists by name
    const existingOrg = await prisma.organization.findFirst({
      where: { name },
    });

    if (existingOrg) {
      return NextResponse.json(
        { error: "Organization with this name already exists" },
        { status: 400 }
      );
    }

    // Create organization with metadata
    const organization = await prisma.organization.create({
      data: {
        name,
        metadata: JSON.stringify({
          companyType,
          industry,
          website,
          address,
          phone,
          taxId,
          billingEmail,
        }),
      },
    });

    // Return success with organization ID for account setup
    return NextResponse.json({
      success: true,
      organizationId: organization.id,
      message: "Organization created successfully. Please complete your account setup.",
      nextStep: "setup-account"
    });
  } catch (error) {
    console.error("Error creating organization:", error);
    return NextResponse.json(
      { error: "Failed to create organization" },
      { status: 500 }
    );
  }
}

// Get all organizations (for super admin)
export async function GET(req: Request) {
  try {
    const session = await auth();
    
    if (!session?.user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    // Check if user is a super admin
    const userOrg = await prisma.member.findFirst({
      where: {
        userId: session.user.id,
      },
      include: {
        organization: true,
      },
    });

    if (!userOrg?.organization.isSuperAdmin) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 403 }
      );
    }

    const organizations = await prisma.organization.findMany({
      include: {
        members: {
          include: {
            user: true,
          },
        },
      },
    });

    return NextResponse.json(organizations);
  } catch (error) {
    console.error("Error fetching organizations:", error);
    return NextResponse.json(
      { error: "Failed to fetch organizations" },
      { status: 500 }
    );
  }
}
