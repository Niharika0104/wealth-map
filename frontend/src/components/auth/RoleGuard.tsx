import { ReactNode, useEffect } from 'react';
import { useAuth } from '@/components/providers/AuthProvider';
import { useRouter } from 'next/navigation';

interface RoleGuardProps {
  children: ReactNode;
  allowedRoles: string[];
  redirectTo?: string;
}

export const RoleGuard = ({
  children,
  allowedRoles,
  redirectTo = '/login',
}: RoleGuardProps) => {
  const { user, isLoading, isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading) {
      // Not authenticated
      if (!isAuthenticated) {
        router.push(redirectTo);
        return;
      }

      // Get role code from the full role name (e.g., USER_ROLE_ADMIN -> ADMIN)
      const userRole = user?.role.split('_').pop();
      
      // Check if user role is in allowed roles
      if (userRole && !allowedRoles.includes(userRole)) {
        router.push('/dashboard');
      }
    }
  }, [isLoading, isAuthenticated, user, allowedRoles, redirectTo, router]);

  // Show nothing while loading
  if (isLoading) {
    return null;
  }

  // Not authenticated or unauthorized
  if (!isAuthenticated || !user) {
    return null;
  }

  // Get role code from the full role name (e.g., USER_ROLE_ADMIN -> ADMIN)
  const userRole = user.role.split('_').pop();
  
  // Authorized
  if (userRole && allowedRoles.includes(userRole)) {
    return <>{children}</>;
  }

  // Unauthorized
  return null;
};
