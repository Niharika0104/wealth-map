import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Wealth Map | Owner Wealth Analysis",
  description: "Analyze and compare property owners' wealth profiles",
}

export default function WealthAnalysisLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
