"use client";

import { useAuth } from "@/hooks/use-auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { authClient } from "@/lib/auth-client";

// This component ensures that children are only rendered when authenticated
export default function AuthGuard({ 
  children,
  requireRole
}: { 
  children: React.ReactNode;
  requireRole?: string | string[];
}) {
  const { isAuthenticated, isLoading, user } = useAuth();
  const [is2FARequired, setIs2FARequired] = useState(false);
  const [isCheckingPrivileges, setIsCheckingPrivileges] = useState(false);
  const router = useRouter();
    const { requires2FA } = useAuth();
  
  useEffect(() => {
    const check2FAStatus = async () => {
      if (isAuthenticated) {
        try {
          // Check if the current user requires 2FA verification using our enhanced helper
          if (requires2FA()) {
            // Store email for the 2FA page
            if (typeof window !== 'undefined' && user?.email) {
              sessionStorage.setItem('auth_email', user.email);
              sessionStorage.setItem('auth_waiting_for_2fa', 'true');
            }
            setIs2FARequired(true);
            router.replace('/auth/2fa');
          }
        } catch (error) {
          console.error('Error checking 2FA status:', error);
        }
      }
    };
    
    // If authenticated and we have a user, check for 2FA requirements
    if (isAuthenticated && user && !isLoading) {
      check2FAStatus();
    } 
    // If not loading and not authenticated, redirect to auth page
    else if (!isLoading && !isAuthenticated) {
      const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/';
      const returnUrl = encodeURIComponent(currentPath);
      router.replace(`/auth?tab=signin&returnUrl=${returnUrl}`);
    }
  }, [isAuthenticated, isLoading, user, router]);
  
  // Check for role-based access if requireRole is provided
  useEffect(() => {
    if (requireRole && isAuthenticated && user && !isLoading) {
      setIsCheckingPrivileges(true);
      
      const hasRequiredRole = Array.isArray(requireRole) 
        ? requireRole.some(role => user.role === role)
        : user.role === requireRole;
      
      if (!hasRequiredRole) {
        // User doesn't have the required role, redirect to dashboard
        router.replace('/app');
      }
      
      setIsCheckingPrivileges(false);
    }
  }, [requireRole, isAuthenticated, isLoading, user, router]);
  // While checking auth state or redirecting, show a loading indicator
  if (isLoading || !isAuthenticated || is2FARequired || isCheckingPrivileges) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-sm text-muted-foreground">
            {isLoading ? "Loading your session..." : 
             is2FARequired ? "Redirecting to two-factor authentication..." :
             isCheckingPrivileges ? "Checking access privileges..." :
             "Redirecting to login..."}
          </p>
        </div>
      </div>
    );
  }

  // Only render children if authenticated and no 2FA is required
  return <>{children}</>;
}
