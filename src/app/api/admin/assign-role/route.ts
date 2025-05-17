import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { roleAssignmentSchema } from '@/types/auth';
import { ac } from '@/lib/auth';
import { prisma } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const session = await auth.api.getSession({
      headers: request.headers
    });
    
    if (!session?.user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const validatedData = roleAssignmentSchema.parse(body);
    const { userId, role, companyId } = validatedData;

    // Check if the current user can assign the target role
    if (!ac.canAssignRole(session.user.role as any, role)) {
      return NextResponse.json(
        { error: 'You do not have permission to assign this role' },
        { status: 403 }
      );
    }

    // For company_admin role, ensure companyId is provided
    if (role === 'company_admin' && !companyId) {
      return NextResponse.json(
        { error: 'Company ID is required for company_admin role' },
        { status: 400 }
      );
    }

    // Update user role
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        role,
        members: role === 'company_admin' && companyId ? {
          create: {
            id: crypto.randomUUID(),
            organizationId: companyId,
            role: 'admin',
            createdAt: new Date()
          }
        } : undefined
      }
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error('Role assignment error:', error);
    
    if (error instanceof Error && error.name === 'ZodError') {
      return NextResponse.json(
        { error: 'Invalid request data', details: (error as any).errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 