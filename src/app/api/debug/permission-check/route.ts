import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

/**
 * Permission Check API
 * Allows checking if the current user has a specific permission
 */
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const permission = searchParams.get('permission');
    
    if (!permission) {
      return NextResponse.json({ error: "Permission parameter is required" }, { status: 400 });
    }
    
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ 
        error: "Unauthorized",
        message: "You need to be logged in to check permissions"
      }, { status: 401 });
    }
    
    // Special handling for wildcards
    const hasPermission = (() => {
      if (!session.user.permissions || !Array.isArray(session.user.permissions)) {
        return false;
      }
      
      // Direct match
      if (session.user.permissions.some(p => p.name === permission)) {
        return true;
      }
      
      // Wildcard match (e.g. system:* should match system:settings)
      if (permission.includes(':')) {
        const [category, action] = permission.split(':');
        return session.user.permissions.some(p => 
          p.name === `${category}:*` || 
          (p.name.startsWith(`${category}:`) && p.name.endsWith('*'))
        );
      }
      
      return false;
    })();
    
    return NextResponse.json({
      hasPermission,
      user: {
        id: session.user.id,
        role: session.user.role,
      },
      permission,
      permissions: session.user.permissions?.map(p => p.name) || [],
    });
  } catch (error) {
    console.error("Permission check error:", error);
    return NextResponse.json({ 
      error: "Permission check failed",
      details: error instanceof Error ? error.message : "Unknown error" 
    }, { status: 500 });
  }
}
