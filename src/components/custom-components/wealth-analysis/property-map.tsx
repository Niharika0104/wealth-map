"use client"

import { useRef, useEffect, useState } from "react"
import * as maptilersdk from "@maptiler/sdk"
import "@maptiler/sdk/dist/maptiler-sdk.css"
import { Loader2 } from "lucide-react"

// Proper interface for the Map instance
interface MapRef extends maptilersdk.Map {
  remove: () => void
}

interface PropertyMapProps {
  ownerId: string
  comparisonOwnerId?: string
  className?: string
}

// Mock property data - in a real app, this would come from your API
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

export function PropertyMap({ ownerId, comparisonOwnerId, className = "" }: PropertyMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null)
  const mapInstance = useRef<MapRef | null>(null)
  const initialCoords = { lng: -95.7129, lat: 37.0902 } // Center of US
  const zoom = 3
  // Track mounted state to prevent memory leaks
  const isMounted = useRef(false)
  // Use state to ensure client-side rendering only
  const [isClient, setIsClient] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Set client-side flag
    setIsClient(true)
    // Set mounted flag
    isMounted.current = true

    // Cleanup function to run on unmount
    return () => {
      isMounted.current = false
      if (mapInstance.current) {
        mapInstance.current.remove()
      }
    }
  }, [])

  // Second useEffect that only runs when isClient is true and ownerId changes
  useEffect(() => {
    // Only run on the client side
    if (!isClient || !mapContainer.current) return

    // Remove previous map instance if it exists
    if (mapInstance.current) {
      mapInstance.current.remove()
      mapInstance.current = null
    }

    setIsLoading(true)

    // Create an async function inside useEffect
    async function initializeMap() {
      try {
        const apikey: string = process.env.NEXT_PUBLIC_MAPTILER_API_KEY as string
        maptilersdk.config.apiKey = apikey

        // Wait a small amount of time to ensure DOM is fully loaded
        await new Promise((resolve) => setTimeout(resolve, 100))

        // Check again if component is still mounted
        if (!isMounted.current) return

        mapInstance.current = new maptilersdk.Map({
          container: mapContainer.current!,
          style: maptilersdk.MapStyle.STREETS,
          center: [initialCoords.lng, initialCoords.lat],
          zoom: zoom,
        }) as MapRef

        // Wait for the map to load before adding markers
        mapInstance.current.on("load", async () => {
          if (!isMounted.current) return

          // Get properties for this owner
          const properties = mockProperties[ownerId] || []

          // Get comparison properties if provided
          const comparisonProperties = comparisonOwnerId ? mockProperties[comparisonOwnerId] || [] : []

          const allProperties = [...properties, ...comparisonProperties]

          if (allProperties.length > 0) {
            // Create bounds to fit all markers
            const bounds = new maptilersdk.LngLatBounds()

            // Add primary owner properties
            for (const property of properties) {
              if (!isMounted.current) break

              const [lng, lat] = property.coordinates

              // Extend bounds to include this point
              bounds.extend([lng, lat])

              // Create a custom marker element
              const markerEl = document.createElement("div")
              markerEl.className = "property-marker"
              markerEl.innerHTML = `
                <div class="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                </div>
              `

              // Create popup
              const popup = new maptilersdk.Popup({ offset: 25 }).setHTML(`
                <div class="p-2">
                  <div class="font-medium">${property.address}</div>
                  <div class="text-sm">Value: ${property.value}</div>
                </div>
              `)

              // Add marker to map
              const marker = new maptilersdk.Marker({
                element: markerEl,
                anchor: "bottom",
              })
                .setLngLat([lng, lat])
                .setPopup(popup)
                .addTo(mapInstance.current!)

              // Make marker clickable
              const markerElement = marker.getElement()
              markerElement.style.cursor = "pointer"
            }

            // Add comparison owner properties with different color
            for (const property of comparisonProperties) {
              if (!isMounted.current) break

              const [lng, lat] = property.coordinates

              // Extend bounds to include this point
              bounds.extend([lng, lat])

              // Create a custom marker element with different color
              const markerEl = document.createElement("div")
              markerEl.className = "property-marker"
              markerEl.innerHTML = `
                <div class="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                </div>
              `

              // Create popup
              const popup = new maptilersdk.Popup({ offset: 25 }).setHTML(`
                <div class="p-2">
                  <div class="font-medium">${property.address}</div>
                  <div class="text-sm">Value: ${property.value}</div>
                  <div class="text-xs text-orange-500 font-medium mt-1">Comparison Property</div>
                </div>
              `)

              // Add marker to map
              const marker = new maptilersdk.Marker({
                element: markerEl,
                anchor: "bottom",
              })
                .setLngLat([lng, lat])
                .setPopup(popup)
                .addTo(mapInstance.current!)

              // Make marker clickable
              const markerElement = marker.getElement()
              markerElement.style.cursor = "pointer"
            }

            // Fit map to bounds with padding
            if (allProperties.length > 1 && isMounted.current && mapInstance.current) {
              mapInstance.current.fitBounds(bounds, { padding: 70, maxZoom: 15 })
            } else if (allProperties.length === 1 && isMounted.current && mapInstance.current) {
              mapInstance.current.flyTo({
                center: allProperties[0].coordinates,
                zoom: 14,
                essential: true,
              })
            }
          }

          setIsLoading(false)
        })
      } catch (error) {
        console.error("Error initializing map:", error)
        setIsLoading(false)
      }
    }

    // Call the async function
    initializeMap()
  }, [isClient, ownerId, comparisonOwnerId]) // Re-run when isClient, ownerId or comparisonOwnerId changes

  // Don't render the map container on the server
  if (!isClient) {
    return (
      <div className={`w-full h-full bg-gray-100 flex items-center justify-center ${className}`}>
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  return (
    <div className={`w-full h-full relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/20 z-10">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      )}
      <div ref={mapContainer} className="h-full rounded-lg" />
    </div>
  )
}
