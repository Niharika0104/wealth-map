import CustomReports from "@/components/custom-components/reporting/custom-reports"
import PropertyExport from "@/components/custom-components/reporting/property-export"

export default function SuperAdminReportsPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">System Reports</h1>
        <p className="text-gray-600">
          Access and manage system-wide reports and property data exports.
        </p>
      </div>
      <div className="space-y-8">
        <CustomReports />
        <PropertyExport />
      </div>
    </div>
  )
} 