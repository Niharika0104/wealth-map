import { CompanyRegistrationForm } from "@/components/custom-components/auth/CompanyRegistrationForm";

export default function RegisterPage() {
  return (
    <div className="max-w-md w-full">
      <h1 className="text-2xl font-bold mb-8 text-center">Register Your Company</h1>
      <CompanyRegistrationForm />
    </div>
  );
} 