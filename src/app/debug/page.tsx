"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/use-auth";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function TestAuthPage() {
  const { isAuthenticated, isLoading, user, signOut } = useAuth();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container py-10">
      <h1 className="text-2xl font-bold mb-6">Auth Debugging Page</h1>

      <Card className="p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Authentication Status</h2>
        <div className="space-y-2">
          <div>
            <strong>isLoading:</strong> {isLoading ? "Yes" : "No"}
          </div>
          <div>
            <strong>isAuthenticated:</strong> {isAuthenticated ? "Yes" : "No"}
          </div>
          <div>
            <strong>Current URL:</strong> {typeof window !== 'undefined' ? window.location.href : 'N/A'}
          </div>
          {user && (
            <>
              <div>
                <strong>User:</strong> {user.name} ({user.email})
              </div>
              <div>
                <strong>Role:</strong> {user.role || "No role assigned"}
              </div>
            </>
          )}
        </div>
      </Card>

      <div className="flex gap-4">
        <Button 
          onClick={() => router.push("/auth?tab=signin")}
          variant="outline"
        >
          Go to Login Page
        </Button>
        
        {isAuthenticated && (
          <Button 
            onClick={() => signOut("/")}
            variant="destructive"
          >
            Sign Out
          </Button>
        )}

        <Button 
          onClick={() => router.push("/app")}
        >
          Go to App
        </Button>
      </div>
    </div>
  );
}
