"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getProperties } from "../trending/property-store"
import { BarChart, PieChart, LineChart, Save, Share, Download, Plus, Trash2 } from "lucide-react"
import { toast } from "@/components/ui/use-toast"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"

const { trendingProperties } = getProperties()

// Mock saved reports
const initialSavedReports = [
  {
    id: "1",
    name: "High Value Properties",
    description: "Analysis of properties valued over $3M",
    created: "May 15, 2025",
    type: "bar",
    properties: trendingProperties
      .filter((p) => Number.parseFloat(p.value.replace(/[^0-9.]/g, "")) > 3)
      .map((p) => p.id),
    fields: ["value", "region", "type"],
    shared: true,
  },
  {
    id: "2",
    name: "Confidence Level Distribution",
    description: "Distribution of properties by confidence level",
    created: "May 10, 2025",
    type: "pie",
    properties: trendingProperties.slice(0, 20).map((p) => p.id),
    fields: ["confidenceLevel", "value"],
    shared: false,
  },
  {
    id: "3",
    name: "Property Views Trend",
    description: "Trending properties by view count",
    created: "May 5, 2025",
    type: "line",
    properties: trendingProperties.slice(0, 15).map((p) => p.id),
    fields: ["views", "lastUpdated"],
    shared: true,
  },
]

