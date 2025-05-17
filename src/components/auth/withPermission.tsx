import { ComponentType } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/hooks/useAuth';
import { Permission, PermissionCheck } from '@/types/auth';

type PermissionGuardProps = {
  permissions?: Permission[];
  resourceAction?: PermissionCheck;
  fallback?: React.ReactNode;
};

export function withPermission<P extends object>(
  WrappedComponent: ComponentType<P>,
  { permissions, resourceAction, fallback }: PermissionGuardProps
) {
  return function PermissionGuard(props: P) {
    const router = useRouter();
    const { checkPermission, checkPermissions, checkResourceAction, isLoading } = useAuth();

    if (isLoading) {
      return <div>Loading...</div>;
    }

    const hasAccess = permissions
      ? checkPermissions(permissions)
      : resourceAction
      ? checkResourceAction(resourceAction)
      : false;

    if (!hasAccess) {
      if (fallback) {
        return <>{fallback}</>;
      }
      router.push('/app');
      return null;
    }

    return <WrappedComponent {...props} />;
  };
} 