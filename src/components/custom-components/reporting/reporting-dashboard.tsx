"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PropertyExport from "./property-export"
import CustomReports from "./custom-reports"
import ScheduledReports from "./scheduled-reports"
import ExportHistory from "./export-history"
import { Card } from "@/components/ui/card"
import { usePermissions } from "@/hooks/usePermissions"
import { WithPermission } from "@/components/auth/withPermission"

export default function ReportingDashboard() {
  const [activeTab, setActiveTab] = useState("export")
  const { hasPermission } = usePermissions()

  const canExport = hasPermission("reports:create")
  const canViewHistory = hasPermission("reports:view")
  const canCreateCustom = hasPermission("reports:create")

  return (
    <Card className="p-6">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          {canExport && (
            <TabsTrigger value="export">Property Export</TabsTrigger>
          )}
          {canCreateCustom && (
            <TabsTrigger value="custom">Custom Reports</TabsTrigger>
          )}
          {canViewHistory && (
            <TabsTrigger value="history">Export History</TabsTrigger>
          )}
        </TabsList>

        <WithPermission permission="reports:create">
          <TabsContent value="export" className="mt-6">
            <PropertyExport />
          </TabsContent>
        </WithPermission>

        <WithPermission permission="reports:create">
          <TabsContent value="custom" className="mt-6">
            <CustomReports />
          </TabsContent>
        </WithPermission>

        <WithPermission permission="reports:view">
          <TabsContent value="history" className="mt-6">
            <ExportHistory />
          </TabsContent>
        </WithPermission>
      </Tabs>
    </Card>
  )
}
