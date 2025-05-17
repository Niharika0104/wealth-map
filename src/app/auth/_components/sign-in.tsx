"use client";

import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Loader2, Mail } from "lucide-react";
import { signIn, $ERROR_CODES } from "@/lib/auth-client";
import { toast } from "sonner";
import { useRouter, useSearchParams } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [magicLinkLoading, setMagicLinkLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const returnUrl = searchParams.get("returnUrl") || "/app";  const handleEmailSignIn = async () => {
    if (!email || !password) {
      toast.error("Please enter both email and password");
      return;
    }
    
    console.log("Attempting to sign in", { email, returnUrl });
    setLoading(true);
      try {
      // Store the email in sessionStorage for the 2FA page
      sessionStorage.setItem('auth_email', email);
        await signIn.email({
        email,
        password,
        callbackURL: returnUrl,
        rememberMe: rememberMe,
        fetchOptions: {
          onError: (ctx) => {            
            console.error("Sign-in error:", ctx.error);
            setLoading(false);
            const errorMessage = ctx.error.message === "Invalid email or password" 
              ? "Invalid email or password" 
              : ctx.error.message || "Sign in failed";
            toast.error(errorMessage);
          },
          onSuccess: () => {
            console.log("Sign-in successful, redirecting to:", returnUrl);
            toast.success("Signed in successfully");
            router.push(returnUrl);
          },
        },
      });
    } catch (error) {
      console.error("Unexpected error during sign-in:", error);
      setLoading(false);
      toast.error("An unexpected error occurred. Please try again.");
    }
  };

  const handleMagicLinkSignIn = async () => {
    if (!email) {
      toast.error("Please enter your email");
      return;
    }
    
    setMagicLinkLoading(true);
    await signIn.magicLink({
      email,
      callbackURL: returnUrl,
      fetchOptions: {
        onError: (ctx) => {
          setMagicLinkLoading(false);
          toast.error(ctx.error.message || "Failed to send magic link");
        },
        onSuccess: () => {
          setMagicLinkLoading(false);
          toast.success("Magic link sent! Check your email");
        },
      },
    });
  };

  return (
    <>
      <CardHeader>
        <CardTitle className="text-lg md:text-xl">Welcome Back</CardTitle>
        <CardDescription className="text-xs md:text-sm">
          Sign in to your account to continue
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-4" onSubmit={(e) => {
          e.preventDefault();
          handleEmailSignIn();
        }}>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              disabled={loading || magicLinkLoading}
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Button 
                variant="link" 
                className="p-0 h-auto text-xs text-muted-foreground"
                type="button"
                onClick={() => toast.info("Please contact support for password reset")}
              >
                Forgot password?
              </Button>
            </div>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
              disabled={loading || magicLinkLoading}
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="remember" 
              checked={rememberMe}
              onCheckedChange={(checked) => {
                if (typeof checked === 'boolean') {
                  setRememberMe(checked);
                }
              }}
            />
            <label
              htmlFor="remember"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Remember me
            </label>
          </div>
          
          <Button
            type="submit"
            className="w-full"
            disabled={loading || magicLinkLoading}
          >
            {loading ? (
              <Loader2 size={16} className="mr-2 animate-spin" />
            ) : null}
            Sign In
          </Button>
          
          <div className="flex items-center justify-between my-2">
            <Separator className="w-[30%]" />
            <span className="text-xs text-muted-foreground px-2">or</span>
            <Separator className="w-[30%]" />
          </div>
          
          <Button
            type="button"
            variant="outline"
            className="w-full"
            disabled={loading || magicLinkLoading}
            onClick={handleMagicLinkSignIn}
          >
            {magicLinkLoading ? (
              <Loader2 size={16} className="mr-2 animate-spin" />
            ) : (
              <Mail size={16} className="mr-2" />
            )}
            Continue with Magic Link
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex-col space-y-4">
        <div className="flex justify-center w-full border-t pt-4">
          <p className="text-center text-xs text-muted-foreground">
            Don't have an account?{" "}
            <Button 
              variant="link" 
              className="p-0 h-auto text-xs" 
              onClick={() => {
                const params = new URLSearchParams(searchParams.toString());
                params.set("tab", "signup");
                router.replace(`?${params.toString()}`);
              }}
            >
              Sign up
            </Button>
          </p>
        </div>
        <div className="flex justify-center w-full">
          <p className="text-center text-xs text-neutral-500">
            Secured by <span className="text-orange-400 font-medium">better-auth.</span>
          </p>
        </div>
      </CardFooter>
    </>
  );
}