"use client"

import { useState, useEffect } from "react"
import { getProperties } from "../trending/property-store"
import InteractiveMap from "./interactive-map"
import MapFilters from "./map-filters"
import SavedViews from "./saved-views"
import { Button } from "@/components/ui/button"
import { Layers, Filter, Bookmark, X, Grid, Map } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useMediaQuery } from "@/hooks/use-media-query"
import type { Property } from "../trending/property-generator"
import { toast } from "@/components/ui/use-toast"
import PropertyGrid from "./property-grid"

export type MapView = {
  id: string
  name: string
  center: [number, number]
  zoom: number
  filters: FilterState
  createdAt: string
}

export type FilterState = {
  value: [number, number]
  sqft: [number, number]
  confidence: string[]
  propertyType: string[]
  ownerType: string[]
}

export default function HomePage() {
  const { trendingProperties } = getProperties()
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(trendingProperties)
  const [mapType, setMapType] = useState<"streets" | "satellite">("streets")
  const [currentView, setCurrentView] = useState<{ center: [number, number]; zoom: number }>({
    center: [-95.7129, 37.0902], // Center of US
    zoom: 4,
  })
  const [savedViews, setSavedViews] = useState<MapView[]>([])
  const [filterState, setFilterState] = useState<FilterState>({
    value: [0, 15],
    sqft: [0, 10000],
    confidence: ["High", "Medium", "Low"],
    propertyType: [],
    ownerType: [],
  })
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [isSavedViewsOpen, setIsSavedViewsOpen] = useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const [viewMode, setViewMode] = useState<"map" | "grid">("map")

  // Initialize min/max values for sliders
  const [valueRange, setValueRange] = useState<[number, number]>([0, 15])
  const [sqftRange, setSqftRange] = useState<[number, number]>([0, 10000])

  // Get unique property types and owner types
  const propertyTypes = Array.from(new Set(trendingProperties.map((p) => p.type)))
  const ownerTypes = Array.from(new Set(trendingProperties.map((p) => p.ownerType)))

  // Apply filters to properties
  useEffect(() => {
    const filtered = trendingProperties.filter((property) => {
      // Convert property value from string to number (e.g., "$1.2M" to 1.2)
      const numericValue = Number.parseFloat(property.value.replace(/[^0-9.]/g, ""))
      const valueInMillions = property.value.includes("M") ? numericValue : numericValue / 1000000

      // Check if property passes all filters
      const passesValue = valueInMillions >= filterState.value[0] && valueInMillions <= filterState.value[1]
      const passesSqft = property.sqft >= filterState.sqft[0] && property.sqft <= filterState.sqft[1]
      const passesConfidence = filterState.confidence.includes(property.confidenceLevel)
      const passesPropertyType =
        filterState.propertyType.length === 0 || filterState.propertyType.includes(property.type)
      const passesOwnerType = filterState.ownerType.length === 0 || filterState.ownerType.includes(property.ownerType)

      return passesValue && passesSqft && passesConfidence && passesPropertyType && passesOwnerType
    })

    setFilteredProperties(filtered)
  }, [filterState, trendingProperties])

  // Calculate ranges for sliders on initial load
  useEffect(() => {
    if (trendingProperties.length > 0) {
      // Calculate value range
      const values = trendingProperties.map((p) => {
        const numericValue = Number.parseFloat(p.value.replace(/[^0-9.]/g, ""))
        return p.value.includes("M") ? numericValue : numericValue / 1000000
      })
      const minValue = Math.floor(Math.min(...values))
      const maxValue = Math.ceil(Math.max(...values))
      setValueRange([minValue, maxValue])
      setFilterState((prev) => ({ ...prev, value: [minValue, maxValue] }))

      // Calculate sqft range
      const sqfts = trendingProperties.map((p) => p.sqft)
      const minSqft = Math.floor(Math.min(...sqfts) / 100) * 100
      const maxSqft = Math.ceil(Math.max(...sqfts) / 100) * 100
      setSqftRange([minSqft, maxSqft])
      setFilterState((prev) => ({ ...prev, sqft: [minSqft, maxSqft] }))
    }
  }, [trendingProperties])

  // Load saved views from localStorage
  useEffect(() => {
    const savedViewsFromStorage = localStorage.getItem("savedMapViews")
    if (savedViewsFromStorage) {
      try {
        setSavedViews(JSON.parse(savedViewsFromStorage))
      } catch (error) {
        console.error("Failed to parse saved views:", error)
      }
    }
  }, [])

  // Save current view
  const saveCurrentView = (name: string) => {
    const newView: MapView = {
      id: Date.now().toString(),
      name,
      center: currentView.center,
      zoom: currentView.zoom,
      filters: { ...filterState },
      createdAt: new Date().toISOString(),
    }

    const updatedViews = [...savedViews, newView]
    setSavedViews(updatedViews)
    localStorage.setItem("savedMapViews", JSON.stringify(updatedViews))

    toast({
      title: "View saved",
      description: `"${name}" has been saved to your views.`,
    })
  }

  // Load a saved view
  const loadSavedView = (view: MapView) => {
    setCurrentView({
      center: view.center,
      zoom: view.zoom,
    })
    setFilterState(view.filters)
    setIsSavedViewsOpen(false)

    toast({
      title: "View loaded",
      description: `"${view.name}" has been loaded.`,
    })
  }

  // Delete a saved view
  const deleteSavedView = (id: string) => {
    const updatedViews = savedViews.filter((view) => view.id !== id)
    setSavedViews(updatedViews)
    localStorage.setItem("savedMapViews", JSON.stringify(updatedViews))

    toast({
      title: "View deleted",
      description: "The saved view has been deleted.",
    })
  }

  // Update current view when map moves
  const handleViewChange = (center: [number, number], zoom: number) => {
    setCurrentView({ center, zoom })
  }

  // Toggle map type
  const toggleMapType = () => {
    setMapType(mapType === "streets" ? "satellite" : "streets")
  }

  // Reset filters
  const resetFilters = () => {
    setFilterState({
      value: valueRange,
      sqft: sqftRange,
      confidence: ["High", "Medium", "Low"],
      propertyType: [],
      ownerType: [],
    })

    toast({
      title: "Filters reset",
      description: "All filters have been reset to default values.",
    })
  }

  // Add a function to toggle view mode
  const toggleViewMode = () => {
    setViewMode(viewMode === "map" ? "grid" : "map")
  }

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* View Toggle */}
      <div className="absolute top-4 left-4 z-10">
        <div className="bg-white rounded-md shadow-md p-1 flex">
          <Button
            variant={viewMode === "map" ? "default" : "ghost"}
            size="sm"
            onClick={() => setViewMode("map")}
            className="rounded-r-none"
          >
            <Map className="h-4 w-4 mr-2" />
            Map
          </Button>
          <Button
            variant={viewMode === "grid" ? "default" : "ghost"}
            size="sm"
            onClick={() => setViewMode("grid")}
            className="rounded-l-none"
          >
            <Grid className="h-4 w-4 mr-2" />
            Grid
          </Button>
        </div>
      </div>

      {/* Map View */}
      {viewMode === "map" && (
        <InteractiveMap
          properties={filteredProperties}
          mapType={mapType}
          initialCenter={currentView.center}
          initialZoom={currentView.zoom}
          onViewChange={handleViewChange}
        />
      )}

      {/* Grid View */}
      {viewMode === "grid" && <PropertyGrid properties={filteredProperties} />}

      {/* Map Controls - Desktop */}
      {isDesktop && (
        <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
          {viewMode === "map" && (
            <Button variant="secondary" size="sm" onClick={toggleMapType}>
              <Layers className="h-4 w-4 mr-2" />
              {mapType === "streets" ? "Satellite" : "Streets"}
            </Button>
          )}

          <Button
            variant={isFilterOpen ? "default" : "secondary"}
            size="sm"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>

          <Button
            variant={isSavedViewsOpen ? "default" : "secondary"}
            size="sm"
            onClick={() => setIsSavedViewsOpen(!isSavedViewsOpen)}
          >
            <Bookmark className="h-4 w-4 mr-2" />
            Saved Views
          </Button>
        </div>
      )}

      {/* Map Controls - Mobile */}
      {!isDesktop && (
        <div className="absolute bottom-4 right-4 z-10 flex gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="sm" variant="secondary">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-[80vh]">
              <div className="h-full overflow-y-auto pb-8">
                <MapFilters
                  filterState={filterState}
                  setFilterState={setFilterState}
                  valueRange={valueRange}
                  sqftRange={sqftRange}
                  propertyTypes={propertyTypes}
                  ownerTypes={ownerTypes}
                  resetFilters={resetFilters}
                  filteredCount={filteredProperties.length}
                  totalCount={trendingProperties.length}
                />
              </div>
            </SheetContent>
          </Sheet>

          <Sheet>
            <SheetTrigger asChild>
              <Button size="sm" variant="secondary">
                <Bookmark className="h-4 w-4 mr-2" />
                Views
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-[80vh]">
              <div className="h-full overflow-y-auto pb-8">
                <SavedViews
                  views={savedViews}
                  onLoadView={loadSavedView}
                  onDeleteView={deleteSavedView}
                  onSaveCurrentView={saveCurrentView}
                  currentView={currentView}
                />
              </div>
            </SheetContent>
          </Sheet>

          {viewMode === "map" && (
            <Button size="sm" variant="secondary" onClick={toggleMapType}>
              <Layers className="h-4 w-4" />
            </Button>
          )}
        </div>
      )}

      {/* Filters Panel - Desktop */}
      {isDesktop && isFilterOpen && (
        <div className="absolute top-4 left-4 z-10 w-80 bg-white rounded-lg shadow-lg p-4 max-h-[calc(100vh-32px)] overflow-y-auto mt-14">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Filters</h2>
            <Button variant="ghost" size="sm" onClick={() => setIsFilterOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <MapFilters
            filterState={filterState}
            setFilterState={setFilterState}
            valueRange={valueRange}
            sqftRange={sqftRange}
            propertyTypes={propertyTypes}
            ownerTypes={ownerTypes}
            resetFilters={resetFilters}
            filteredCount={filteredProperties.length}
            totalCount={trendingProperties.length}
          />
        </div>
      )}

      {/* Saved Views Panel - Desktop */}
      {isDesktop && isSavedViewsOpen && (
        <div className="absolute top-4 left-4 z-10 w-80 bg-white rounded-lg shadow-lg p-4 max-h-[calc(100vh-32px)] overflow-y-auto mt-14">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Saved Views</h2>
            <Button variant="ghost" size="sm" onClick={() => setIsSavedViewsOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <SavedViews
            views={savedViews}
            onLoadView={loadSavedView}
            onDeleteView={deleteSavedView}
            onSaveCurrentView={saveCurrentView}
            currentView={currentView}
          />
        </div>
      )}

      {/* Property Count Indicator */}
      <div className="absolute bottom-4 left-4 z-10 bg-white bg-opacity-90 rounded-md px-3 py-1 text-sm">
        Showing {filteredProperties.length} of {trendingProperties.length} properties
      </div>
    </div>
  )
}
