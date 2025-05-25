"use client"

import { usePermissions } from "@/hooks/usePermissions";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "@/components/ui/use-toast";

interface WithPermissionProps {
  permission?: string;
  permissions?: string[];
  requireAll?: boolean;
  children: React.ReactNode;
}

export function WithPermission({
  permission,
  permissions,
  requireAll = false,
  children,
}: WithPermissionProps) {
  const { hasPermission, hasAllPermissions, hasAnyPermission } = usePermissions();
  const router = useRouter();

  useEffect(() => {
    const hasAccess = permission
      ? hasPermission(permission)
      : permissions
      ? requireAll
        ? hasAllPermissions(permissions)
        : hasAnyPermission(permissions)
      : true;

    if (!hasAccess) {
      toast({
        title: "Access Denied",
        description: "You don't have permission to access this resource.",
        variant: "destructive",
      });
      router.push("/app");
    }
  }, [permission, permissions, requireAll, hasPermission, hasAllPermissions, hasAnyPermission, router]);

  const hasAccess = permission
    ? hasPermission(permission)
    : permissions
    ? requireAll
      ? hasAllPermissions(permissions)
      : hasAnyPermission(permissions)
    : true;

  if (!hasAccess) {
    return null;
  }

  return <>{children}</>;
} 