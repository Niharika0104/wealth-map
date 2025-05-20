"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MapPin, Eye, Calendar, Shield, Grid3X3, List } from "lucide-react"
import Link from "next/link"
import type { Property } from "../trending/property-generator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

interface PropertyGridProps {
  properties: Property[]
}

export default function PropertyGrid({ properties }: PropertyGridProps) {
  const [displayMode, setDisplayMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState<string>("value-desc")
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 12

  // Filter properties by search query
  const filteredProperties = properties.filter(
    (property) =>
      property.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.ownerName.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // Sort properties
  const sortedProperties = [...filteredProperties].sort((a, b) => {
    const getNumericValue = (value: string) => {
      const numericValue = Number.parseFloat(value.replace(/[^0-9.]/g, ""))
      return value.includes("M") ? numericValue * 1000000 : numericValue * 1000
    }

    switch (sortBy) {
      case "value-desc":
        return getNumericValue(b.value) - getNumericValue(a.value)
      case "value-asc":
        return getNumericValue(a.value) - getNumericValue(b.value)
      case "sqft-desc":
        return b.sqft - a.sqft
      case "sqft-asc":
        return a.sqft - b.sqft
      case "views-desc":
        return b.views - a.views
      case "views-asc":
        return a.views - b.views
      case "date-desc":
        return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime()
      case "date-asc":
        return new Date(a.lastUpdated).getTime() - new Date(b.lastUpdated).getTime()
      default:
        return getNumericValue(b.value) - getNumericValue(a.value)
    }
  })

  // Paginate properties
  const totalPages = Math.ceil(sortedProperties.length / itemsPerPage)
  const paginatedProperties = sortedProperties.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

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

  // Generate pagination items
  const getPaginationItems = () => {
    const items = []
    const maxVisiblePages = 5

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2))
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1)
    }

    for (let i = startPage; i <= endPage; i++) {
      items.push(
        <PaginationItem key={i}>
          <PaginationLink isActive={currentPage === i} onClick={() => setCurrentPage(i)}>
            {i}
          </PaginationLink>
        </PaginationItem>,
      )
    }

    return items
  }

  return (
    <div className="container mx-auto p-6 pt-16 h-screen overflow-y-auto">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4 mt-4">
        <div className="relative w-full md:w-auto flex-1 max-w-md">
          <Input
            placeholder="Search properties..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 absolute left-3 top-3 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto">
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="value-desc">Value (High to Low)</SelectItem>
              <SelectItem value="value-asc">Value (Low to High)</SelectItem>
              <SelectItem value="sqft-desc">Size (Large to Small)</SelectItem>
              <SelectItem value="sqft-asc">Size (Small to Large)</SelectItem>
              <SelectItem value="views-desc">Views (High to Low)</SelectItem>
              <SelectItem value="views-asc">Views (Low to High)</SelectItem>
              <SelectItem value="date-desc">Date (Newest First)</SelectItem>
              <SelectItem value="date-asc">Date (Oldest First)</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex bg-gray-100 rounded-md p-1">
            <Button
              variant={displayMode === "grid" ? "default" : "ghost"}
              size="sm"
              onClick={() => setDisplayMode("grid")}
              className="rounded-r-none"
            >
              <Grid3X3 className="h-4 w-4" />
            </Button>
            <Button
              variant={displayMode === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => setDisplayMode("list")}
              className="rounded-l-none"
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {paginatedProperties.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium">No properties found</h3>
          <p className="text-gray-500 mt-2">Try adjusting your filters or search query</p>
        </div>
      ) : (
        <>
          {/* Grid View */}
          {displayMode === "grid" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {paginatedProperties.map((property) => (
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
                      <h3 className="font-bold text-lg mb-1 line-clamp-1">
                        {property.type} {property.region}
                      </h3>
                      <div className="flex items-center text-gray-600 mb-2">
                        <MapPin className="h-4 w-4 min-w-4 mr-1" />
                        <span className="text-sm truncate">{property.address}</span>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-3">
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
              ))}
            </div>
          )}

          {/* List View */}
          {displayMode === "list" && (
            <div className="space-y-4">
              {paginatedProperties.map((property) => (
                <Link href={`/app/property/${property.id}`} key={property.id}>
                  <Card className="hover:shadow-md transition-shadow duration-200">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row">
                        <div
                          className="h-32 md:w-48 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
                          style={{
                            backgroundImage: `url('/placeholder-r0y0s.png')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        />
                        <div className="p-4 flex-1">
                          <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                            <div>
                              <h3 className="font-bold text-lg">
                                {property.type} {property.region}
                              </h3>
                              <div className="flex items-center text-gray-600 mb-2">
                                <MapPin className="h-4 w-4 mr-1" />
                                <span className="text-sm">{property.address}</span>
                              </div>
                            </div>
                            <div className="mt-2 md:mt-0 md:ml-4 flex items-center">
                              <span className="font-bold text-green-600 text-lg">{property.value}</span>
                              <Avatar className="h-6 w-6 ml-2">
                                <AvatarImage src={`/placeholder.svg?height=50&width=50&query=avatar`} />
                                <AvatarFallback>{property.ownerName.charAt(0)}</AvatarFallback>
                              </Avatar>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2 mt-3">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Eye className="h-3 w-3" />
                              {property.views} views
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              {property.sqft} sqft
                            </Badge>
                            <Badge
                              className={`${getConfidenceColor(property.confidenceLevel)} flex items-center gap-1`}
                            >
                              <Shield className="h-3 w-3" />
                              {property.confidenceLevel} confidence
                            </Badge>
                            <div className="text-sm text-gray-600 flex items-center ml-auto">
                              <Calendar className="h-3 w-3 mr-1" />
                              {property.lastUpdated}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-8 mb-8">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                      isDisabled={currentPage === 1}
                    />
                  </PaginationItem>

                  {getPaginationItems()}

                  <PaginationItem>
                    <PaginationNext
                      onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                      isDisabled={currentPage === totalPages}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </>
      )}
    </div>
  )
}
