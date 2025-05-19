import type { Metadata } from "next"
import SystemSettings from "@/components/custom-components/system-settings/system-settings"

export const metadata: Metadata = {
  title: "System Settings | Wealth Map",
  description: "Configure application settings and preferences",
}

export default function SettingsPage() {
  return (
    <div className="w-full py-6 space-y-8">
      <SystemSettings />
    </div>
  )
}
