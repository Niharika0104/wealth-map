"use client"

import { useState, useMemo } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MapPin, Eye, Calendar, Shield, TrendingUp, ArrowRight, MapIcon } from "lucide-react"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getProperties, type Property } from "./property-store"
import MapView from "@/components/custom-components/trending/map-view"

// Get properties from our store
const { trendingProperties, hotProperties } = getProperties()

type TimelineFilter = "all" | "week" | "month" | "quarter"
type ConfidenceFilter = "all" | "High" | "Medium" | "Low"
type ViewsFilter = "all" | "high" | "medium" | "low"

export default function TrendingProperties() {
  const [timelineFilter, setTimelineFilter] = useState<TimelineFilter>("all")
  const [confidenceFilter, setConfidenceFilter] = useState<ConfidenceFilter>("all")
  const [viewsFilter, setViewsFilter] = useState<ViewsFilter>("all")
  const [currentPage, setCurrentPage] = useState(1)
  const [activeTab, setActiveTab] = useState("all")
  const [viewMode, setViewMode] = useState<"grid" | "map">("grid")
  const itemsPerPage = 8

  // Filter properties based on selected filters
  const filteredProperties = useMemo(() => {
    let filtered = [...trendingProperties]

    // Apply timeline filter
    if (timelineFilter !== "all") {
      const now = new Date()
      filtered = filtered.filter((property) => {
        const updatedDate = new Date(property.lastUpdated)
        const diffTime = Math.abs(now.getTime() - updatedDate.getTime())
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

        if (timelineFilter === "week") return diffDays <= 7
        if (timelineFilter === "month") return diffDays <= 30
        if (timelineFilter === "quarter") return diffDays <= 90
        return true
      })
    }

    // Apply confidence filter
    if (confidenceFilter !== "all") {
      filtered = filtered.filter((property) => property.confidenceLevel === confidenceFilter)
    }

    // Apply views filter
    if (viewsFilter !== "all") {
      filtered = filtered.filter((property) => {
        if (viewsFilter === "high") return property.views > 500
        if (viewsFilter === "medium") return property.views >= 300 && property.views <= 500
        if (viewsFilter === "low") return property.views < 300
        return true
      })
    }

    return filtered
  }, [timelineFilter, confidenceFilter, viewsFilter])

  // Calculate pagination
  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage)
  const paginatedProperties = filteredProperties.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  // Get confidence level color
  const getConfidenceColor = (level: string) => {
    switch (level) {
      case "High":
        return "bg-green-100 text-green-800"
      case "Medium":
        return "bg-yellow-100 text-yellow-800"
      case "Low":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  // Property card component to avoid duplication
  const PropertyCard = ({ property }: { property: Property }) => (
    <Link href={`/app/property/${property.id}`} key={property.id}>
      <Card className="h-full hover:shadow-lg transition-shadow duration-200">
        <div className="relative h-48 w-full">
          <div
            className="absolute inset-0 rounded-t-lg bg-gradient-to-r from-blue-100 to-indigo-100"
            style={{
              backgroundImage: `url('/placeholder-r0y0s.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
        <CardContent className="p-4">
          <h3 className="font-bold text-lg mb-1">
            {property.type} {property.region}
          </h3>
          <div className="flex items-center text-gray-600 mb-2">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm truncate">{property.address}</span>
          </div>
          <div className="flex justify-between mb-3">
            <Badge variant="outline" className="flex items-center gap-1">
              <Eye className="h-3 w-3" />
              {property.views}
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              {property.sqft} sqft
            </Badge>
            <Badge className={`${getConfidenceColor(property.confidenceLevel)} flex items-center gap-1`}>
              <Shield className="h-3 w-3" />
              {property.confidenceLevel}
            </Badge>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-600 flex items-center">
              <Calendar className="h-3 w-3 mr-1" />
              {property.lastUpdated}
            </div>
            <div className="flex items-center">
              <span className="font-bold text-green-600 mr-2">{property.value}</span>
              <Avatar className="h-6 w-6">
                <AvatarImage src={`/placeholder.svg?height=50&width=50&query=avatar`} />
                <AvatarFallback>{property.ownerName.charAt(0)}</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )

  // Handle tab change
  const handleTabChange = (value: string) => {
    setActiveTab(value)
  }

  // Handle view all properties button click
  const handleViewAllClick = () => {
    // This will switch to the "all" tab
    setActiveTab("all")
  }

  return (
    <div>
      <Tabs value={activeTab} onValueChange={handleTabChange} className="mb-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="all">All Properties</TabsTrigger>
          <TabsTrigger value="hot">Hot Properties</TabsTrigger>
        </TabsList>

        <TabsContent value="hot" className="mt-6">
          <div className="mb-4">
            <h2 className="text-xl font-bold flex items-center">
              <TrendingUp className="mr-2 h-5 w-5 text-red-500" />
              Hot Properties
              <span className="text-sm font-normal ml-2 text-gray-500">
                (Highest trending score based on views and recency)
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hotProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <div className="mt-6 flex justify-center">
            <Button variant="outline" onClick={handleViewAllClick} className="flex items-center">
              View All Properties
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="all" className="mt-6">
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-6 bg-white p-4 rounded-lg shadow">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Timeline</label>
              <Select value={timelineFilter} onValueChange={(value) => setTimelineFilter(value as TimelineFilter)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Filter by timeline" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Time</SelectItem>
                  <SelectItem value="week">Last Week</SelectItem>
                  <SelectItem value="month">Last Month</SelectItem>
                  <SelectItem value="quarter">Last Quarter</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Views</label>
              <Select value={viewsFilter} onValueChange={(value) => setViewsFilter(value as ViewsFilter)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Filter by views" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Views</SelectItem>
                  <SelectItem value="high">High (500+)</SelectItem>
                  <SelectItem value="medium">Medium (300-500)</SelectItem>
                  <SelectItem value="low">Low (&lt; 300)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Confidence</label>
              <Select
                value={confidenceFilter}
                onValueChange={(value) => setConfidenceFilter(value as ConfidenceFilter)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Filter by confidence" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="High">High</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="Low">Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* View toggle */}
          <div className="flex justify-between items-center mb-4">
            <div className="text-sm text-gray-600">
              Showing {Math.min(paginatedProperties.length, itemsPerPage)} of {filteredProperties.length} properties
            </div>
            <div className="flex space-x-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1"
                >
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                </svg>
                Grid
              </Button>
              <Button
                variant={viewMode === "map" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("map")}
                className="flex items-center"
              >
                <MapIcon className="h-4 w-4 mr-1" />
                Map
              </Button>
            </div>
          </div>

          {/* Property display - grid or map */}
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {paginatedProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="h-[600px] rounded-lg overflow-hidden border">
              <MapView properties={paginatedProperties} />
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && viewMode === "grid" && (
            <div className="flex justify-center mt-8">
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                >
                  Previous
                </Button>

                {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                  let pageNumber
                  if (totalPages <= 5) {
                    pageNumber = i + 1
                  } else {
                    if (currentPage <= 3) {
                      pageNumber = i + 1
                    } else if (currentPage >= totalPages - 2) {
                      pageNumber = totalPages - 4 + i
                    } else {
                      pageNumber = currentPage - 2 + i
                    }
                  }
                  return (
                    <Button
                      key={pageNumber}
                      variant={currentPage === pageNumber ? "default" : "outline"}
                      onClick={() => setCurrentPage(pageNumber)}
                    >
                      {pageNumber}
                    </Button>
                  )
                })}

                <Button
                  variant="outline"
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                >
                  Next
                </Button>
              </div>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
