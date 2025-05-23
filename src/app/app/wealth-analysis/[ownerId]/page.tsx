'use client'
import OwnerWealthAnalysis from "@/components/custom-components/wealth-analysis/owner-wealth-analysis"
import { useParams } from "next/navigation"

export default function WealthAnalysisPage() {
    const params = useParams()
    const ownerId = params.ownerId as string
  return (
    <div className="space-y-6 mx-auto px-4 md:px-6 max-w-[1400px]">
      <OwnerWealthAnalysis ownerId={ownerId}/>
    </div>
  )
}
