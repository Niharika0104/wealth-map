"use client"

import { useRef, useEffect, useState } from "react"
import * as maptilersdk from "@maptiler/sdk"
import "@maptiler/sdk/dist/maptiler-sdk.css"
import type { Property } from "../../../Models/models"
import { Skeleton } from "@/components/ui/skeleton"

// Proper interface for the Map instance
interface MapRef extends maptilersdk.Map {
  remove: () => void
}

interface InteractiveMapProps {
  properties: Property[]
  mapType: "streets" | "satellite"
  initialCenter: [number, number]
  initialZoom: number
  onViewChange: (center: [number, number], zoom: number) => void
}

const geocodeCache = new Map<string, [number, number]>()

async function geocodeAddress(address: string): Promise<[number, number] | null> {
  if (geocodeCache.has(address)) return geocodeCache.get(address)!
  try {
    const apikey: string = process.env.NEXT_PUBLIC_MAPTILER_API_KEY as string
    const url = `https://api.maptiler.com/geocoding/${encodeURIComponent(address)}.json?key=${apikey}`
    const res = await fetch(url)
    if (!res.ok) return null
    const data = await res.json()
    if (data && data.features && data.features.length > 0) {
      const [lng, lat] = data.features[0].geometry.coordinates
      const coords: [number, number] = [lng, lat]
      geocodeCache.set(address, coords)
      return coords
    }
    return null
  } catch (error) {
    console.error(`Geocoding error for address "${address}":`, error)
    return null
  }
}

  // Helper to get coordinates from property (if present)
  const getCoordinates = async (property: Property): Promise<[number, number] | null> => {
    if ((property as any).coordinates && Array.isArray((property as any).coordinates) && (property as any).coordinates.length === 2) {
      return (property as any).coordinates as [number, number]
    }
    if ((property as any).lng !== undefined && (property as any).lat !== undefined) {
      return [(property as any).lng, (property as any).lat]
    }
    if (property.address) {
      return await geocodeAddress(property.address)
    }
    return null
  }

