"use client"

import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import type { FilterState } from "./home-page"
import { RotateCcw, TrendingUp, Home, Users } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface MapFiltersProps {
  filterState: FilterState
  setFilterState: (state: FilterState) => void
  valueRange: [number, number]
  sqftRange: [number, number]
  propertyTypes: (string|undefined)[]
  ownerTypes: string[]
  resetFilters: () => void
  totalCount: number
}

export default function MapFilters({
  filterState,
  setFilterState,
  valueRange,
  sqftRange,
  propertyTypes,
  ownerTypes,
  resetFilters,
  totalCount,
}: MapFiltersProps) {
  // Format value for display
  const formatValue = (value: number) => {
    if (value >= 1000) {
      return `$${(value / 1000).toFixed(0)}B`
    } else if (value >= 1) {
      return `$${value.toFixed(1)}M`
    } else {
      return `$${(value * 1000).toFixed(0)}K`
    }
  }

  // Format sqft for display
  const formatSqft = (sqft: number) => {
    if (sqft >= 1000000) {
      return `${(sqft / 1000000).toFixed(1)}M sqft`
    } else if (sqft >= 1000) {
      return `${(sqft / 1000).toFixed(0)}K sqft`
    } else {
      return `${sqft.toLocaleString()} sqft`
    }
  }

  // Handle value slider change
  const handleValueChange = (value: number[]) => {
    setFilterState({
      ...filterState,
      value: [value[0], value[1]],
    })
  }

  // Handle sqft slider change
  const handleSqftChange = (value: number[]) => {
    setFilterState({
      ...filterState,
      sqft: [value[0], value[1]],
    })
  }

  // Toggle confidence level
  const toggleConfidence = (level: string) => {
    const currentLevels = [...filterState.confidence]
    if (currentLevels.includes(level)) {
      // Remove level if it's already selected
      setFilterState({
        ...filterState,
        confidence: currentLevels.filter((l) => l !== level),
      })
    } else {
      // Add level if it's not selected
      setFilterState({
        ...filterState,
        confidence: [...currentLevels, level],
      })
    }
  }

  // Toggle property type
  const togglePropertyType = (type: string) => {
    const currentTypes = [...filterState.propertyType]
    if (currentTypes.includes(type)) {
      // Remove type if it's already selected
      setFilterState({
        ...filterState,
        propertyType: currentTypes.filter((t) => t !== type),
      })
    } else {
      // Add type if it's not selected
      setFilterState({
        ...filterState,
        propertyType: [...currentTypes, type],
      })
    }
  }

  // Toggle owner type
  const toggleOwnerType = (type: string) => {
    const currentTypes = [...filterState.ownerType]
    if (currentTypes.includes(type)) {
      // Remove type if it's already selected
      setFilterState({
        ...filterState,
        ownerType: currentTypes.filter((t) => t !== type),
      })
    } else {
      // Add type if it's not selected
      setFilterState({
        ...filterState,
        ownerType: [...currentTypes, type],
      })
    }
  }

  // Get confidence badge styling
  const getConfidenceBadgeStyle = (level: string) => {
    const isSelected = filterState.confidence.includes(level)
    switch (level) {
      case "High":
        return isSelected
          ? "bg-green-500 text-white hover:bg-green-600"
          : "border-green-500 text-green-500 hover:bg-green-50"
      case "Medium":
        return isSelected
          ? "bg-yellow-500 text-white hover:bg-yellow-600"
          : "border-yellow-500 text-yellow-500 hover:bg-yellow-50"
      case "Low":
        return isSelected ? "bg-red-500 text-white hover:bg-red-600" : "border-red-500 text-red-500 hover:bg-red-50"
      default:
        return isSelected ? "bg-gray-500 text-white" : "border-gray-500 text-gray-500"
    }
  }

  return (
    <div className="space-y-6 p-1">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-100">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-blue-600" />
              Results
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              <span className="font-medium">{totalCount}</span> total properties
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={resetFilters}
            className="border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300"
          >
            <RotateCcw className="h-3 w-3 mr-2" />
            Reset All
          </Button>
        </div>
      </div>

      <Separator className="bg-gray-200" />

      <div className="space-y-6">
        {/* Property Value Section */}
        <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-sm transition-shadow">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-2 w-2 bg-green-500 rounded-full"></div>
            <h3 className="text-sm font-semibold text-gray-900">Property Value</h3>
          </div>
          <div className="px-2">
            <Slider
              value={[filterState.value[0], filterState.value[1]]}
              min={valueRange[0]}
              max={valueRange[1]}
              step={0.1}
              onValueChange={handleValueChange}
              className="mb-3"
            />
            <div className="flex justify-between text-xs font-medium">
              <span className="text-green-600 bg-green-50 px-2 py-1 rounded">{formatValue(filterState.value[0])}</span>
              <span className="text-green-600 bg-green-50 px-2 py-1 rounded">{formatValue(filterState.value[1])}</span>
            </div>
          </div>
        </div>

        {/* Square Footage Section */}
        <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-sm transition-shadow">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
            <h3 className="text-sm font-semibold text-gray-900">Square Footage</h3>
          </div>
          <div className="px-2">
            <Slider
              value={[filterState.sqft[0], filterState.sqft[1]]}
              min={sqftRange[0]}
              max={sqftRange[1]}
              step={100}
              onValueChange={handleSqftChange}
              className="mb-3"
            />
            <div className="flex justify-between text-xs font-medium">
              <span className="text-blue-600 bg-blue-50 px-2 py-1 rounded">{formatSqft(filterState.sqft[0])}</span>
              <span className="text-blue-600 bg-blue-50 px-2 py-1 rounded">{formatSqft(filterState.sqft[1])}</span>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-200" />

        {/* Confidence Level Section */}
        <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-sm transition-shadow">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-2 w-2 bg-purple-500 rounded-full"></div>
            <h3 className="text-sm font-semibold text-gray-900">Confidence Level</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {["High", "Medium", "Low"].map((level) => (
              <Badge
                key={level}
                variant="outline"
                className={`cursor-pointer transition-all duration-200 font-medium ${getConfidenceBadgeStyle(level)}`}
                onClick={() => toggleConfidence(level)}
              >
                {level}
              </Badge>
            ))}
          </div>
        </div>

        {/* Accordion Sections */}
        <Accordion type="single" collapsible className="w-full space-y-2">
          <AccordionItem
            value="property-types"
            className="border border-gray-200 rounded-lg bg-white hover:shadow-sm transition-shadow"
          >
            <AccordionTrigger className="text-sm font-semibold px-4 py-3 hover:no-underline">
              <div className="flex items-center gap-2">
                <Home className="h-4 w-4 text-orange-500" />
                <span>Property Types</span>
                {filterState.propertyType.length > 0 && (
                  <Badge variant="secondary" className="ml-2 bg-orange-100 text-orange-700">
                    {filterState.propertyType.length}
                  </Badge>
                )}
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4">
              <div className="grid grid-cols-1 gap-3">
                {propertyTypes.map((type) => (
                  <div
                    key={type}
                    className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    <Checkbox
                      id={`property-type-${type}`}
                      checked={filterState.propertyType.includes(type as string)}
                      onCheckedChange={() => togglePropertyType(type as string)}
                      className="data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500"
                    />
                    <Label htmlFor={`property-type-${type}`} className="text-sm font-medium cursor-pointer flex-1">
                      {type}
                    </Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="owner-types"
            className="border border-gray-200 rounded-lg bg-white hover:shadow-sm transition-shadow"
          >
            <AccordionTrigger className="text-sm font-semibold px-4 py-3 hover:no-underline">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-indigo-500" />
                <span>Owner Types</span>
                {filterState.ownerType.length > 0 && (
                  <Badge variant="secondary" className="ml-2 bg-indigo-100 text-indigo-700">
                    {filterState.ownerType.length}
                  </Badge>
                )}
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4">
              <div className="grid grid-cols-1 gap-3">
                {ownerTypes.map((type) => (
                  <div
                    key={type}
                    className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    <Checkbox
                      id={`owner-type-${type}`}
                      checked={filterState.ownerType.includes(type)}
                      onCheckedChange={() => toggleOwnerType(type)}
                      className="data-[state=checked]:bg-indigo-500 data-[state=checked]:border-indigo-500"
                    />
                    <Label htmlFor={`owner-type-${type}`} className="text-sm font-medium cursor-pointer flex-1">
                      {type}
                    </Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