export default function CustomReports() {
  const [activeTab, setActiveTab] = useState("create")
  const [reportName, setReportName] = useState("")
  const [reportDescription, setReportDescription] = useState("")
  const [selectedProperties, setSelectedProperties] = useState<string[]>([])
  const [selectedFields, setSelectedFields] = useState<string[]>([])
  const [chartType, setChartType] = useState("bar")
  const [propertyFilter, setPropertyFilter] = useState("all")
  const [savedReports, setSavedReports] = useState(initialSavedReports)
  const [shareDialogOpen, setShareDialogOpen] = useState(false)
  const [currentReportId, setCurrentReportId] = useState<string | null>(null)
  const [shareEmail, setShareEmail] = useState("")
  const [shareMessage, setShareMessage] = useState("")

  // Available fields for reports
  const availableFields = [
    { id: "value", label: "Property Value" },
    { id: "sqft", label: "Square Footage" },
    { id: "type", label: "Property Type" },
    { id: "region", label: "Region" },
    { id: "confidenceLevel", label: "Confidence Level" },
    { id: "lastUpdated", label: "Last Updated" },
    { id: "views", label: "View Count" },
    { id: "ownerType", label: "Owner Type" },
  ]

  // Filter properties based on selection
  const filteredProperties = trendingProperties.filter((property) => {
    if (propertyFilter === "all") return true
    if (propertyFilter === "high") return property.confidenceLevel === "High"
    if (propertyFilter === "medium") return property.confidenceLevel === "Medium"
    if (propertyFilter === "low") return property.confidenceLevel === "Low"
    return true
  })

  // Toggle property selection
  const toggleProperty = (propertyId: string) => {
    if (selectedProperties.includes(propertyId)) {
      setSelectedProperties(selectedProperties.filter((id) => id !== propertyId))
    } else {
      setSelectedProperties([...selectedProperties, propertyId])
    }
  }

  // Toggle field selection
  const toggleField = (fieldId: string) => {
    if (selectedFields.includes(fieldId)) {
      setSelectedFields(selectedFields.filter((id) => id !== fieldId))
    } else {
      setSelectedFields([...selectedFields, fieldId])
    }
  }

  // Select all properties
  const selectAllProperties = () => {
    if (selectedProperties.length === filteredProperties.length) {
      setSelectedProperties([])
    } else {
      setSelectedProperties(filteredProperties.map((p) => p.id))
    }
  }

  // Save report
  const saveReport = () => {
    if (!reportName) {
      toast({
        title: "Report name required",
        description: "Please enter a name for your report.",
        variant: "destructive",
      })
      return
    }

    if (selectedProperties.length === 0) {
      toast({
        title: "No properties selected",
        description: "Please select at least one property for your report.",
        variant: "destructive",
      })
      return
    }

    if (selectedFields.length === 0) {
      toast({
        title: "No fields selected",
        description: "Please select at least one field for your report.",
        variant: "destructive",
      })
      return
    }

    const newReport = {
      id: Date.now().toString(),
      name: reportName,
      description: reportDescription,
      created: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      type: chartType,
      properties: selectedProperties,
      fields: selectedFields,
      shared: false,
    }

    setSavedReports([...savedReports, newReport])

    toast({
      title: "Report saved",
      description: "Your custom report has been saved successfully.",
      variant: "default",
    })

    // Reset form
    setReportName("")
    setReportDescription("")
    setSelectedProperties([])
    setSelectedFields([])
    setChartType("bar")

    // Switch to saved reports tab
    setActiveTab("saved")
  }

  // Delete report
  const deleteReport = (reportId: string) => {
    setSavedReports(savedReports.filter((report) => report.id !== reportId))

    toast({
      title: "Report deleted",
      description: "The report has been deleted successfully.",
      variant: "default",
    })
  }

  // Open share dialog
  const openShareDialog = (reportId: string) => {
    setCurrentReportId(reportId)
    setShareDialogOpen(true)
  }

  // Share report
  const shareReport = () => {
    if (!shareEmail) {
      toast({
        title: "Email required",
        description: "Please enter an email address to share with.",
        variant: "destructive",
      })
      return
    }

    // In a real app, this would send the report to the specified email
    console.log(`Sharing report ${currentReportId} with ${shareEmail}`)

    // Update report shared status
    setSavedReports(
      savedReports.map((report) => (report.id === currentReportId ? { ...report, shared: true } : report)),
    )

    toast({
      title: "Report shared",
      description: `The report has been shared with ${shareEmail}.`,
      variant: "default",
    })

    // Reset form and close dialog
    setShareEmail("")
    setShareMessage("")
    setShareDialogOpen(false)
    setCurrentReportId(null)
  }

  // Get chart icon based on type
  const getChartIcon = (type: string) => {
    switch (type) {
      case "bar":
        return <BarChart className="h-5 w-5" />
      case "pie":
        return <PieChart className="h-5 w-5" />
      case "line":
        return <LineChart className="h-5 w-5" />
      default:
        return <BarChart className="h-5 w-5" />
    }
  }

  return (
    <div>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="create">Create Report</TabsTrigger>
          <TabsTrigger value="saved">Saved Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="create" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Report Details</CardTitle>
              <CardDescription>Enter the basic information for your report</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="reportName">Report Name</Label>
                  <Input
                    id="reportName"
                    placeholder="Enter report name"
                    value={reportName}
                    onChange={(e) => setReportName(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="chartType">Chart Type</Label>
                  <Select value={chartType} onValueChange={setChartType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select chart type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bar">Bar Chart</SelectItem>
                      <SelectItem value="pie">Pie Chart</SelectItem>
                      <SelectItem value="line">Line Chart</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="reportDescription">Description</Label>
                <Textarea
                  id="reportDescription"
                  placeholder="Enter report description"
                  value={reportDescription}
                  onChange={(e) => setReportDescription(e.target.value)}
                />
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Property Selection */}
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Select Properties</CardTitle>
                <CardDescription>Choose the properties to include in your report</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="selectAll"
                      checked={selectedProperties.length === filteredProperties.length && filteredProperties.length > 0}
                      onCheckedChange={selectAllProperties}
                    />
                    <Label htmlFor="selectAll">Select All</Label>
                  </div>

                  <Select value={propertyFilter} onValueChange={setPropertyFilter}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Filter by confidence" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Properties</SelectItem>
                      <SelectItem value="high">High Confidence</SelectItem>
                      <SelectItem value="medium">Medium Confidence</SelectItem>
                      <SelectItem value="low">Low Confidence</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="border rounded-md">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-4 max-h-[300px] overflow-y-auto">
                    {filteredProperties.map((property) => (
                      <div key={property.id} className="flex items-start space-x-2">
                        <Checkbox
                          id={property.id}
                          checked={selectedProperties.includes(property.id)}
                          onCheckedChange={() => toggleProperty(property.id)}
                        />
                        <div>
                          <Label htmlFor={property.id} className="font-medium">
                            {property.type} {property.region}
                          </Label>
                          <p className="text-sm text-gray-500">{property.address}</p>
                          <p className="text-sm text-gray-500">Value: {property.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 text-sm text-gray-500">
                  {selectedProperties.length} of {filteredProperties.length} properties selected
                </div>
              </CardContent>
            </Card>

            {/* Data Fields */}
            <Card>
              <CardHeader>
                <CardTitle>Data Fields</CardTitle>
                <CardDescription>Select fields to include in your report</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {availableFields.map((field) => (
                    <div key={field.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={`field-${field.id}`}
                        checked={selectedFields.includes(field.id)}
                        onCheckedChange={() => toggleField(field.id)}
                      />
                      <Label htmlFor={`field-${field.id}`}>{field.label}</Label>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  onClick={saveReport}
                  disabled={!reportName || selectedProperties.length === 0 || selectedFields.length === 0}
                >
                  <Save className="mr-2 h-4 w-4" />
                  Save Report
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Report Preview */}
          {selectedProperties.length > 0 && selectedFields.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Report Preview</CardTitle>
                <CardDescription>Preview of your custom report</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <div className="w-full max-w-3xl h-[300px] bg-gray-100 rounded-md flex items-center justify-center">
                  <div className="text-center">
                    <div className="mb-2">
                      {chartType === "bar" && <BarChart className="h-16 w-16 mx-auto text-gray-400" />}
                      {chartType === "pie" && <PieChart className="h-16 w-16 mx-auto text-gray-400" />}
                      {chartType === "line" && <LineChart className="h-16 w-16 mx-auto text-gray-400" />}
                    </div>
                    <p className="text-gray-500">
                      {chartType.charAt(0).toUpperCase() + chartType.slice(1)} chart preview for{" "}
                      {selectedProperties.length} properties
                    </p>
                    <p className="text-sm text-gray-400">
                      Showing data for:{" "}
                      {selectedFields.map((f) => availableFields.find((field) => field.id === f)?.label).join(", ")}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="saved" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedReports.map((report) => (
              <Card key={report.id}>
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      {getChartIcon(report.type)}
                      <CardTitle className="ml-2">{report.name}</CardTitle>
                    </div>
                    <div className="flex space-x-1">
                      <Button variant="ghost" size="icon" onClick={() => deleteReport(report.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <CardDescription>{report.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Created:</span>
                      <span>{report.created}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Properties:</span>
                      <span>{report.properties.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Fields:</span>
                      <span>{report.fields.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Shared:</span>
                      <span>{report.shared ? "Yes" : "No"}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between pt-0">
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => openShareDialog(report.id)}>
                    <Share className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                </CardFooter>
              </Card>
            ))}

            {/* Add New Report Card */}
            <Card
              className="flex flex-col items-center justify-center h-[300px] border-dashed cursor-pointer hover:bg-gray-50"
              onClick={() => setActiveTab("create")}
            >
              <Plus className="h-12 w-12 text-gray-400 mb-4" />
              <p className="text-gray-500 font-medium">Create New Report</p>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Share Dialog */}
      <Dialog open={shareDialogOpen} onOpenChange={setShareDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Share Report</DialogTitle>
            <DialogDescription>Share this report with team members or stakeholders.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                placeholder="Enter email address"
                type="email"
                value={shareEmail}
                onChange={(e) => setShareEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message (Optional)</Label>
              <Textarea
                id="message"
                placeholder="Add a message"
                value={shareMessage}
                onChange={(e) => setShareMessage(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShareDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={shareReport}>Share Report</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
