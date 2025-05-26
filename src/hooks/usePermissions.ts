import { useSession } from "next-auth/react";
import { useMemo } from "react";

export type Permission = {
  name: string;
  category: string;
  description: string;
};

export type PermissionCategory = {
  name: string;
  permissions: Permission[];
};

export type GroupedPermissions = {
  [key: string]: PermissionCategory;
};

export function usePermissions() {
  const { data: session } = useSession();

  const permissions = useMemo(() => {
    if (!session?.user?.permissions) return [];
    return session.user.permissions;
  }, [session?.user?.permissions]);

  const groupedPermissions = useMemo(() => {
    const grouped: GroupedPermissions = {};
    
    if (!permissions || !Array.isArray(permissions)) {
      return grouped;
    }
    
    permissions.forEach((permission: Permission) => {
      if (!grouped[permission.category]) {
        grouped[permission.category] = {
          name: permission.category,
          permissions: [],
        };
      }
      grouped[permission.category].permissions.push(permission);
    });

    return grouped;
  }, [permissions]);

  const hasPermission = (permissionName: string): boolean => {
    // Special case for wildcard permissions
    if (permissionName.endsWith(':*')) {
      const prefix = permissionName.split(':')[0];
      return Array.isArray(permissions) && permissions.some((p: Permission) => 
        p.name === permissionName || p.name.startsWith(`${prefix}:`)
      );
    }
    
    return Array.isArray(permissions) && permissions.some((p: Permission) => p.name === permissionName);
  };

  const hasAnyPermission = (permissionNames: string[]): boolean => {
    if (!permissions || !Array.isArray(permissions) || permissions.length === 0) return false;
    return permissionNames.some((name) => hasPermission(name));
  };

  const hasAllPermissions = (permissionNames: string[]): boolean => {
    if (!permissions || !Array.isArray(permissions) || permissions.length === 0) return false;
    return permissionNames.every((name) => hasPermission(name));
  };

  const hasCategoryPermission = (category: string): boolean => {
    if (!permissions) return false;
    return permissions.some((p: Permission) => p.category === category);
  };

  return {
    permissions,
    groupedPermissions,
    hasPermission,
    hasAnyPermission,
    hasAllPermissions,
    hasCategoryPermission,
  };
} 