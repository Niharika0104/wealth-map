"use client"

import { useState } from "react"
import { User, CreditCard, FileText, LifeBuoy, Download } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AccountProfile } from "./account-profile"
import { AccountBilling } from "./account-billing"
import { AccountDocuments } from "./account-documents"
import { AccountSupport } from "./account-support"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function AccountDashboard() {
  const [activeTab, setActiveTab] = useState("profile")

  const handleDownloadProfile = () => {
    // In a real application, this would generate a PDF with profile info
    console.log("Downloading profile as PDF")
    // Mock implementation - in real app would use a PDF generation library
    alert("Profile PDF download started")
  }

  const tabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "billing", label: "Billing", icon: CreditCard },
    { id: "documents", label: "Reports", icon: FileText },
    { id: "support", label: "Support", icon: LifeBuoy },
  ]

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-black">Account</h1>
          <p className="text-muted-foreground mt-2">View and manage your account information</p>
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
        {activeTab === "billing" && <AccountBilling />}
        {activeTab === "documents" && <AccountDocuments />}
        {activeTab === "support" && <AccountSupport />}
      </div>
    </div>
  )
}
