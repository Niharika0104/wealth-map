import { SetupAccountForm } from "@/components/custom-components/auth/SetupAccountForm";

export default function SetupPage() {
  return (
    <div className="max-w-md w-full">
      <h1 className="text-2xl font-bold mb-8 text-center">Complete Your Account Setup</h1>
      <SetupAccountForm />
    </div>
  );
} 