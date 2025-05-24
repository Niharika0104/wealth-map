import OwnerWealthAnalysis from "@/components/custom-components/wealth-analysis/owner-wealth-analysis"

export default function EmployeeWealthAnalysisPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Wealth Analysis</h1>
        <p className="text-gray-600">
          Analyze property owners' financial profiles and wealth composition.
        </p>
      </div>
      <OwnerWealthAnalysis />
    </div>
  )
} 