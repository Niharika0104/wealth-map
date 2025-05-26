import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

/**
 * Auth status debugging endpoint
 * This route helps diagnose RBAC and permission issues by returning the current auth state
 * without requiring authentication
 */
export async function GET() {
  try {
    const session = await auth();
    
    // Return basic info without requiring authentication
    return NextResponse.json({
      authenticated: !!session?.user,
      sessionInfo: session ? {
        id: session.user?.id,
        email: session.user?.email,
        role: session.user?.role,
        hasPermissions: Array.isArray(session.user?.permissions) && session.user?.permissions.length > 0,
        permissionCount: session.user?.permissions?.length || 0
      } : null,
      message: "This is a diagnostic endpoint to help troubleshoot auth issues"
    });
  } catch (error) {
    console.error("Auth check error:", error);
    return NextResponse.json({ 
      error: "Auth check failed", 
      details: error instanceof Error ? error.message : "Unknown error" 
    });
  }
}
