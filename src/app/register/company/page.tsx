import { CompanyRegistrationForm } from "@/components/custom-components/auth/CompanyRegistrationForm";

export default function CompanyRegistrationPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-8 text-center">Register Your Company</h1>
        <CompanyRegistrationForm />
      </div>
    </div>
  );
}
