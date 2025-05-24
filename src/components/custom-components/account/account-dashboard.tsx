"use client"

import { useState } from "react"
import { User, FileText, Download, Building, Users, Settings } from "lucide-react"
import { AccountProfile } from "./account-profile"
import { AccountDocuments } from "./account-documents"
import { AccountSettings } from "./account-settings"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useSession } from "next-auth/react"

export function AccountDashboard() {
  const [activeTab, setActiveTab] = useState("profile")
  const { data: session } = useSession()

  const handleDownloadProfile = () => {
    // In a real application, this would generate a PDF with profile info
    console.log("Downloading profile as PDF")
    // Mock implementation - in real app would use a PDF generation library
    alert("Profile PDF download started")
  }

  // Define tabs based on user role
  const getTabs = () => {
    const baseTabs = [
      { id: "profile", label: "Profile", icon: User },
      { id: "documents", label: "Reports", icon: FileText },
    ]

    if (session?.user?.role === "SUPER_ADMIN") {
      return [
        ...baseTabs,
        { id: "companies", label: "Companies", icon: Building },
        { id: "users", label: "Users", icon: Users },
        { id: "settings", label: "Settings", icon: Settings },
      ]
    }

    if (session?.user?.role === "COMPANY_ADMIN") {
      return [
        ...baseTabs,
        { id: "settings", label: "Settings", icon: Settings },
      ]
    }

    return baseTabs
  }

  const tabs = getTabs()

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-black">Account</h1>
          <p className="text-muted-foreground mt-2">
            {session?.user?.role === "SUPER_ADMIN" 
              ? "Manage system-wide settings and user accounts"
              : session?.user?.role === "COMPANY_ADMIN"
              ? "Manage your company settings and preferences"
              : "View and manage your account information"}
          </p>
        </div>
        <Button
          onClick={handleDownloadProfile}
          className="mt-4 md:mt-0 bg-green-500 hover:bg-green-600 flex items-center gap-2"
        >
          <Download className="h-4 w-4" />
          Download Account Info
        </Button>
      </div>

      {/* Animated Tabs */}
      <div className="relative mb-6">
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
                  <span className={cn("hidden md:inline", activeTab === tab.id ? "text-primary-foreground" : "")}>
                    {tab.label}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-6 border rounded-md">
        {activeTab === "profile" && <AccountProfile />}
        {activeTab === "documents" && <AccountDocuments />}
        {activeTab === "settings" && <AccountSettings />}
        {/* Add other tab contents based on role */}
      </div>
    </div>
  )
}
