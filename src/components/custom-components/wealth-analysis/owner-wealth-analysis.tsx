"use client"

import { useState, useEffect } from "react"
import {
  Search,
  Info,
  ChevronDown,
  ChevronUp,
  BarChart2,
  MapPin,
  DollarSign,
  Calendar,
  Building,
  User,
  Users,
} from "lucide-react"
import { BarChartIcon as ChartBar } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { WealthCompositionChart } from "./wealth-composition-chart"
import { ConfidenceIndicator } from "./confidence-indicator"
import { PropertyMap } from "./property-map"
import { TitleUpdater } from "./title-updater"
import { mockOwners } from "./mock-data"

export default function OwnerWealthAnalysis() {
  const [selectedOwner, setSelectedOwner] = useState<string | null>(null)
  const [comparisonOwner, setComparisonOwner] = useState<string | null>(null)
  const [showOnlyHighConfidence, setShowOnlyHighConfidence] = useState(false)
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({})
  const [searchTerm, setSearchTerm] = useState("")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("details")
  const [isMounted, setIsMounted] = useState(false)

  // Set isMounted to true when component mounts
  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  const toggleSection = (ownerId: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [ownerId]: !prev[ownerId],
    }))
  }

  const filteredOwners = mockOwners.filter((owner) => {
    const matchesSearch = owner.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesConfidence = showOnlyHighConfidence ? owner.confidenceLevel === "High" : true
    return matchesSearch && matchesConfidence
  })

  const selectedOwnerData = selectedOwner ? mockOwners.find((owner) => owner.id === selectedOwner) : null
  const comparisonOwnerData = comparisonOwner ? mockOwners.find((owner) => owner.id === comparisonOwner) : null

  const handleOwnerSelect = (ownerId: string) => {
    setSelectedOwner(ownerId)
    setIsDropdownOpen(false)
  }

  const handleComparisonSelect = (ownerId: string) => {
    if (ownerId === selectedOwner) return // Can't compare with self
    setComparisonOwner(ownerId)
    setIsDropdownOpen(false)
  }

  const clearComparison = () => {
    setComparisonOwner(null)
    setActiveTab("details")
  }

  // This effect expands the owner's details by default when selected
  useEffect(() => {
    if (selectedOwner) {
      setExpandedSections((prev) => ({
        ...prev,
        [selectedOwner]: true,
      }))
    }
  }, [selectedOwner])

  return (
    <div className="space-y-8">
      <TitleUpdater />

      {/* Intro Section */}
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">Owner Wealth Analysis</h2>
        <p className="text-muted-foreground">
          Analyze property owners' financial profiles, view their wealth composition, and explore their property
          locations.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="rounded-xl border bg-white p-6 shadow-sm flex items-start gap-4">
          <div className="bg-primary-50 p-3 rounded-full">
            <ChartBar className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-medium">Financial Overview</h3>
            <p className="text-sm text-muted-foreground mt-2">
              View estimated net worth, wealth composition, and confidence levels for property owners.
            </p>
          </div>
        </div>

        <div className="rounded-xl border bg-white p-6 shadow-sm flex items-start gap-4">
          <div className="bg-primary-50 p-3 rounded-full">
            <MapPin className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-medium">Property Locations</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Visualize property locations on an interactive map to understand geographical distribution.
            </p>
          </div>
        </div>

        <div className="rounded-xl border bg-white p-6 shadow-sm flex items-start gap-4">
          <div className="bg-primary-50 p-3 rounded-full">
            <Users className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-medium">Owner Comparison</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Compare wealth profiles between different owners to identify patterns and differences.
            </p>
          </div>
        </div>
      </div>

      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-xl shadow-sm border">
        <div>
          <h2 className="text-xl font-semibold">Owner Wealth Analysis</h2>
          <p className="text-muted-foreground mt-1">Select an owner to analyze their wealth profile and properties</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <div className="relative w-full md:w-64">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
              <Input
                placeholder="Search owners..."
                className="pl-10 pr-4 border-gray-300 focus:border-primary focus:ring-primary"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setIsDropdownOpen(true)}
                onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)}
              />
            </div>

            {isMounted && isDropdownOpen && (
              <div className="absolute z-10 mt-1 w-full bg-white border rounded-md shadow-lg">
                <ScrollArea className="h-72">
                  {filteredOwners.length > 0 ? (
                    filteredOwners.map((owner) => (
                      <div
                        key={owner.id}
                        className={`p-3 hover:bg-gray-50 cursor-pointer flex items-center justify-between ${
                          selectedOwner === owner.id ? "bg-primary-50" : ""
                        }`}
                        onClick={() => handleOwnerSelect(owner.id)}
                      >
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8 bg-primary-100">
                            <span className="text-sm font-medium text-primary-700">{owner.name.charAt(0)}</span>
                          </Avatar>
                          <div>
                            <div className="font-medium">{owner.name}</div>
                            <div className="text-xs text-muted-foreground">{owner.type}</div>
                          </div>
                        </div>
                        {selectedOwner === owner.id && <span className="text-primary">✓</span>}
                      </div>
                    ))
                  ) : (
                    <div className="p-2 text-center text-gray-500">No owners found</div>
                  )}
                </ScrollArea>
              </div>
            )}
          </div>

          <div className="flex items-center space-x-2 bg-gray-50 px-3 py-2 rounded-md">
            <Switch id="high-confidence" checked={showOnlyHighConfidence} onCheckedChange={setShowOnlyHighConfidence} />
            <Label htmlFor="high-confidence" className="text-sm">
              Show only high confidence
            </Label>
          </div>
        </div>
      </div>

      {/* Main Content */}
      {selectedOwnerData && isMounted ? (
        <div>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-between items-center mb-4">
              <TabsList className="bg-gray-100">
                <TabsTrigger value="details" className="data-[state=active]:bg-white">
                  Owner Details
                </TabsTrigger>
                {comparisonOwner && (
                  <TabsTrigger value="comparison" className="data-[state=active]:bg-white">
                    Comparison
                  </TabsTrigger>
                )}
              </TabsList>

              {!comparisonOwner ? (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm" className="gap-1">
                      <BarChart2 className="h-4 w-4" />
                      <span>Compare With</span>
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Select Owner to Compare</DialogTitle>
                      <DialogDescription>
                        Choose another owner to compare with {selectedOwnerData.name}
                      </DialogDescription>
                    </DialogHeader>
                    <ScrollArea className="h-72 mt-4">
                      {filteredOwners
                        .filter((owner) => owner.id !== selectedOwner)
                        .map((owner) => (
                          <div
                            key={owner.id}
                            className="p-3 hover:bg-gray-50 cursor-pointer border-b"
                            onClick={() => handleComparisonSelect(owner.id)}
                          >
                            <div className="flex items-center gap-2">
                              <Avatar className="h-10 w-10 bg-primary-100">
                                <span className="text-lg font-medium text-primary-700">{owner.name.charAt(0)}</span>
                              </Avatar>
                              <div>
                                <div className="font-medium">{owner.name}</div>
                                <div className="text-sm text-muted-foreground">{owner.type}</div>
                              </div>
                            </div>
                          </div>
                        ))}
                    </ScrollArea>
                  </DialogContent>
                </Dialog>
              ) : (
                <Button variant="outline" size="sm" onClick={clearComparison}>
                  Clear Comparison
                </Button>
              )}
            </div>

            <TabsContent value="details" className="mt-0">
              <Card className="overflow-hidden border-0 shadow-md rounded-xl">
                <CardHeader className="bg-white border-b px-6 py-4">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12 bg-primary-100 text-primary-700">
                        <span className="text-xl font-medium">{selectedOwnerData.name.charAt(0)}</span>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2">
                          <CardTitle className="text-xl">{selectedOwnerData.name}</CardTitle>
                          <Badge variant="outline" className="ml-2">
                            {selectedOwnerData.type === "Entity" ? (
                              <Building className="h-3 w-3 mr-1" />
                            ) : (
                              <User className="h-3 w-3 mr-1" />
                            )}
                            {selectedOwnerData.type}
                          </Badge>
                        </div>
                        <CardDescription className="flex items-center gap-2 mt-1">
                          <Calendar className="h-3 w-3" />
                          Last Updated: {selectedOwnerData.lastUpdated}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm text-muted-foreground">Confidence:</span>
                        <ConfidenceIndicator level={selectedOwnerData.confidenceLevel} />
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="h-5 w-5 text-green-600" />
                        <span className="font-bold text-2xl">{selectedOwnerData.netWorth}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="p-6 bg-white">
                      <button
                        type="button"
                        onClick={() => toggleSection(selectedOwnerData.id)}
                        className="w-full flex items-center justify-between text-primary hover:text-primary/80 font-medium mb-4"
                      >
                        <span className="text-lg">Wealth Composition</span>
                        {expandedSections[selectedOwnerData.id] ? (
                          <ChevronUp className="h-5 w-5" />
                        ) : (
                          <ChevronDown className="h-5 w-5" />
                        )}
                      </button>

                      {expandedSections[selectedOwnerData.id] && (
                        <div className="space-y-4">
                          <div className="h-[300px]">
                            <WealthCompositionChart data={selectedOwnerData.wealthComposition} />
                          </div>

                          <div className="mt-4">
                            <div className="flex justify-between text-sm">
                              <span className="font-medium">Data Sources:</span>
                              <Dialog>
                                <DialogTrigger asChild>
                                  <button
                                    type="button"
                                    className="text-primary hover:text-primary/80 flex items-center gap-1"
                                  >
                                    <span>View Sources</span>
                                    <Info className="h-3 w-3" />
                                  </button>
                                </DialogTrigger>
                                <DialogContent>
                                  <DialogHeader>
                                    <DialogTitle>Data Sources for {selectedOwnerData.name}</DialogTitle>
                                    <DialogDescription>
                                      Information about how this wealth data was collected and verified.
                                    </DialogDescription>
                                  </DialogHeader>
                                  <div className="space-y-4 mt-4">
                                    {selectedOwnerData.dataSources.map((source, index) => (
                                      <div key={index} className="space-y-2">
                                        <div className="flex justify-between">
                                          <span className="font-medium">{source.name}</span>
                                          <span className="text-sm text-muted-foreground">
                                            Verified: {source.lastVerified}
                                          </span>
                                        </div>
                                        <p className="text-sm text-muted-foreground">{source.description}</p>
                                        <Separator />
                                      </div>
                                    ))}
                                  </div>
                                </DialogContent>
                              </Dialog>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Property Map - height adjusts based on expanded state */}
                    <div className="bg-white border-t lg:border-t-0 lg:border-l">
                      <div className="p-4 border-b flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-primary" />
                          <h3 className="font-medium">Property Locations</h3>
                        </div>
                        <Badge variant="outline" className="bg-white">
                          {mockProperties[selectedOwnerData.id]?.length || 0} Properties
                        </Badge>
                      </div>
                      <div className={expandedSections[selectedOwnerData.id] ? "h-[400px]" : "h-[200px]"}>
                        <PropertyMap ownerId={selectedOwnerData.id} />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {comparisonOwner && comparisonOwnerData && (
              <TabsContent value="comparison" className="mt-0">
                <div className="space-y-6">
                  {/* Comparison Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="overflow-hidden border-0 shadow-md rounded-xl">
                      <CardHeader className="bg-primary-50 border-b px-6 py-4">
                        <div className="flex justify-between items-start">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10 bg-primary-100 text-primary-700">
                              <span className="text-lg font-medium">{selectedOwnerData.name.charAt(0)}</span>
                            </Avatar>
                            <div>
                              <CardTitle className="text-lg">{selectedOwnerData.name}</CardTitle>
                              <CardDescription>{selectedOwnerData.type}</CardDescription>
                            </div>
                          </div>
                          <ConfidenceIndicator level={selectedOwnerData.confidenceLevel} small />
                        </div>
                      </CardHeader>
                      <CardContent className="p-4">
                        <div className="space-y-4">
                          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                            <span className="text-muted-foreground">Net Worth</span>
                            <span className="font-bold text-xl">${selectedOwnerData.netWorth}</span>
                          </div>
                          <div className="h-48">
                            <WealthCompositionChart data={selectedOwnerData.wealthComposition} compact />
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="overflow-hidden border-0 shadow-md rounded-xl">
                      <CardHeader className="bg-orange-50 border-b px-6 py-4">
                        <div className="flex justify-between items-start">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10 bg-orange-100 text-orange-700">
                              <span className="text-lg font-medium">{comparisonOwnerData.name.charAt(0)}</span>
                            </Avatar>
                            <div>
                              <CardTitle className="text-lg">{comparisonOwnerData.name}</CardTitle>
                              <CardDescription>{comparisonOwnerData.type}</CardDescription>
                            </div>
                          </div>
                          <ConfidenceIndicator level={comparisonOwnerData.confidenceLevel} small />
                        </div>
                      </CardHeader>
                      <CardContent className="p-4">
                        <div className="space-y-4">
                          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                            <span className="text-muted-foreground">Net Worth</span>
                            <span className="font-bold text-xl">${comparisonOwnerData.netWorth}</span>
                          </div>
                          <div className="h-48">
                            <WealthCompositionChart data={comparisonOwnerData.wealthComposition} compact />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Comparison Map */}
                  <Card className="overflow-hidden border-0 shadow-md rounded-xl">
                    <CardHeader className="bg-white border-b px-6 py-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-primary" />
                          <CardTitle className="text-lg">Property Comparison</CardTitle>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <div className="w-3 h-3 rounded-full bg-primary"></div>
                            <span className="text-sm">{selectedOwnerData.name}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                            <span className="text-sm">{comparisonOwnerData.name}</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="h-[400px]">
                        <PropertyMap ownerId={selectedOwnerData.id} comparisonOwnerId={comparisonOwnerData.id} />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Comparison Table */}
                  <Card className="overflow-hidden border-0 shadow-md rounded-xl">
                    <CardHeader className="bg-white border-b px-6 py-4">
                      <CardTitle className="text-lg">Detailed Comparison</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="bg-gray-50">
                              <th className="text-left p-4 border-b font-medium">Category</th>
                              <th className="text-right p-4 border-b font-medium">{selectedOwnerData.name}</th>
                              <th className="text-right p-4 border-b font-medium">{comparisonOwnerData.name}</th>
                              <th className="text-right p-4 border-b font-medium">Difference</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="hover:bg-gray-50">
                              <td className="p-4 border-b font-medium">Net Worth</td>
                              <td className="p-4 border-b text-right">${selectedOwnerData.netWorth}</td>
                              <td className="p-4 border-b text-right">${comparisonOwnerData.netWorth}</td>
                              <td className="p-4 border-b text-right">
                                <DifferenceValue
                                  value={calculateDifference(selectedOwnerData.netWorth, comparisonOwnerData.netWorth)}
                                />
                              </td>
                            </tr>
                            <tr className="hover:bg-gray-50">
                              <td className="p-4 border-b font-medium">Real Estate</td>
                              <td className="p-4 border-b text-right">
                                ${getAssetValue(selectedOwnerData, "Real Estate")}
                              </td>
                              <td className="p-4 border-b text-right">
                                ${getAssetValue(comparisonOwnerData, "Real Estate")}
                              </td>
                              <td className="p-4 border-b text-right">
                                <DifferenceValue
                                  value={calculateDifference(
                                    getAssetValue(selectedOwnerData, "Real Estate"),
                                    getAssetValue(comparisonOwnerData, "Real Estate"),
                                  )}
                                />
                              </td>
                            </tr>
                            <tr className="hover:bg-gray-50">
                              <td className="p-4 border-b font-medium">Stocks & Securities</td>
                              <td className="p-4 border-b text-right">
                                ${getAssetValue(selectedOwnerData, "Stocks & Securities")}
                              </td>
                              <td className="p-4 border-b text-right">
                                ${getAssetValue(comparisonOwnerData, "Stocks & Securities")}
                              </td>
                              <td className="p-4 border-b text-right">
                                <DifferenceValue
                                  value={calculateDifference(
                                    getAssetValue(selectedOwnerData, "Stocks & Securities"),
                                    getAssetValue(comparisonOwnerData, "Stocks & Securities"),
                                  )}
                                />
                              </td>
                            </tr>
                            <tr className="hover:bg-gray-50">
                              <td className="p-4 border-b font-medium">Business Interests</td>
                              <td className="p-4 border-b text-right">
                                ${getAssetValue(selectedOwnerData, "Business Interests")}
                              </td>
                              <td className="p-4 border-b text-right">
                                ${getAssetValue(comparisonOwnerData, "Business Interests")}
                              </td>
                              <td className="p-4 border-b text-right">
                                <DifferenceValue
                                  value={calculateDifference(
                                    getAssetValue(selectedOwnerData, "Business Interests"),
                                    getAssetValue(comparisonOwnerData, "Business Interests"),
                                  )}
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            )}
          </Tabs>
        </div>
      ) : (
        <Card className="overflow-hidden border-0 shadow-md rounded-xl">
          <CardContent className="p-8 text-center">
            <div className="mx-auto w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mb-4">
              <Search className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-medium text-foreground">Select an owner to view their wealth analysis</h3>
            <p className="text-muted-foreground mt-2 max-w-md mx-auto">
              Use the search box above to find and select a property owner. You'll be able to view their wealth
              composition, property locations, and compare with other owners.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

// Helper components
function DifferenceValue({ value }: { value: string }) {
  const isPositive = value.startsWith("+")
  const isNegative = value.startsWith("-")

  return (
    <span className={`font-medium ${isPositive ? "text-green-600" : isNegative ? "text-red-600" : ""}`}>{value}</span>
  )
}

// Helper functions
function getAssetValue(owner: any, assetName: string): string {
  return owner.wealthComposition.find((item: any) => item.name === assetName)?.value || "0"
}

function calculateDifference(value1: string, value2: string): string {
  const num1 = Number.parseFloat(value1.replace(/[^0-9.]/g, ""))
  const num2 = Number.parseFloat(value2.replace(/[^0-9.]/g, ""))
  const diff = num1 - num2

  const formattedDiff = Math.abs(diff).toFixed(1) + "M"
  return diff > 0 ? `+$${formattedDiff}` : `-$${formattedDiff}`
}

// Mock property data
const mockProperties: Record<string, Array<{ address: string; coordinates: [number, number]; value: string }>> = {
  "1": [
    {
      address: "123 Main St, New York, NY",
      coordinates: [-73.9857, 40.7484],
      value: "$1.2M",
    },
    {
      address: "456 Park Ave, New York, NY",
      coordinates: [-73.9654, 40.7829],
      value: "$800K",
    },
  ],
  "2": [
    {
      address: "789 Ocean Dr, Miami, FL",
      coordinates: [-80.13, 25.789],
      value: "$1.5M",
    },
    {
      address: "101 Beach Rd, Miami, FL",
      coordinates: [-80.12, 25.77],
      value: "$800K",
    },
  ],
  "3": [
    {
      address: "222 Tech Blvd, San Francisco, CA",
      coordinates: [-122.4194, 37.7749],
      value: "$3.2M",
    },
    {
      address: "333 Valley Way, San Jose, CA",
      coordinates: [-121.8863, 37.3382],
      value: "$2.3M",
    },
  ],
  "4": [
    {
      address: "444 Lake St, Chicago, IL",
      coordinates: [-87.6298, 41.8781],
      value: "$950K",
    },
  ],
  "5": [
    {
      address: "555 Commerce St, Dallas, TX",
      coordinates: [-96.797, 32.7767],
      value: "$4.5M",
    },
    {
      address: "666 Energy Pkwy, Houston, TX",
      coordinates: [-95.3698, 29.7604],
      value: "$3.8M",
    },
    {
      address: "777 Capital Ave, Austin, TX",
      coordinates: [-97.7431, 30.2672],
      value: "$3.9M",
    },
  ],
}
