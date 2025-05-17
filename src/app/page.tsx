'use client'

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/use-auth";

export default function Home() {
  const router = useRouter();
  const { isAuthenticated, isLoading, user } = useAuth();
  
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6">
      <div className="w-full max-w-2xl space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold">Welcome to Wealth Map</h1>
          <p className="text-lg text-muted-foreground">
            Your comprehensive solution for wealth management
          </p>
        </div>
        
        <div className="flex flex-col items-center justify-center space-y-4">
          {isLoading ? (
            <div>Loading authentication status...</div>
          ) : isAuthenticated ? (
            <div className="space-y-4 w-full">
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-center">
                <p className="text-green-700">
                  You are logged in as <strong>{user?.email}</strong>
                </p>
              </div>
              <Button 
                className="w-full" 
                size="lg"
                onClick={() => router.push("/app")}
              >
                Go to Dashboard
              </Button>
            </div>
          ) : (
            <div className="space-y-4 w-full">
              <Button 
                className="w-full" 
                size="lg"
                onClick={() => router.push("/auth?tab=signin")}
              >
                Sign In
              </Button>
              <Button 
                className="w-full" 
                variant="outline" 
                size="lg"
                onClick={() => router.push("/auth?tab=signup")}
              >
                Create Account
              </Button>
            </div>
          )}
          
          <div className="pt-4">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => router.push("/debug")}
            >
              Debug Auth
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
