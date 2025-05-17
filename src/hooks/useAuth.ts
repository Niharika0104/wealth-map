import { useSession } from '@/lib/auth-client';
import { Role, Permission, PermissionCheck } from '@/types/auth';
import { ac } from '@/lib/auth';

export function useAuth() {
  const { data: session, isPending, error } = useSession();
  const user = session?.user;

  const isAuthenticated = !!session && !isPending;
  const isLoading = isPending;

  const checkPermission = (permission: Permission): boolean => {
    if (!user?.role) return false;
    return ac.hasPermission(user.role as Role, permission);
  };

  const checkPermissions = (permissions: Permission[]): boolean => {
    return permissions.every(permission => checkPermission(permission));
  };

  const checkResourceAction = ({ resource, action }: PermissionCheck): boolean => {
    return checkPermission(`${resource}:${action}` as Permission);
  };

  const canAssignRoleTo = (targetRole: Role): boolean => {
    if (!user?.role) return false;
    const userRole = user.role as Role;
    return ac.canAssignRole(userRole, targetRole);
  };

  const getAvailablePermissions = (): Permission[] => {
    if (!user?.role) return [];
    return ac.getRolePermissions(user.role as Role);
  };

  const getAvailableRoles = (): Role[] => {
    if (!user?.role) return [];
    return ac.getAssignableRoles(user.role as Role);
  };

  const isSuperAdmin = user?.role === 'super_admin';
  const isCompanyAdmin = user?.role === 'company_admin';
  const isAnalyst = user?.role === 'analyst';
  const isViewer = user?.role === 'viewer';

  return {
    user,
    isAuthenticated,
    isLoading,
    checkPermission,
    checkPermissions,
    checkResourceAction,
    canAssignRoleTo,
    getAvailablePermissions,
    getAvailableRoles,
    isSuperAdmin,
    isCompanyAdmin,
    isAnalyst,
    isViewer
  };
} 