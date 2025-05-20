import type { Metadata } from "next"
import { AccountDashboard } from "@/components/custom-components/account/account-dashboard"

export const metadata: Metadata = {
  title: "Account | Wealth Map",
  description: "Manage your account settings and preferences",
}

export default function AccountPage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <AccountDashboard />
    </div>
  )
}
