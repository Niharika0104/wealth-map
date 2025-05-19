"use client"

import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import type { FilterState } from "./home-page"
import { RotateCcw } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface MapFiltersProps {
  filterState: FilterState
  setFilterState: (state: FilterState) => void
  valueRange: [number, number]
  sqftRange: [number, number]
  propertyTypes: string[]
  ownerTypes: string[]
  resetFilters: () => void
  filteredCount: number
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
  filteredCount,
  totalCount,
}: MapFiltersProps) {
  // Format value for display
  const formatValue = (value: number) => {
    return value >= 1 ? `$${value}M` : `$${value * 1000}K`
  }

  // Format sqft for display
  const formatSqft = (sqft: number) => {
    return `${sqft.toLocaleString()} sqft`
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

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-sm font-medium">Showing</h3>
          <p className="text-sm text-gray-500">
            {filteredCount} of {totalCount} properties
          </p>
        </div>
        <Button variant="outline" size="sm" onClick={resetFilters}>
          <RotateCcw className="h-3 w-3 mr-2" />
          Reset
        </Button>
      </div>

      <Separator />

      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-medium mb-2">Property Value</h3>
          <div className="px-2">
            <Slider
              value={[filterState.value[0], filterState.value[1]]}
              min={valueRange[0]}
              max={valueRange[1]}
              step={0.1}
              onValueChange={handleValueChange}
              className="mb-2"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>{formatValue(filterState.value[0])}</span>
              <span>{formatValue(filterState.value[1])}</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-2">Square Footage</h3>
          <div className="px-2">
            <Slider
              value={[filterState.sqft[0], filterState.sqft[1]]}
              min={sqftRange[0]}
              max={sqftRange[1]}
              step={100}
              onValueChange={handleSqftChange}
              className="mb-2"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>{formatSqft(filterState.sqft[0])}</span>
              <span>{formatSqft(filterState.sqft[1])}</span>
            </div>
          </div>
        </div>

        <Separator />

        <div>
          <h3 className="text-sm font-medium mb-2">Confidence Level</h3>
          <div className="flex flex-wrap gap-2">
            <Badge
              variant={filterState.confidence.includes("High") ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => toggleConfidence("High")}
            >
              High
            </Badge>
            <Badge
              variant={filterState.confidence.includes("Medium") ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => toggleConfidence("Medium")}
            >
              Medium
            </Badge>
            <Badge
              variant={filterState.confidence.includes("Low") ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => toggleConfidence("Low")}
            >
              Low
            </Badge>
          </div>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="property-types">
            <AccordionTrigger className="text-sm font-medium py-2">Property Types</AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-2 gap-2">
                {propertyTypes.map((type) => (
                  <div key={type} className="flex items-center space-x-2">
                    <Checkbox
                      id={`property-type-${type}`}
                      checked={filterState.propertyType.includes(type)}
                      onCheckedChange={() => togglePropertyType(type)}
                    />
                    <Label htmlFor={`property-type-${type}`} className="text-sm">
                      {type}
                    </Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="owner-types">
            <AccordionTrigger className="text-sm font-medium py-2">Owner Types</AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-2 gap-2">
                {ownerTypes.map((type) => (
                  <div key={type} className="flex items-center space-x-2">
                    <Checkbox
                      id={`owner-type-${type}`}
                      checked={filterState.ownerType.includes(type)}
                      onCheckedChange={() => toggleOwnerType(type)}
                    />
                    <Label htmlFor={`owner-type-${type}`} className="text-sm">
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
