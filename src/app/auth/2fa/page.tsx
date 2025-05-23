import { TwoFactorVerification } from "@/components/custom-components/auth/TwoFactorVerification";

export default function TwoFactorPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-8 text-center">Two-Factor Authentication</h1>
        <TwoFactorVerification />
      </div>
    </div>
  );
}
