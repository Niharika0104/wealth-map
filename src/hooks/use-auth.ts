"use client";

import { useSession, signOut, getSession, refreshSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useEffect, useState, useCallback } from "react";
import { Role, Permission, PermissionCheck } from '@/types/auth';
import { ac } from '@/lib/auth';

// Custom hook that encapsulates common auth functionality
export function useAuth() {
  const { data: session, isPending, error, mutate } = useSession();
  const router = useRouter();
  const [lastRefresh, setLastRefresh] = useState<number>(0);
  
  // Refresh the session when needed, but not too frequently
  const refreshSessionIfNeeded = useCallback(async () => {
    const now = Date.now();
    // Only refresh if it's been more than 30 seconds since last refresh
    if (now - lastRefresh > 30000) {
      try {
        await refreshSession();
        setLastRefresh(now);
      } catch (error) {
        console.error("Session refresh error:", error);
      }
    }
  }, [refreshSession, lastRefresh]);

  // Check session on initial load and set up periodic checks
  useEffect(() => {
    // Initial check
    refreshSessionIfNeeded();
    
    // Set up periodic session refresh when tab becomes visible
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        refreshSessionIfNeeded();
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [refreshSessionIfNeeded]);

  const handleSignOut = async (redirectPath = "/") => {
    try {
      // Clear any 2FA-related storage first
      if (typeof window !== 'undefined') {
        sessionStorage.removeItem('auth_waiting_for_2fa');
        sessionStorage.removeItem('auth_email');
        sessionStorage.removeItem('auth_session_verified');
      }
      
      await signOut({
        query: { callbackUrl: redirectPath },
        fetchOptions: {
          onError: (ctx: { error?: { message?: string } }) => {
            toast.error(ctx.error?.message || "Failed to sign out");
          },
          onSuccess: () => {
            toast.success("Signed out successfully");
          },
        },
      });
    } catch (error) {
      console.error("Sign out error:", error);
      toast.error("Failed to sign out");
    }
  };

  const user = session?.user;
  
  const isAuthenticated = !!session && !isPending;
  const isLoading = isPending;
  
  // Check if 2FA is needed for the current session
  const requires2FA = useCallback(() => {
    if (!session || !user) return false;
    
    // Check various possible property names for 2FA requirement
    return !!(
      user.requiresTwoFactor ||
      user.requires2FA ||
      user.needsVerification ||
      user.twoFactorRequired ||
      (typeof window !== 'undefined' && sessionStorage.getItem('auth_waiting_for_2fa') === 'true')
    );
  }, [session, user]);
  
  // Check if 2FA is enabled for the user
  const has2FAEnabled = useCallback(() => {
    if (!session || !user) return false;
    
    // Check various possible property names for 2FA status
    return !!(
      user.twoFactorEnabled ||
      user.has2FA ||
      user.has2faEnabled
    );
  }, [session, user]);
  
  // Permissions and role helpers
  const hasRole = (role: string) => {
    return user?.role === role;
  };
  
  const hasPermission = (permission: string) => {
    if (!user || !('permissions' in user)) return false;
    return (user.permissions as string[]).includes(permission);
  };
  
  const isAdmin = hasRole('super_admin') || hasRole('admin');
  
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
    session,
    isAuthenticated,
    isLoading,
    error,
    signOut: handleSignOut,
    hasRole,
    hasPermission,
    isAdmin,
    requires2FA,
    has2FAEnabled,
    refreshSession: mutate,
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
