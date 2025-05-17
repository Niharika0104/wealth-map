"use client";

import { useSession, signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

// Custom hook that encapsulates common auth functionality
export function useAuth() {
  const { data: session, isPending, error } = useSession();
  const router = useRouter();

  const handleSignOut = async (redirectPath = "/") => {
    try {
      await signOut({
        query: { callbackUrl: redirectPath },
        fetchOptions: {
          onError: (ctx) => {
            toast.error(ctx.error.message || "Failed to sign out");
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
  const isAuthenticated = !!session && !isPending;
  const isLoading = isPending;
  const user = session?.user;
  
  // Permissions and role helpers
  const hasRole = (role: string) => {
    return user?.role === role;
  };
  
  const hasPermission = (permission: string) => {
    if (!user || !('permissions' in user)) return false;
    return (user.permissions as string[]).includes(permission);
  };
  
  const isAdmin = hasRole('super_admin') || hasRole('admin');
  
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
  };
}
