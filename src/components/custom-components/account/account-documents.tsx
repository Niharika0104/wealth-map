"use client"

import { useState } from "react"
import { FileText, Download, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card } from "@/components/ui/card"

export function AccountDocuments() {
  // Mock reports data
  const reports = [
    {
      id: 1,
      name: "Q1 Investment Performance",
      type: "PDF",
      size: "2.4 MB",
      generatedAt: "May 15, 2025",
      properties: 12,
      category: "Performance",
    },
    {
      id: 2,
      name: "Tax Optimization Report",
      type: "PDF",
      size: "1.8 MB",
      generatedAt: "April 10, 2025",
      properties: 8,
      category: "Tax",
    },
    {
      id: 3,
      name: "Property Valuation Analysis",
      type: "PDF",
      size: "3.2 MB",
      generatedAt: "March 22, 2025",
      properties: 5,
      category: "Valuation",
    },
    {
      id: 4,
      name: "Market Trend Analysis",
      type: "PDF",
      size: "1.1 MB",
      generatedAt: "February 5, 2025",
      properties: 24,
      category: "Market",
    },
    {
      id: 5,
      name: "Portfolio Diversification",
      type: "PDF",
      size: "2.7 MB",
      generatedAt: "January 18, 2025",
      properties: 15,
      category: "Portfolio",
    },
    {
      id: 6,
      name: "Risk Assessment Report",
      type: "PDF",
      size: "1.5 MB",
      generatedAt: "January 5, 2025",
      properties: 18,
      category: "Risk",
    },
  ]

  const [selectedReports, setSelectedReports] = useState<number[]>([])
  const [searchTerm, setSearchTerm] = useState("")

  const toggleSelectAll = () => {
    if (selectedReports.length === reports.length) {
      setSelectedReports([])
    } else {
      setSelectedReports(reports.map((report) => report.id))
    }
  }

  const toggleReportSelection = (id: number) => {
    if (selectedReports.includes(id)) {
      setSelectedReports(selectedReports.filter((reportId) => reportId !== id))
    } else {
      setSelectedReports([...selectedReports, id])
    }
  }

  const filteredReports = reports.filter(
    (report) =>
      report.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div>
      <div>
        <h2 className="text-xl font-semibold">Generated Reports</h2>
        <p className="text-sm text-muted-foreground mt-1">Access and download your generated reports</p>
      </div>

      <Separator className="my-6" />

      <Card className="p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4 items-end">
          <div className="flex-1">
            <Input
              placeholder="Search reports..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="w-full md:w-48">
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="performance">Performance</SelectItem>
                <SelectItem value="tax">Tax</SelectItem>
                <SelectItem value="valuation">Valuation</SelectItem>
                <SelectItem value="market">Market</SelectItem>
                <SelectItem value="portfolio">Portfolio</SelectItem>
                <SelectItem value="risk">Risk</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button
            className="bg-green-500 hover:bg-green-600 flex items-center gap-2"
            disabled={selectedReports.length === 0}
          >
            <Download className="h-4 w-4" />
            Download Selected ({selectedReports.length})
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Download All
          </Button>
        </div>
      </Card>

      <div className="border rounded-md overflow-hidden">
        <div className="bg-muted/50 p-4 border-b">
          <div className="grid grid-cols-12 gap-4 items-center">
            <div className="col-span-1">
              <Checkbox
                checked={selectedReports.length === reports.length && reports.length > 0}
                onCheckedChange={toggleSelectAll}
              />
            </div>
            <div className="col-span-5 font-medium">Report Name</div>
            <div className="col-span-2 font-medium">Category</div>
            <div className="col-span-2 font-medium">Generated</div>
            <div className="col-span-2 font-medium text-right">Actions</div>
          </div>
        </div>

        {filteredReports.length > 0 ? (
          filteredReports.map((report) => (
            <div key={report.id} className="p-4 border-b last:border-0 hover:bg-muted/30">
              <div className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-1">
                  <Checkbox
                    checked={selectedReports.includes(report.id)}
                    onCheckedChange={() => toggleReportSelection(report.id)}
                  />
                </div>
                <div className="col-span-5">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">{report.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {report.size} • {report.properties} properties
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-span-2">
                  <Badge variant="outline" className="bg-muted/50">
                    {report.category}
                  </Badge>
                </div>
                <div className="col-span-2 text-sm">{report.generatedAt}</div>
                <div className="col-span-2 flex justify-end gap-2">
                  <Button variant="ghost" size="icon" title="View">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" title="Download">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="p-8 text-center">
            <p className="text-muted-foreground">No reports found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  )
}
