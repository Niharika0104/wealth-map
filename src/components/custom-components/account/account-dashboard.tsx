"use client"

import { useState } from "react"
import { User, CreditCard, FileText, LifeBuoy, Download } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AccountProfile } from "./account-profile"
import { AccountBilling } from "./account-billing"
import { AccountDocuments } from "./account-documents"
import { AccountSupport } from "./account-support"
import { Button } from "@/components/ui/button"

export function AccountDashboard() {
  const [activeTab, setActiveTab] = useState("profile")

  const handleDownloadProfile = () => {
    // In a real application, this would generate a PDF with profile info
    console.log("Downloading profile as PDF")
    // Mock implementation - in real app would use a PDF generation library
    alert("Profile PDF download started")
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Account</h1>
          <p className="text-muted-foreground">View and manage your account information</p>
        </div>
        <Button
          onClick={handleDownloadProfile}
          className="mt-4 md:mt-0 bg-green-500 hover:bg-green-600 flex items-center gap-2"
        >
          <Download className="h-4 w-4" />
          Download Account Info
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid grid-cols-3 md:grid-cols-4 gap-2">
          <TabsTrigger value="profile" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span className="hidden md:inline">Profile</span>
          </TabsTrigger>
          <TabsTrigger value="billing" className="flex items-center gap-2">
            <CreditCard className="h-4 w-4" />
            <span className="hidden md:inline">Billing</span>
          </TabsTrigger>
          <TabsTrigger value="documents" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            <span className="hidden md:inline">Reports</span>
          </TabsTrigger>
          <TabsTrigger value="support" className="flex items-center gap-2">
            <LifeBuoy className="h-4 w-4" />
            <span className="hidden md:inline">Support</span>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="profile" className="p-6 border rounded-md">
          <AccountProfile />
        </TabsContent>
        <TabsContent value="billing" className="p-6 border rounded-md">
          <AccountBilling />
        </TabsContent>
        <TabsContent value="documents" className="p-6 border rounded-md">
          <AccountDocuments />
        </TabsContent>
        <TabsContent value="support" className="p-6 border rounded-md">
          <AccountSupport />
        </TabsContent>
      </Tabs>
    </div>
  )
}
