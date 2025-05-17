"use client";

import { useAuth } from "@/hooks/use-auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Loader2 } from "lucide-react";

// This component ensures that children are only rendered when authenticated
export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();
  
  useEffect(() => {
    // If not loading and not authenticated, redirect to auth page with the correct tab
    if (!isLoading && !isAuthenticated) {
      const returnUrl = encodeURIComponent(window.location.pathname);
      router.replace(`/auth?tab=signin&returnUrl=${returnUrl}`);
    }
  }, [isAuthenticated, isLoading, router]);

  // While checking auth state or redirecting, show a loading indicator
  if (isLoading || !isAuthenticated) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-sm text-muted-foreground">
            {isLoading ? "Loading your session..." : "Redirecting to login..."}
          </p>
        </div>
      </div>
    );
  }

  // Only render children if authenticated
  return <>{children}</>;
}
