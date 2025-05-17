import { Card } from "@/components/ui/card";
import TwoFactorAuth from "../_components/two-factor";
import { Metadata } from "next";
import TwoFactorAuthGuard from "./_components/two-factor-guard";

export const metadata: Metadata = {
  title: "Two-Factor Authentication | Wealth Map",
  description: "Verify your identity for Wealth Map",
};

export default function TwoFactorAuthPage() {
  return (
    <TwoFactorAuthGuard>
      <div className="max-w-md w-full mx-auto">
        <Card className="overflow-hidden shadow-lg border-neutral-200">
          <TwoFactorAuth />
        </Card>
      </div>
    </TwoFactorAuthGuard>
  );
}
