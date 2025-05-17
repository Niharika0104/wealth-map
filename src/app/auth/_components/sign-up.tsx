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
import { useState, useEffect } from "react";
import Image from "next/image";
import { Loader2, X, Check, AlertCircle } from "lucide-react";
import { signUp, $ERROR_CODES } from "@/lib/auth-client";
import { toast } from "sonner";
import { useRouter, useSearchParams } from "next/navigation";
import { Separator } from "@/components/ui/separator";

export default function SignUp() {
  // Form state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  
  // UI state
  const [loading, setLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState<{
    score: number;
    message: string;
    color: string;
  }>({ score: 0, message: "", color: "" });
  const [formErrors, setFormErrors] = useState<{
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    passwordConfirmation?: string;
  }>({});
  
  const router = useRouter();
  const searchParams = useSearchParams();
  const returnUrl = searchParams.get("returnUrl") || "/app";

  // Handle image upload preview
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate image size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast.error("Image size should be less than 5MB");
        return;
      }
      
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Password strength checker
  useEffect(() => {
    if (!password) {
      setPasswordStrength({ score: 0, message: "", color: "" });
      return;
    }

    // Simple password strength calculation
    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    
    // Determine message and color based on score
    let message = "";
    let color = "";
    
    switch (score) {
      case 0:
      case 1:
        message = "Weak";
        color = "bg-red-500";
        break;
      case 2:
      case 3:
        message = "Moderate";
        color = "bg-yellow-500";
        break;
      case 4:
      case 5:
        message = "Strong";
        color = "bg-green-500";
        break;
    }
    
    setPasswordStrength({ score, message, color });
  }, [password]);

  // Form validation
  const validateForm = (): boolean => {
    const errors: any = {};
    
    if (!firstName.trim()) errors.firstName = "First name is required";
    if (!lastName.trim()) errors.lastName = "Last name is required";
    
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Please enter a valid email";
    }
    
    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    } else if (passwordStrength.score < 3) {
      errors.password = "Password is too weak";
    }
    
    if (password !== passwordConfirmation) {
      errors.passwordConfirmation = "Passwords don't match";
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form submission
  const handleSignUp = async () => {
    if (!validateForm()) return;
    
    setLoading(true);
    try {
      await signUp.email({
        email,
        password,
        name: `${firstName} ${lastName}`,
        image: image ? await convertImageToBase64(image) : undefined,
        callbackURL: returnUrl,
        fetchOptions: {
          onError: (ctx) => {
            setLoading(false);
            const errorMessage = ctx.error.code === $ERROR_CODES.USER_ALREADY_EXISTS
              ? "This email is already registered"
              : ctx.error.message || "Sign up failed";
            toast.error(errorMessage);
          },
          onSuccess: () => {
            toast.success("Account created successfully!");
            router.push(returnUrl);
          },
        },
      });
    } catch (error) {
      setLoading(false);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <CardHeader>
        <CardTitle className="text-lg md:text-xl">Create Account</CardTitle>
        <CardDescription className="text-xs md:text-sm">
          Enter your information to get started
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-4" onSubmit={(e) => {
          e.preventDefault();
          handleSignUp();
        }}>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="first-name" className="flex items-center gap-1">
                First name
                <span className="text-destructive">*</span>
              </Label>
              <Input
                id="first-name"
                placeholder="John"
                required
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                disabled={loading}
                className={formErrors.firstName ? "border-destructive" : ""}
              />
              {formErrors.firstName && (
                <p className="text-xs text-destructive flex items-center gap-1">
                  <AlertCircle size={12} /> {formErrors.firstName}
                </p>
              )}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="last-name" className="flex items-center gap-1">
                Last name
                <span className="text-destructive">*</span>
              </Label>
              <Input
                id="last-name"
                placeholder="Doe"
                required
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                disabled={loading}
                className={formErrors.lastName ? "border-destructive" : ""}
              />
              {formErrors.lastName && (
                <p className="text-xs text-destructive flex items-center gap-1">
                  <AlertCircle size={12} /> {formErrors.lastName}
                </p>
              )}
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email" className="flex items-center gap-1">
              Email
              <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="john.doe@example.com"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              disabled={loading}
              className={formErrors.email ? "border-destructive" : ""}
              autoComplete="email"
            />
            {formErrors.email && (
              <p className="text-xs text-destructive flex items-center gap-1">
                <AlertCircle size={12} /> {formErrors.email}
              </p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password" className="flex items-center gap-1">
              Password
              <span className="text-destructive">*</span>
            </Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
              placeholder="At least 8 characters"
              required
              disabled={loading}
              className={formErrors.password ? "border-destructive" : ""}
            />
            {password && (
              <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all duration-300 ${passwordStrength.color}`}
                  style={{ width: `${(passwordStrength.score / 5) * 100}%` }}
                />
              </div>
            )}
            {password && (
              <p className={`text-xs ${formErrors.password ? "text-destructive" : "text-muted-foreground"}`}>
                {formErrors.password || `Password strength: ${passwordStrength.message}`}
              </p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password_confirmation" className="flex items-center gap-1">
              Confirm Password
              <span className="text-destructive">*</span>
            </Label>
            <Input
              id="password_confirmation"
              type="password"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              autoComplete="new-password"
              placeholder="Confirm your password"
              required
              disabled={loading}
              className={formErrors.passwordConfirmation ? "border-destructive" : ""}
            />
            {formErrors.passwordConfirmation && (
              <p className="text-xs text-destructive flex items-center gap-1">
                <AlertCircle size={12} /> {formErrors.passwordConfirmation}
              </p>
            )}
            {password && passwordConfirmation && password === passwordConfirmation && (
              <p className="text-xs text-green-600 flex items-center gap-1">
                <Check size={12} /> Passwords match
              </p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="image">Profile Image (optional)</Label>
            <div className="flex items-center gap-4">
              {imagePreview ? (
                <div className="relative w-16 h-16 rounded-full overflow-hidden border">
                  <Image
                    src={imagePreview}
                    alt="Profile preview"
                    fill
                    className="object-cover"
                  />
                  <button
                    type="button"
                    className="absolute top-0 right-0 bg-black/60 p-1 rounded-full"
                    onClick={() => {
                      setImage(null);
                      setImagePreview(null);
                    }}
                  >
                    <X className="w-3 h-3 text-white" />
                  </button>
                </div>
              ) : (
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                  <span className="text-2xl text-muted-foreground">
                    {firstName && lastName ? `${firstName[0]}${lastName[0]}` : "?"}
                  </span>
                </div>
              )}
              <div className="flex-1">
                <Input
                  id="image"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full"
                  disabled={loading}
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Max size: 5MB. Recommended: Square image
                </p>
              </div>
            </div>
          </div>
          <Button
            type="submit"
            className="w-full mt-2"
            disabled={loading}
          >
            {loading ? (
              <Loader2 size={16} className="mr-2 animate-spin" />
            ) : null}
            Create Account
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex-col space-y-4">
        <div className="flex justify-center w-full border-t pt-4">
          <p className="text-center text-xs text-muted-foreground">
            Already have an account?{" "}
            <Button 
              variant="link" 
              className="p-0 h-auto text-xs" 
              onClick={() => {
                const params = new URLSearchParams(searchParams.toString());
                params.set("tab", "signin");
                router.replace(`?${params.toString()}`);
              }}
            >
              Sign in
            </Button>
          </p>
        </div>
        <div className="flex justify-center w-full">
          <p className="text-center text-xs text-neutral-500">
            By signing up, you agree to our{" "}
            <Button variant="link" className="p-0 h-auto text-xs">
              Terms of Service
            </Button>{" "}
            and{" "}
            <Button variant="link" className="p-0 h-auto text-xs">
              Privacy Policy
            </Button>
          </p>
        </div>
      </CardFooter>
    </>
  );
}

async function convertImageToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}