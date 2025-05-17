import { z } from 'zod';
import { ac } from '@/lib/auth';

// Role hierarchy from your existing setup
export const RoleHierarchy = {
  super_admin: ['company_admin', 'analyst', 'viewer'],
  company_admin: ['analyst', 'viewer'],
  analyst: ['viewer'],
  viewer: []
} as const;

// Role types
export type Role = keyof typeof RoleHierarchy;

// Permission types based on your existing statements
export type Resource = 'property' | 'report' | 'employee' | 'client' | 'company' | 'data';
export type Action = 'view' | 'search' | 'create' | 'update' | 'delete' | 'export' | 'share' | 'schedule' | 'invite' | 'manage' | 'permissions' | 'settings' | 'billing';
export type Permission = `${Resource}:${Action}`;

// User type with role information
export interface UserWithRole {
  id: string;
  email: string;
  name: string;
  role: Role;
  companyId: string | null;
  isEmailVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Session type with role information
export interface SessionWithRole {
  user: UserWithRole;
  expires: Date;
}

// Role assignment validation schema
export const roleAssignmentSchema = z.object({
  userId: z.string(),
  role: z.enum(['company_admin', 'analyst', 'viewer'] as const),
  companyId: z.string().optional()
});

// Permission check helper type
export type PermissionCheck = {
  resource: Resource;
  action: Action;
};

// Role validation schema
export const roleValidationSchema = z.object({
  role: z.enum(['super_admin', 'company_admin', 'analyst', 'viewer'] as const),
  companyId: z.string().optional()
}); 