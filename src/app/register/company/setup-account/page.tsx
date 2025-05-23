import { SetupAccountForm } from "@/components/custom-components/auth/SetupAccountForm";

export default function SetupAccountPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-8 text-center">Complete Your Account Setup</h1>
        <SetupAccountForm />
      </div>
    </div>
  );
} 