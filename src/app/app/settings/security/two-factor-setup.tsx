"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useAuth } from "@/hooks/use-auth";
import { toast } from "sonner";
import { Loader2, ShieldCheck, Mail, Smartphone, AlertTriangle } from "lucide-react";
import { authClient } from "@/lib/auth-client";

export default function TwoFactorSetupPage() {
  const [activeTab, setActiveTab] = useState("app");
  const [setupStep, setSetupStep] = useState<"init" | "qr" | "verify" | "complete">("init");
  const [isLoading, setIsLoading] = useState(false);
  const [verifyCode, setVerifyCode] = useState("");
  const [qrCodeData, setQrCodeData] = useState<{
    qrCode: string;
    secret: string;
  } | null>(null);
  const { user, refreshSession } = useAuth();

  // Start the 2FA app setup process
  const handleSetupApp = async () => {
    setIsLoading(true);
    try {
      const result = await authClient.twoFactor.setupTotp();
      setQrCodeData({
        qrCode: result.qrCodeUrl,
        secret: result.secret,
      });
      setSetupStep("qr");
    } catch (error) {
      toast.error("Failed to set up authenticator app");
      console.error("2FA setup error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Verify the app code  const handleVerifyApp = async () => {
    if (verifyCode.length !== 6 || !/^\d+$/.test(verifyCode)) {
      toast.error("Please enter a valid 6-digit code");
      return;
    }

    setIsLoading(true);
    try {
      // First try with enable method
      if (typeof authClient.twoFactor.enable === 'function') {
        await authClient.twoFactor.enable({
          code: verifyCode,
          method: "totp",
          fetchOptions: {
            onError: (ctx) => {
              toast.error(ctx.error?.message || "Invalid code. Please try again");
              setIsLoading(false);
            },
            onSuccess: () => {
              setSetupStep("complete");
              toast.success("Two-factor authentication enabled successfully");
              refreshSession();
            }
          }
        });
      } 
      // Then try with validateCode method
      else if (typeof authClient.twoFactor.validateCode === 'function') {
        await authClient.twoFactor.validateCode({
          code: verifyCode,
          method: "totp",
          fetchOptions: {
            onError: (ctx) => {
              toast.error(ctx.error?.message || "Invalid code. Please try again");
              setIsLoading(false);
            },
            onSuccess: () => {
              setSetupStep("complete");
              toast.success("Two-factor authentication enabled successfully");
              refreshSession();
            }
          }
        });
      }
      // Then try with confirm method
      else if (typeof authClient.twoFactor.confirm === 'function') {
        await authClient.twoFactor.confirm({
          code: verifyCode,
          method: "totp",
          fetchOptions: {
            onError: (ctx) => {
              toast.error(ctx.error?.message || "Invalid code. Please try again");
              setIsLoading(false);
            },
            onSuccess: () => {
              setSetupStep("complete");
              toast.success("Two-factor authentication enabled successfully");
              refreshSession();
            }
          }
        });
      }
      // As a last resort, try the verify method
      else if (typeof authClient.twoFactor.verify === 'function') {
        await authClient.twoFactor.verify({
          code: verifyCode,
          method: "totp",
          fetchOptions: {
            onError: (ctx) => {
              toast.error(ctx.error?.message || "Invalid code. Please try again");
              setIsLoading(false);
            },
            onSuccess: () => {
              setSetupStep("complete");
              toast.success("Two-factor authentication enabled successfully");
              refreshSession();
            }
          }
        });
      } else {
        throw new Error("No suitable 2FA validation method found");
      }
    } catch (error) {
      setIsLoading(false);
      toast.error("Verification failed. Please try again");
      console.error("2FA verification error:", error);
    }
  };

  // Set up email 2FA
  const handleSetupEmail = async () => {
    if (!user?.email) {
      toast.error("No email address available");
      return;
    }
    
    setIsLoading(true);
    try {
      await authClient.twoFactor.setupEmail({
        fetchOptions: {
          onError: (ctx) => {
            toast.error(ctx.error?.message || "Failed to set up email 2FA");
            setIsLoading(false);
          },
          onSuccess: () => {
            toast.success("Verification code sent to your email");
            setSetupStep("verify");
            setIsLoading(false);
          }
        }
      });
    } catch (error) {
      setIsLoading(false);
      toast.error("Failed to set up email verification");
      console.error("Email 2FA setup error:", error);
    }
  };
  // Verify the email code
  const handleVerifyEmail = async () => {
    if (verifyCode.length !== 6 || !/^\d+$/.test(verifyCode)) {
      toast.error("Please enter a valid 6-digit code");
      return;
    }

    setIsLoading(true);
    try {
      // First try with enable method
      if (typeof authClient.twoFactor.enable === 'function') {
        await authClient.twoFactor.enable({
          code: verifyCode,
          method: "email",
          fetchOptions: {
            onError: (ctx: any) => {
              toast.error(ctx.error?.message || "Invalid code. Please try again");
              setIsLoading(false);
            },
            onSuccess: () => {
              setSetupStep("complete");
              toast.success("Email verification enabled successfully");
              refreshSession();
            }
          }
        });
      } 
      // Then try with validateCode method
      else if (typeof authClient.twoFactor.validateCode === 'function') {
        await authClient.twoFactor.validateCode({
          code: verifyCode,
          method: "email",
          fetchOptions: {
            onError: (ctx: any) => {
              toast.error(ctx.error?.message || "Invalid code. Please try again");
              setIsLoading(false);
            },
            onSuccess: () => {
              setSetupStep("complete");
              toast.success("Email verification enabled successfully");
              refreshSession();
            }
          }
        });
      }
      // Then try with confirm method
      else if (typeof authClient.twoFactor.confirm === 'function') {
        await authClient.twoFactor.confirm({
          code: verifyCode,
          method: "email",
          fetchOptions: {
            onError: (ctx: any) => {
              toast.error(ctx.error?.message || "Invalid code. Please try again");
              setIsLoading(false);
            },
            onSuccess: () => {
              setSetupStep("complete");
              toast.success("Email verification enabled successfully");
              refreshSession();
            }
          }
        });
      }
      // As a last resort, try the verify method
      else if (typeof authClient.twoFactor.verify === 'function') {
        await authClient.twoFactor.verify({
          code: verifyCode,
          method: "email",
          fetchOptions: {
            onError: (ctx: any) => {
              toast.error(ctx.error?.message || "Invalid code. Please try again");
              setIsLoading(false);
            },
            onSuccess: () => {
              setSetupStep("complete");
              toast.success("Email verification enabled successfully");
              refreshSession();
            }
          }
        });
      } else {
        throw new Error("No suitable 2FA validation method found");
      }
    } catch (error) {
      setIsLoading(false);
      toast.error("Verification failed. Please try again");
      console.error("Email verification error:", error);
    }
  };
  // Request a new email code
  const handleResendEmailCode = async () => {
    setIsLoading(true);
    try {
      // Check available methods for sending new codes
      console.log("Available methods on twoFactor:", Object.keys(authClient.twoFactor));
      
      // Try different method names based on what might be available
      if (typeof authClient.twoFactor.resendCode === 'function') {
        await authClient.twoFactor.resendCode({
          method: 'email',
          fetchOptions: {
            onError: (ctx: any) => {
              toast.error(ctx.error?.message || "Failed to send a new code");
              setIsLoading(false);
            },
            onSuccess: () => {
              toast.success("New code sent to your email");
              setIsLoading(false);
              setVerifyCode("");
            }
          }
        });
      } 
      else if (typeof authClient.twoFactor.sendNewCode === 'function') {
        await authClient.twoFactor.sendNewCode({
          method: 'email',
          fetchOptions: {
            onError: (ctx: any) => {
              toast.error(ctx.error?.message || "Failed to send a new code");
              setIsLoading(false);
            },
            onSuccess: () => {
              toast.success("New code sent to your email");
              setIsLoading(false);
              setVerifyCode("");
            }
          }
        });
      }
      else if (typeof authClient.twoFactor.requestCode === 'function') {
        await authClient.twoFactor.requestCode({
          method: 'email',
          fetchOptions: {
            onError: (ctx: any) => {
              toast.error(ctx.error?.message || "Failed to send a new code");
              setIsLoading(false);
            },
            onSuccess: () => {
              toast.success("New code sent to your email");
              setIsLoading(false);
              setVerifyCode("");
            }
          }
        });
      }
    } catch (error) {
      setIsLoading(false);
      toast.error("Failed to send a new code");
    }
  };

  // Disable 2FA
  const handleDisable2FA = async () => {
    setIsLoading(true);
    try {
      await authClient.twoFactor.disable({
        fetchOptions: {
          onError: (ctx) => {
            toast.error(ctx.error?.message || "Failed to disable 2FA");
            setIsLoading(false);
          },
          onSuccess: () => {
            toast.success("Two-factor authentication disabled");
            setSetupStep("init");
            setIsLoading(false);
            refreshSession();
          }
        }
      });
    } catch (error) {
      setIsLoading(false);
      toast.error("Failed to disable 2FA");
      console.error("Disable 2FA error:", error);
    }
  };

  // Render the setup init view
  const renderInitSetup = () => (
    <div className="space-y-4">
      <p className="text-muted-foreground">
        Two-factor authentication adds an extra layer of security to your account by requiring more than just a 
        password to sign in.
      </p>
      
      {activeTab === "app" && (
        <Button 
          className="w-full" 
          onClick={handleSetupApp} 
          disabled={isLoading}
        >
          {isLoading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <ShieldCheck className="mr-2 h-4 w-4" />
          )}
          Set up authenticator app
        </Button>
      )}

      {activeTab === "email" && (
        <Button 
          className="w-full" 
          onClick={handleSetupEmail} 
          disabled={isLoading}
        >
          {isLoading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Mail className="mr-2 h-4 w-4" />
          )}
          Set up email verification
        </Button>
      )}
    </div>
  );

  // Render the QR code step
  const renderQRCode = () => (
    <div className="space-y-6">
      <div className="text-center">
        <div className="mx-auto bg-white p-2 rounded-lg w-fit">
          <Image 
            src={qrCodeData?.qrCode || ""} 
            alt="QR Code" 
            width={200} 
            height={200} 
            className="mx-auto"
          />
        </div>
        
        <div className="mt-4">
          <p className="text-sm text-muted-foreground mb-2">
            Scan this QR code with your authenticator app or enter the setup key manually:
          </p>
          <div className="bg-secondary p-2 rounded flex items-center justify-center">
            <code className="text-sm font-mono break-all">
              {qrCodeData?.secret}
            </code>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="verification-code">Verification Code</Label>
          <Input 
            id="verification-code"
            placeholder="Enter 6-digit code"
            value={verifyCode}
            onChange={(e) => setVerifyCode(e.target.value.slice(0, 6))}
            maxLength={6}
            className="text-center text-xl letter-spacing-2 font-mono"
          />
        </div>

        <Button 
          className="w-full" 
          onClick={handleVerifyApp}
          disabled={isLoading || verifyCode.length !== 6}
        >
          {isLoading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <ShieldCheck className="mr-2 h-4 w-4" />
          )}
          Verify and enable
        </Button>
      </div>
    </div>
  );

  // Render the verification step for email
  const renderVerify = () => (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <p className="text-muted-foreground">
          We've sent a verification code to your email address: 
          <span className="font-medium text-foreground"> {user?.email}</span>
        </p>
        
        <p className="text-sm text-muted-foreground">
          Enter the 6-digit code below to verify and enable two-factor authentication.
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email-verification-code">Verification Code</Label>
          <Input 
            id="email-verification-code"
            placeholder="Enter 6-digit code"
            value={verifyCode}
            onChange={(e) => setVerifyCode(e.target.value.slice(0, 6))}
            maxLength={6}
            className="text-center text-xl letter-spacing-2 font-mono"
          />
        </div>

        <Button 
          className="w-full" 
          onClick={handleVerifyEmail}
          disabled={isLoading || verifyCode.length !== 6}
        >
          {isLoading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <ShieldCheck className="mr-2 h-4 w-4" />
          )}
          Verify and enable
        </Button>
        
        <Button 
          variant="ghost" 
          className="w-full" 
          onClick={handleResendEmailCode}
          disabled={isLoading}
        >
          Resend verification code
        </Button>
      </div>
    </div>
  );

  // Render the completion step
  const renderComplete = () => (
    <div className="space-y-6">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="bg-green-100 p-3 rounded-full mb-4">
          <ShieldCheck className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-lg font-medium">Two-Factor Authentication Enabled</h3>
        <p className="text-muted-foreground mt-2">
          Your account is now protected with an additional layer of security.
        </p>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start space-x-3">
        <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="font-medium text-amber-800">Important:</h4>
          <p className="text-sm text-amber-700">
            Save your recovery codes in a safe place. If you lose access to your authenticator app or email, 
            you'll need these codes to regain access to your account.
          </p>
        </div>
      </div>

      <Button 
        variant="outline" 
        className="w-full" 
        onClick={() => setSetupStep("init")}
      >
        Back to settings
      </Button>
      
      <Button 
        variant="destructive" 
        className="w-full" 
        onClick={handleDisable2FA}
        disabled={isLoading}
      >
        {isLoading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          "Disable two-factor authentication"
        )}
      </Button>
    </div>
  );

  // Render content based on the current setup step
  const renderContent = () => {
    switch (setupStep) {
      case "init":
        return renderInitSetup();
      case "qr":
        return renderQRCode();
      case "verify":
        return renderVerify();
      case "complete":
        return renderComplete();
      default:
        return renderInitSetup();
    }
  };

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Two-Factor Authentication</CardTitle>
        <CardDescription>
          Enhance your account security with a second authentication factor
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        {setupStep === "init" && (
          <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="mb-4">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="app">Authenticator App</TabsTrigger>
              <TabsTrigger value="email">Email</TabsTrigger>
            </TabsList>
          </Tabs>
        )}
        
        {renderContent()}
      </CardContent>
      
      {setupStep !== "complete" && setupStep !== "init" && (
        <CardFooter>
          <Button 
            variant="outline" 
            className="w-full" 
            onClick={() => setSetupStep("init")}
            disabled={isLoading}
          >
            Cancel
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
