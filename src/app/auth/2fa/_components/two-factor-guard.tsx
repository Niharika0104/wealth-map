"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";

// This component ensures that users can only access the 2FA page
// when they are in the middle of an authentication flow
export default function TwoFactorAuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isValidFlow, setIsValidFlow] = useState<boolean | null>(null);  // First effect to check the session status
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const isWaitingFor2FA = sessionStorage.getItem('auth_waiting_for_2fa') === 'true';
    setIsValidFlow(isWaitingFor2FA);
  }, []);
  
  // Second effect to handle navigation after state has been updated
  useEffect(() => {
    if (isValidFlow === false) {
      toast.error("You need to sign in first");
      router.replace('/auth?tab=signin');
      return;
    }
    
    if (isValidFlow === true) {
      const emailStored = typeof window !== 'undefined' && 
        sessionStorage.getItem('auth_email');
        
      if (!emailStored && typeof window !== 'undefined') {
        console.log('Email not found in sessionStorage');
      }
    }
    
    // The 2FA flags will be cleared by the two-factor.tsx component after successful verification
  }, [router, isValidFlow]);

  // Show loading state while checking
  if (isValidFlow === null) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-sm text-muted-foreground">Verifying your session...</p>
        </div>
      </div>
    );
  }
  
  // Only render children if in a valid 2FA flow
  return isValidFlow ? <>{children}</> : null;
}
