import SystemSettings from "@/components/custom-components/system-settings/system-settings";

export default function SuperAdminSettingsPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">System Settings</h2>
        <p className="text-muted-foreground mt-2 max-w-2xl">
          As a Super Admin, you can configure global system preferences, security, notifications, appearance, and data settings for the entire platform. Changes here affect all organizations and users.
        </p>
      </div>
      <SystemSettings />
    </div>
  );
} 