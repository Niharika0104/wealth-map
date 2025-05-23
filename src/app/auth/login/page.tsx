import { LoginForm } from "@/components/custom-components/auth/LoginForm";

export default function LoginPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-8 text-center">Sign In</h1>
        <LoginForm />
      </div>
    </div>
  );
} 