"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function TwoFactorAuth() {
  const [code, setCode] = useState<string[]>(Array(6).fill(''));
  const [loading, setLoading] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const router = useRouter();
  
  const inputRefs = useRef<Array<HTMLInputElement | null>>(Array(6).fill(null));
    // Focus the first input on component mount and get user email if available
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
    
    if (typeof window !== 'undefined') {
      const email = sessionStorage.getItem('auth_email');
      if (email) {
        setUserEmail(email);
      }
    }
  }, []);

  const handleInputChange = (index: number, value: string) => {
    // Only allow digits
    if (!/^\d*$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Move to next input if a digit was entered
    if (value.length === 1 && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    // Handle backspace
    if (e.key === 'Backspace') {
      if (!code[index] && index > 0) {
        // If current input is empty and backspace is pressed, move to previous input
        inputRefs.current[index - 1]?.focus();
      }
    }
    
    // Handle arrow keys for navigation
    if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
    if (e.key === 'ArrowRight' && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text');
    const digits = pastedData.replace(/[^\d]/g, '').split('').slice(0, 6);
    
    if (digits.length) {
      const newCode = [...code];
      digits.forEach((digit, index) => {
        if (index < 6) {
          newCode[index] = digit;
        }
      });
      setCode(newCode);
      
      // Focus the input after the last pasted digit
      const focusIndex = Math.min(digits.length, 5);
      inputRefs.current[focusIndex]?.focus();
    }
  };  const handleVerify = async () => {
    const completeCode = code.join('');
    
    if (completeCode.length !== 6) {
      toast.error("Please enter a 6-digit verification code");
      return;
    }
    
    setLoading(true);    try {
      await authClient.twoFactor.enable({
        password: completeCode,
        fetchOptions: {
          onError: (ctx) => {
            toast.error(ctx.error?.message || "Invalid verification code");
            setLoading(false);
          },
          onSuccess: () => {
            toast.success("Verification successful");
            
            if (typeof window !== 'undefined') {
              sessionStorage.removeItem('auth_waiting_for_2fa');
              sessionStorage.removeItem('auth_email');
            }
            
            router.push("/app");
          }
        }
      });
    } catch (error) {
      setLoading(false);
      toast.error("Something went wrong. Please try again.");
      console.error("2FA verification error:", error);
    }
  };

  return (
    <>
      <CardHeader>
        <CardTitle className="text-lg md:text-xl">Two-Factor Authentication</CardTitle>
        <CardDescription className="text-xs md:text-sm">
          {userEmail ? (
            <>Verifying identity for <span className="font-medium">{userEmail}</span></>
          ) : (
            <>Enter the 6-digit code from your authenticator app</>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          <div>
            <div className="flex justify-center gap-2">
              {code.map((digit, index) => (
                <Input
                  key={index}
                  ref={el => { inputRefs.current[index] = el; }}
                  className="w-12 h-12 text-center text-lg font-semibold"
                  value={digit}
                  maxLength={1}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={index === 0 ? handlePaste : undefined}
                  inputMode="numeric"
                  disabled={loading}
                />
              ))}
            </div>
            <p className="text-center text-xs text-muted-foreground mt-4">
              Enter the code from your authenticator app
            </p>
          </div>
          <Button
            className="w-full"
            disabled={loading || code.join('').length !== 6}
            onClick={handleVerify}
          >
            {loading ? (
              <Loader2 size={16} className="mr-2 animate-spin" />
            ) : null}
            Verify Code
          </Button>
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-4">
        <Button 
          variant="link" 
          className="w-full" 
          onClick={() => {
            setLoading(true);
            toast.info("We're sending you a new verification code");
            // Mock request - in a real app, this would call the backend to send a new code
            setTimeout(() => {
              setLoading(false);
              toast.success("A new code has been sent to your device");
            }, 2000);
          }}
          disabled={loading}
        >
          I didn't receive a code
        </Button>
        <div className="flex justify-center w-full border-t pt-4">
          <p className="text-center text-xs text-neutral-500">
            Having trouble? <Button variant="link" className="p-0 h-auto text-xs">Contact support</Button>
          </p>
        </div>
      </CardFooter>
    </>
  );
}
