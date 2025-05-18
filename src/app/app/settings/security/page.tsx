"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@/hooks/use-auth";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";
import { Loader2, Shield, ShieldX, ShieldCheck, User, Info } from "lucide-react";
import TwoFactorSetup from "./two-factor-setup";

interface SecurityInfo {
  hasTwoFactor: boolean;
  twoFactorMethods: string[];
  lastSignIn?: Date;
  accountCreated?: Date;
}

export default function SecurityPage() {
  const [securityInfo, setSecurityInfo] = useState<SecurityInfo | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { user, refreshSession } = useAuth();
  const router = useRouter();

  // Fetch security info
  const fetchSecurityInfo = async () => {
    try {
      setIsLoading(true);
      // Fetch 2FA status
      const twoFactorResponse = await authClient.twoFactor.getStatus();
      
      // Fetch user account info 
      const userSession = await authClient.getSession();
      
      setSecurityInfo({
        hasTwoFactor: twoFactorResponse.enabled,
        twoFactorMethods: twoFactorResponse.methods || [],
        lastSignIn: userSession?.user?.lastSignInAt ? new Date(userSession.user.lastSignInAt) : undefined,
        accountCreated: userSession?.user?.createdAt ? new Date(userSession.user.createdAt) : undefined,
      });
    } catch (error) {
      console.error("Failed to fetch security info:", error);
      toast.error("Failed to load security information");
    } finally {
      setIsLoading(false);
    }
  };

  // Load security info on page load
  useEffect(() => {
    fetchSecurityInfo();
  }, []);

  const formatDate = (date?: Date) => {
    if (!date) return "Unknown";
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  const handleDisable2FA = async () => {
    if (window.confirm("Are you sure you want to disable two-factor authentication? This will reduce the security of your account.")) {
      setIsLoading(true);
      try {
        await authClient.twoFactor.disable();
        toast.success("Two-factor authentication has been disabled");
        fetchSecurityInfo();
        refreshSession();
      } catch (error) {
        console.error("Failed to disable 2FA:", error);
        toast.error("Failed to disable two-factor authentication");
      } finally {
        setIsLoading(false);
      }
    }
  };

  // Show loading state
  if (isLoading && !securityInfo) {
    return (
      <div className="flex justify-center p-6">
        <Loader2 className="h-6 w-6 animate-spin" />
      </div>
    );
  }

  return (
    <div className="container mx-auto py-6 space-y-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Security Settings</h1>
        <p className="text-muted-foreground">Manage your account security settings</p>
      </div>

      <div className="grid gap-6">
        {/* Account Information */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg">Account Information</CardTitle>
                <CardDescription>Basic security information about your account</CardDescription>
              </div>
              <User className="h-5 w-5 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Account Created</h3>
                <p>{formatDate(securityInfo?.accountCreated)}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Last Sign In</h3>
                <p>{formatDate(securityInfo?.lastSignIn)}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 2FA Status */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg">Two-Factor Authentication</CardTitle>
                <CardDescription>Add an extra layer of security to your account</CardDescription>
              </div>
              {securityInfo?.hasTwoFactor ? (
                <ShieldCheck className="h-5 w-5 text-green-600" />
              ) : (
                <ShieldX className="h-5 w-5 text-amber-500" />
              )}
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {securityInfo?.hasTwoFactor ? (
              <>
                <div className="bg-green-50 border border-green-100 rounded-md p-4 flex items-start">
                  <div className="mr-3 mt-0.5">
                    <ShieldCheck className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-medium text-green-800">Two-factor authentication is enabled</h3>
                    <p className="text-sm text-green-700 mt-1">
                      Your account has an additional layer of security. You'll need to provide a verification code when signing in.
                    </p>
                  </div>
                </div>

                {securityInfo.twoFactorMethods.length > 0 && (
                  <div>
                    <h3 className="text-sm font-medium mb-2">Active methods:</h3>
                    <ul className="space-y-2">
                      {securityInfo.twoFactorMethods.map((method) => (
                        <li key={method} className="flex items-center">
                          <Shield className="h-4 w-4 mr-2 text-primary" />
                          <span className="capitalize">{method}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="pt-2">
                  <Button 
                    variant="destructive" 
                    onClick={handleDisable2FA}
                    disabled={isLoading}
                    className="w-full sm:w-auto"
                  >
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                    Disable two-factor authentication
                  </Button>
                </div>
              </>
            ) : (
              <div>
                <div className="bg-amber-50 border border-amber-100 rounded-md p-4 flex items-start mb-6">
                  <div className="mr-3 mt-0.5">
                    <Info className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="font-medium text-amber-800">Two-factor authentication is not enabled</h3>
                    <p className="text-sm text-amber-700 mt-1">
                      We strongly recommend enabling two-factor authentication for additional account security.
                    </p>
                  </div>
                </div>

                <TwoFactorSetup />
              </div>
            )}
          </CardContent>
        </Card>
        
        {/* Password */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Password</CardTitle>
            <CardDescription>Update your password to keep your account secure</CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              variant="outline" 
              onClick={() => router.push("/app/settings/security/change-password")}
              className="w-full sm:w-auto"
            >
              Change password
            </Button>
          </CardContent>
        </Card>

        {/* Recent Sign-ins (you can implement this later) */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Recent Sign-ins</CardTitle>
            <CardDescription>View your recent account activity</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Activity monitoring will be available soon.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}