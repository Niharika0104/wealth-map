"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SignIn from "./sign-in";
import SignUp from "./sign-up";
import { Card } from "@/components/ui/card";
import { useSession } from "@/lib/auth-client";
import { Loader2 } from "lucide-react";

export default function AuthLayout() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const tab = searchParams.get("tab") || "signin";
  const returnUrl = searchParams.get("returnUrl") || "/app";
  const [mounted, setMounted] = useState(false);
  
  // Get session state
  const { data: session, isPending } = useSession();

  useEffect(() => {
    setMounted(true);
    
    // If user is already logged in, redirect to return URL or dashboard
    if (mounted && session && !isPending) {
      router.replace(returnUrl);
    }
    
    // If no tab parameter is set, add it to the URL with "signin" as default
    if (mounted && !searchParams.has("tab")) {
      const params = new URLSearchParams(searchParams.toString());
      params.set("tab", "signin");
      router.replace(`?${params.toString()}`, { scroll: false });
    }
  }, [session, isPending, router, returnUrl, searchParams, mounted]);

  const handleTabChange = (value: string) => {
    // Update URL with the new tab value while preserving other query params
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", value);
    router.replace(`?${params.toString()}`);
  };
  // Show loading state while checking auth state
  if (isPending || !mounted) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-sm text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }
  
  // Redirect if user is already logged in
  if (session) {
    router.replace(returnUrl);
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-sm text-muted-foreground">Redirecting...</p>
        </div>
      </div>
    );
  }
  // Determine which component to show based on tab
  const renderAuthComponent = () => {
    switch (tab) {
      case 'signin':
        return <SignIn />;
      case 'signup':
        return <SignUp />;
      default:
        return <SignIn />;
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4 mx-auto w-full max-w-md">
      <div className="w-full">
        <Card className="overflow-hidden shadow-lg border-neutral-200">
          <div className="p-4 border-b">
            <Tabs value={tab || "signin"} onValueChange={handleTabChange} className="w-full">
              <TabsList className="grid grid-cols-2 w-full">
                <TabsTrigger value="signin">Sign In</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
            {renderAuthComponent()}
        </Card>
        
        {/* Brand logo or additional information can go here */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Wealth Map. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}