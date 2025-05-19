"use client"

import { useState } from "react"
import { User, Bell, Shield, Palette, Key, Database, Save, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProfileSettings } from "./profile-settings"
import { NotificationSettings } from "./notification-settings"
import { SecuritySettings } from "./security-settings"
import { AppearanceSettings } from "./appearance-settings"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export default function SystemSettings() {
  const [activeTab, setActiveTab] = useState("profile")
  const [isSaving, setIsSaving] = useState(false)
  const [saveSuccess, setSaveSuccess] = useState(false)

  const handleSave = async () => {
    setIsSaving(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSaving(false)
    setSaveSuccess(true)
    setTimeout(() => setSaveSuccess(false), 3000)
  }

  const tabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "security", label: "Security", icon: Shield },
    { id: "appearance", label: "Appearance", icon: Palette },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-black">
        System Settings
        </h1>
        <p className="text-muted-foreground mt-2">Manage your account settings and configure application preferences</p>
      </div>

      {/* Settings Tabs */}
      <div className="space-y-8">
        <div className="relative">
          <div className="flex overflow-x-auto hide-scrollbar py-2 px-1 -mx-1">
            <div className="flex gap-2 w-full">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "relative flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all duration-200 whitespace-nowrap",
                    activeTab === tab.id
                      ? "text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                  )}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 rounded-xl shadow-md"
                      initial={false}
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}
                  <span className="relative flex items-center gap-2">
                    <tab.icon className={cn("h-4 w-4", activeTab === tab.id ? "text-primary-foreground" : "")} />
                    <span className={cn("hidden sm:inline", activeTab === tab.id ? "text-primary-foreground" : "")}>
                      {tab.label}
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6">
          {activeTab === "profile" && <ProfileSettings />}
          {activeTab === "notifications" && <NotificationSettings />}
          {activeTab === "security" && <SecuritySettings />}
          {activeTab === "appearance" && <AppearanceSettings />}
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button
          onClick={handleSave}
          disabled={isSaving || saveSuccess}
          className={cn(
            "min-w-[120px] relative overflow-hidden transition-all",
            saveSuccess ? "bg-green-600 hover:bg-green-700" : "",
          )}
        >
          {isSaving ? (
            <span className="flex items-center gap-2">
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Saving...
            </span>
          ) : saveSuccess ? (
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex items-center gap-2"
            >
              <Check className="mr-2 h-4 w-4" />
              Saved
            </motion.div>
          ) : (
            <span className="flex items-center gap-2">
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </span>
          )}
        </Button>
      </div>
    </div>
  )
}
