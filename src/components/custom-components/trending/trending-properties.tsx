"use client"

import { useState, useMemo, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  MapPin,
  Eye,
  Calendar,
  Shield,
  TrendingUp,
  ArrowRight,
  MapIcon,
  Flame,
  Clock,
  BarChart3,
  ArrowUpRight,
  Users,
  Activity,
} from "lucide-react"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { Property } from "@/Models/models"
import MapView from "@/components/custom-components/trending/map-view"

type TimelineFilter = "all" | "week" | "month" | "quarter"
type ConfidenceFilter = "all" | "High" | "Medium" | "Low"
type ViewsFilter = "all" | "high" | "medium" | "low"

export default function TrendingProperties() {
  const [timelineFilter, setTimelineFilter] = useState<TimelineFilter>("all")
  const [confidenceFilter, setConfidenceFilter] = useState<ConfidenceFilter>("all")
  const [viewsFilter, setViewsFilter] = useState<ViewsFilter>("all")
  const [currentPage, setCurrentPage] = useState(1)
  const [activeTab, setActiveTab] = useState("hot")
  const [viewMode, setViewMode] = useState<"grid" | "map">("grid")
  const [trendingProperties, setTrendingProperties] = useState<Property[]>([])
  const [hotProperties, setHotProperties] = useState<Property[]>([])
  const [loading, setLoading] = useState(true)
  const itemsPerPage = 8

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch("/api/property/all")
        if (!response.ok) {
          throw new Error("Failed to fetch properties")
        }

        const data = await response.json()
        // Map the API response to match the Property type
        const mappedProperties = data.map((property: any) => ({
          id: property.id,
          name: property.name,
          description: property.description || "",
          address: property.address,
          city: property.city,
          state: property.state,
          country: property.country,
          zipCode: property.zipCode,
          price: property.price,
          images: property.images || [],
          area: property.area,
          bed: property.bed,
          bath: property.bath,
          type: property.type,
          confidenceScore: property.confidenceScore ?? null,
          createdAt: new Date(property.createdAt),
          updatedAt: new Date(property.updatedAt),
          owners: property.owners || [],
          Bookmarks: property.Bookmarks || [],
          views: property.views || [],
          ownerType: property.ownerType,
          confidence: property.confidence
        }))
        setTrendingProperties(mappedProperties)
        // Get hot properties (top 8 by confidence score)
        const hot = [...mappedProperties].sort((a, b) => (b.confidenceScore || 0) - (a.confidenceScore || 0)).slice(0, 8)
        setHotProperties(hot)
      } catch (error) {
        console.error("Error fetching properties:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProperties()
  }, [])

  // Filter properties based on selected filters
  const filteredProperties = useMemo(() => {
    let filtered = [...trendingProperties]

    // Apply timeline filter
    if (timelineFilter !== "all") {
      const now = new Date()
      filtered = filtered.filter((property) => {
        const updatedDate = new Date(property.updatedAt)
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
      filtered = filtered.filter((property) => {
        const score = property.confidenceScore || 0
        if (confidenceFilter === "High") return score >= 0.8
        if (confidenceFilter === "Medium") return score >= 0.5 && score < 0.8
        if (confidenceFilter === "Low") return score < 0.5
        return true
      })
    }

    // Apply views filter
    if (viewsFilter !== "all") {
      filtered = filtered.filter((property) => {
        const views = property.views?.length || 0
        if (viewsFilter === "high") return views > 500
        if (viewsFilter === "medium") return views >= 300 && views <= 500
        if (viewsFilter === "low") return views < 300
        return true
      })
    }

    return filtered
  }, [timelineFilter, confidenceFilter, viewsFilter, trendingProperties])

  // Calculate pagination
  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage)
  const paginatedProperties = filteredProperties.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  // Get confidence level color
  const getConfidenceColor = (score: number | null) => {
    if (!score) return "bg-gray-100 text-gray-800"
    if (score >= 0.8) return "bg-green-100 text-green-800"
    if (score >= 0.5) return "bg-yellow-100 text-yellow-800"
        return "bg-red-100 text-red-800"
  }

  // Get trending score color and icon
  const getTrendingIndicator = (score: number | null) => {
    if (!score) {
      return {
        color: "text-blue-600",
        bgColor: "bg-blue-50",
        icon: <Activity className="h-3 w-3 mr-1" />,
        label: "Active",
      }
    }
    if (score > 100) {
      return {
        color: "text-red-600",
        bgColor: "bg-red-50",
        icon: <Flame className="h-3 w-3 mr-1" />,
        label: "Hot",
      }
    } else if (score > 50) {
      return {
        color: "text-orange-600",
        bgColor: "bg-orange-50",
        icon: <TrendingUp className="h-3 w-3 mr-1" />,
        label: "Rising",
      }
    } else {
      return {
        color: "text-blue-600",
        bgColor: "bg-blue-50",
        icon: <Activity className="h-3 w-3 mr-1" />,
        label: "Active",
      }
    }
  }

  // Property card component to avoid duplication
  const PropertyCard = ({ property, rank }: { property: Property; rank?: number }) => {
    const trendingIndicator = getTrendingIndicator(property.confidenceScore)

    return (
      <Link href={`/app/employee/property/${property.id}`} key={property.id}>
        <Card className="h-full hover:shadow-lg transition-shadow duration-200 relative overflow-hidden">
          {rank && (
            <div className="absolute top-0 left-0 w-10 h-10 bg-gray-800 flex items-center justify-center text-white font-bold text-lg z-10 rounded-tl-lg rounded-br-lg">
              {rank}
            </div>
          )}
          <div className="relative h-48 w-full">
            <div
              className="absolute inset-0 rounded-t-lg bg-gray-100"
              style={{
                backgroundImage: `url('/placeholder-r0y0s.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
              <h3 className="font-bold text-lg text-white">
                {property.type} in {property.city}, {property.state}
              </h3>
              <div className="flex items-center text-white/90 mb-1">
                <MapPin className="h-3 w-3 mr-1" />
                <span className="text-sm truncate">{property.address}</span>
              </div>
            </div>
            <div
              className={`absolute top-0 right-0 ${trendingIndicator.bgColor} ${trendingIndicator.color} px-2 py-1 rounded-bl-lg flex items-center text-xs font-medium`}
            >
              {trendingIndicator.icon}
              {trendingIndicator.label}
            </div>
          </div>
          <CardContent className="p-4">
            <div className="flex justify-between mb-3">
              <Badge variant="outline" className="flex items-center gap-1">
                <Eye className="h-3 w-3" />
                {property.views?.length || 0}
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1">
                {property.area} sqft
              </Badge>
              <Badge className={`${getConfidenceColor(property.confidenceScore)} flex items-center gap-1`}>
                <Shield className="h-3 w-3" />
                {property.confidenceScore ? (property.confidenceScore >= 0.8 ? "High" : property.confidenceScore >= 0.5 ? "Medium" : "Low") : "Unknown"}
              </Badge>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-600 flex items-center">
                <Calendar className="h-3 w-3 mr-1" />
                {new Date(property.updatedAt).toLocaleDateString()}
              </div>
              <div className="flex items-center">
                <span className="font-bold text-green-600 mr-2">${property.price.toLocaleString()}</span>
                <Avatar className="h-6 w-6">
                  <AvatarImage src={`/placeholder.svg?height=50&width=50&query=avatar`} />
                  <AvatarFallback>{property.owners?.[0]?.owner?.name?.charAt(0) || "?"}</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    )
  }

  // Featured property card for the top trending property
  const FeaturedPropertyCard = ({ property }: { property: Property }) => {
    const trendingIndicator = getTrendingIndicator(property.confidenceScore)

    return (
      <Card className="overflow-hidden border shadow-md">
        <div className="md:flex">
          <div className="relative md:w-2/5 h-64 md:h-auto">
            <div
              className="absolute inset-0 bg-gray-200"
              style={{
                backgroundImage: `url('/placeholder-r0y0s.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute top-4 left-4 bg-white/90 rounded-full px-3 py-1 flex items-center">
              <Flame className="h-4 w-4 text-red-600 mr-1" />
              <span className="font-bold text-sm">Top Trending</span>
            </div>
          </div>
          <CardContent className="p-6 md:w-3/5">
            <div className="flex items-center mb-2">
              <Badge className={`${trendingIndicator.bgColor} ${trendingIndicator.color} mr-2`}>
                {trendingIndicator.icon}
                Confidence Score: {property.confidenceScore ? Math.round(property.confidenceScore * 100) : 0}%
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1">
                <Eye className="h-3 w-3" />
                {property.views?.length || 0} views
              </Badge>
            </div>

            <h2 className="text-2xl font-bold mb-2">
              {property.type} in {property.city}, {property.state}
            </h2>

            <div className="flex items-center text-gray-600 mb-4">
              <MapPin className="h-4 w-4 mr-1" />
              <span className="text-sm">{property.address}</span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center">
                <Badge className={`${getConfidenceColor(property.confidenceScore)} mr-2`}>
                  <Shield className="h-3 w-3 mr-1" />
                  {property.confidenceScore ? (property.confidenceScore >= 0.8 ? "High" : property.confidenceScore >= 0.5 ? "Medium" : "Low") : "Unknown"}
                </Badge>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 text-gray-500 mr-1" />
                <span className="text-sm text-gray-600">{new Date(property.updatedAt).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center">
                <BarChart3 className="h-4 w-4 text-gray-500 mr-1" />
                <span className="text-sm text-gray-600">{property.area} sqft</span>
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 text-gray-500 mr-1" />
                <span className="text-sm text-gray-600">{property.owners?.[0]?.ownerType || "Unknown"}</span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <span className="font-bold text-2xl text-green-600 mr-2">${property.price.toLocaleString()}</span>
                <ArrowUpRight className="h-5 w-5 text-green-500" />
              </div>
              <Link href={`/app/employee/property/${property.id}`}>
                <Button>View Details</Button>
              </Link>
            </div>
          </CardContent>
        </div>
      </Card>
    )
  }

  // Handle tab change
  const handleTabChange = (value: string) => {
    setActiveTab(value)
  }

  // Handle view all properties button click
  const handleViewAllClick = () => {
    // This will switch to the "all" tab
    setActiveTab("all")
  }

  // Get top trending property
  const topTrendingProperty = hotProperties[0]

  // Get trending categories
  const trendingCategories = [
    { name: "Luxury", icon: <Flame className="h-5 w-5 text-gray-700" /> },
    { name: "Beachfront", icon: <Flame className="h-5 w-5 text-gray-700" /> },
    { name: "Urban", icon: <Flame className="h-5 w-5 text-gray-700" /> },
    { name: "Mountain", icon: <Flame className="h-5 w-5 text-gray-700" /> },
  ]

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      {/* Trending Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="p-4 flex items-center">
            <div className="bg-gray-100 p-3 rounded-full mr-3">
              <Flame className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Hot Properties</p>
              <p className="text-2xl font-bold">{hotProperties.length}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 flex items-center">
            <div className="bg-gray-100 p-3 rounded-full mr-3">
              <Eye className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Views</p>
              <p className="text-2xl font-bold">
                {trendingProperties.reduce((sum, p) => sum + (p.views?.length || 0), 0).toLocaleString()}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 flex items-center">
            <div className="bg-gray-100 p-3 rounded-full mr-3">
              <Activity className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">New This Week</p>
              <p className="text-2xl font-bold">
                {
                  trendingProperties.filter((p) => {
                    const updatedDate = new Date(p.updatedAt)
                    const now = new Date()
                    const diffTime = Math.abs(now.getTime() - updatedDate.getTime())
                    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
                    return diffDays <= 7
                  }).length
                }
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 flex items-center">
            <div className="bg-gray-100 p-3 rounded-full mr-3">
              <BarChart3 className="h-6 w-6 text-gray-700" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Avg. Confidence</p>
              <p className="text-2xl font-bold">
                {trendingProperties.filter((p) => (p.confidenceScore || 0) >= 0.8).length > trendingProperties.length / 2
                  ? "High"
                  : "Medium"}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Featured Property */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center">
          <Flame className="mr-2 h-5 w-5 text-red-600" />
          Featured Trending Property
        </h2>
        {topTrendingProperty && <FeaturedPropertyCard property={topTrendingProperty} />}
      </div>

      {/* Trending Categories */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Trending Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {trendingCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
              <div className="h-16 bg-gray-100 flex items-center justify-center">{category.icon}</div>
              <CardContent className="p-3 text-center">
                <h3 className="font-bold">{category.name}</h3>
                <p className="text-sm text-gray-600">
                  {trendingProperties.filter((p) => p.type.includes(category.name)).length} properties
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={handleTabChange}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="hot">Hot Properties</TabsTrigger>
          <TabsTrigger value="all">All Properties</TabsTrigger>
        </TabsList>

        <TabsContent value="hot" className="mt-6">
          <div className="mb-4">
            <h2 className="text-xl font-bold flex items-center">
              <TrendingUp className="mr-2 h-5 w-5 text-red-600" />
              Hot Properties
              <span className="text-sm font-normal ml-2 text-gray-500">
                (Highest confidence score)
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hotProperties.slice(1).map((property, index) => (
              <PropertyCard key={property.id} property={property} rank={index + 2} />
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
          <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-2">
              <Select value={timelineFilter} onValueChange={(value) => setTimelineFilter(value as TimelineFilter)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Timeline" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Time</SelectItem>
                  <SelectItem value="week">Last Week</SelectItem>
                  <SelectItem value="month">Last Month</SelectItem>
                  <SelectItem value="quarter">Last Quarter</SelectItem>
                </SelectContent>
              </Select>

              <Select value={confidenceFilter} onValueChange={(value) => setConfidenceFilter(value as ConfidenceFilter)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Confidence" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Confidence</SelectItem>
                  <SelectItem value="High">High</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="Low">Low</SelectItem>
                </SelectContent>
              </Select>

              <Select value={viewsFilter} onValueChange={(value) => setViewsFilter(value as ViewsFilter)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Views" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Views</SelectItem>
                  <SelectItem value="high">High Views</SelectItem>
                  <SelectItem value="medium">Medium Views</SelectItem>
                  <SelectItem value="low">Low Views</SelectItem>
                </SelectContent>
              </Select>
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