export default function InteractiveMap({
  properties,
  mapType,
  initialCenter,
  initialZoom,
  onViewChange,
}: InteractiveMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null)
  const mapInstance = useRef<MapRef | null>(null)
  const markersRef = useRef<maptilersdk.Marker[]>([])
  const markersLayerRef = useRef<any>(null)
  const clustersLayerRef = useRef<any>(null)

  // Keep a stable reference for the moveend handler
  const handleMoveEndRef = useRef<(() => void) | null>(null)

  // Track mounted state to prevent memory leaks
  const isMounted = useRef(false)
  // Use state to ensure client-side rendering only
  const [isClient, setIsClient] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Fetch properties from API if not provided
  const [apiProperties, setApiProperties] = useState<Property[] | null>(null)
  useEffect(() => {
    if (!properties || properties.length === 0) {
      fetch("/api/property/all")
        .then((res) => res.json())
        .then((data) => setApiProperties(data))
        .catch(() => setApiProperties([]))
    }
  }, [properties])
  const displayProperties = properties && properties.length > 0 ? properties : apiProperties || []

  // Clean up function to remove markers
  const clearMarkers = () => {
    if (markersRef.current.length > 0) {
      markersRef.current.forEach((marker) => marker.remove())
      markersRef.current = []
    }
  }

  // Helper to get region from address
  const getRegion = (property: Property) => {
    if (property.address && property.address.includes(",")) {
      const parts = property.address.split(",")
      return parts[parts.length - 1].trim()
    }
    return property.state || ""
  }

  // Update map style when mapType changes
  useEffect(() => {
    if (mapInstance.current) {
      const style = mapType === "streets" ? maptilersdk.MapStyle.STREETS : maptilersdk.MapStyle.SATELLITE
      mapInstance.current.setStyle(style)
    }
  }, [mapType])

  useEffect(() => {
    // Set client-side flag
    setIsClient(true)
    // Set mounted flag
    isMounted.current = true

    // Cleanup function to run on unmount
    return () => {
      isMounted.current = false
      clearMarkers()
      if (mapInstance.current && handleMoveEndRef.current) {
        mapInstance.current.off("moveend", handleMoveEndRef.current)
      }
      if (mapInstance.current) {
        mapInstance.current.remove()
      }
    }
  }, [])

  // Initialize map
  useEffect(() => {
    // Only run on the client side
    if (!isClient || !mapContainer.current || mapInstance.current) return

    // Create an async function inside useEffect
    async function initializeMap() {
      try {
        const apikey: string = process.env.NEXT_PUBLIC_MAPTILER_API_KEY as string

        if (!apikey) {
          setError("MapTiler API key is missing. Please check your environment variables.")
          setIsLoading(false)
          return
        }

        maptilersdk.config.apiKey = apikey

        // Wait a small amount of time to ensure DOM is fully loaded
        await new Promise((resolve) => setTimeout(resolve, 100))

        // Check again if component is still mounted
        if (!isMounted.current || mapInstance.current) return // prevent double init

        const style = mapType === "streets" ? maptilersdk.MapStyle.STREETS : maptilersdk.MapStyle.SATELLITE

        mapInstance.current = new maptilersdk.Map({
          container: mapContainer.current!,
          style: style,
          center: initialCenter,
          zoom: initialZoom,
        }) as MapRef

        // Define the moveend handler and store in ref
        const handleMoveEnd = () => {
          if (
            !isMounted.current ||
            !mapInstance.current ||
            typeof mapInstance.current?.getCenter !== "function" ||
            typeof mapInstance.current?.getZoom !== "function"
          ) {
            return
          }
          const center = mapInstance.current?.getCenter()?.toArray?.() as [number, number] | undefined
          const zoom = mapInstance.current.getZoom?.()
          if (center && typeof zoom === "number") {
            onViewChange(center, zoom)
          }
        }
        handleMoveEndRef.current = handleMoveEnd

        mapInstance.current.on("load", () => {
          if (!isMounted.current || !mapInstance.current) return
          setIsLoading(false)
          console.log("Map initialized successfully")
          mapInstance.current?.on("moveend", handleMoveEnd)
          mapInstance.current?.on("remove", () => {
            mapInstance.current?.off("moveend", handleMoveEnd)
          })
        })
      } catch (error) {
        console.error("Error initializing map:", error)
        setError("Failed to initialize map. Please try again later.")
        setIsLoading(false)
      }
    }

    // Call the async function
    initializeMap()
  }, [isClient, initialCenter, initialZoom, mapType, onViewChange])

  // Add markers when properties change
  useEffect(() => {
    if (!mapInstance.current || !isMounted.current || isLoading) return

    // Clear existing markers
    clearMarkers()

    // Add new markers for each property
    const addMarkers = async () => {
      for (const property of displayProperties) {
        try {
          if (!isMounted.current || !mapInstance.current) break
          const coords = await getCoordinates(property)
          if (coords && mapInstance.current) {
            const [lng, lat] = coords

            // Create marker element
            const el = document.createElement("div")
            el.className = "custom-marker"
            el.style.width = "20px"
            el.style.height = "20px"
            el.style.borderRadius = "50%"
            el.style.backgroundColor = getMarkerColor(property.confidence ?? "")
            el.style.border = "2px solid white"
            el.style.boxShadow = "0 2px 4px rgba(0,0,0,0.3)"

            const marker = new maptilersdk.Marker({ element: el }).setLngLat([lng, lat]).addTo(mapInstance.current)

            // Add popup with property info
            const popup = new maptilersdk.Popup({ offset: 25 }).setHTML(`
                <div style="max-width: 200px;">
                  <h3 style="font-weight: bold; margin-bottom: 5px;">${property.type} ${getRegion(property)}</h3>
                  <p style="margin-bottom: 5px;">${property.address}</p>
                  <p style="font-weight: bold; color: #10b981;">${property.price ? property.price.toLocaleString() : ""}</p>
                  <a href="/app/property/${property.id}" style="color: #3b82f6; text-decoration: underline;">View details</a>
                </div>
              `)

            marker.setPopup(popup)

            // Store marker for cleanup
            markersRef.current.push(marker)
          } else {
            console.warn(`Property ${property.id} has invalid coordinates`)
          }
        } catch (error) {
          console.error(`Failed to add marker for property "${property.address}":`, error)
        }
      }

      // If we have markers and the map is at the default zoom level, fit the map to show all markers
      if (
        markersRef.current.length > 0 &&
        mapInstance.current &&
        typeof mapInstance.current.getZoom === "function" &&
        typeof mapInstance.current?.getCenter === "function" &&
        mapInstance.current.getZoom() === initialZoom
      ) {
        // Create a bounds object
        const bounds = new maptilersdk.LngLatBounds()

        // Extend the bounds to include each marker's position
        markersRef.current.forEach((marker) => {
          bounds.extend(marker.getLngLat())
        })

        // Fit the map to the bounds
        mapInstance.current?.fitBounds(bounds, {
          padding: 50, // Add some padding around the bounds
          maxZoom: 15, // Don't zoom in too far
        })
      }
    }

    addMarkers()
  }, [displayProperties, isLoading, initialZoom])

  // Helper function to get marker color based on confidence level
  const getMarkerColor = (confidenceLevel: string): string => {
    switch (confidenceLevel) {
      case "High":
        return "#10b981" // green
      case "Medium":
        return "#f59e0b" // yellow
      case "Low":
        return "#ef4444" // red
      default:
        return "#3b82f6" // blue
    }
  }

  // Don't render the map container on the server
  if (!isClient) {
    return <Skeleton className="w-full h-full" />
  }

  // Show error message if there's an error
  if (error) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-100">
        <div className="text-red-500">{error}</div>
      </div>
    )
  }

  return (
    <div className="w-full h-full relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-75 z-10">
          <div className="text-lg font-medium">Loading map...</div>
        </div>
      )}
      <div ref={mapContainer} className="h-full" />
    </div>
  )
}
export{getCoordinates}