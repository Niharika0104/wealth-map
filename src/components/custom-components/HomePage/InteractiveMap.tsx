"use client"

import { useRef, useEffect, useState } from "react"
import * as maptilersdk from "@maptiler/sdk"
import "@maptiler/sdk/dist/maptiler-sdk.css"
import { Skeleton } from "@/components/ui/skeleton"
import {cn } from "@/lib/utils"

interface MapRef extends maptilersdk.Map {
  remove: () => void
}

interface InteractiveMapProps {
  properties: string[]
  mapType: "streets" | "satellite"
  initialCenter?: [number, number]
  initialZoom?: number
  onViewChange: (center: [number, number], zoom: number) => void
  className?: string // new prop for classname
}

export default function InteractiveMap({
  properties,
  mapType: initialMapType,
  initialCenter,
  initialZoom,
  onViewChange,
  className,
}: InteractiveMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null)
  const mapInstance = useRef<MapRef | null>(null)
  const markersRef = useRef<maptilersdk.Marker[]>([])

  const isMounted = useRef(false)
  const [isClient, setIsClient] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // internal state for mapType so button can toggle it
  const [mapType, setMapType] = useState<"streets" | "satellite">(initialMapType)

  const clearMarkers = () => {
    markersRef.current.forEach((marker) => marker.remove())
    markersRef.current = []
  }

  useEffect(() => {
    if (mapInstance.current) {
      const style = mapType === "streets" ? maptilersdk.MapStyle.STREETS : maptilersdk.MapStyle.SATELLITE
      mapInstance.current.setStyle(style)
    }
  }, [mapType])

  useEffect(() => {
    setIsClient(true)
    isMounted.current = true

    return () => {
      isMounted.current = false
      clearMarkers()
      if (mapInstance.current) {
        mapInstance.current.remove()
      }
    }
  }, [])

  useEffect(() => {
    if (!isClient || !mapContainer.current || mapInstance.current) return

    async function initializeMap() {
      try {
        const apikey = process.env.NEXT_PUBLIC_MAPTILER_API_KEY as string

        if (!apikey) {
          setError("MapTiler API key is missing. Please check your environment variables.")
          setIsLoading(false)
          return
        }

        maptilersdk.config.apiKey = apikey

        await new Promise((resolve) => setTimeout(resolve, 100))

        if (!isMounted.current) return

        const style = mapType === "streets" ? maptilersdk.MapStyle.STREETS : maptilersdk.MapStyle.SATELLITE

        mapInstance.current = new maptilersdk.Map({
          container: mapContainer.current!,
          style,
          center: initialCenter,
          zoom: initialZoom,
        }) as MapRef

        mapInstance.current.on("load", () => {
          if (!isMounted.current) return
          setIsLoading(false)

          mapInstance.current!.on("moveend", () => {
            if (mapInstance.current) {
              const center = mapInstance.current.getCenter().toArray() as [number, number]
              const zoom = mapInstance.current.getZoom()
              onViewChange(center, zoom)
            }
          })
        })
      } catch (error) {
        console.error("Error initializing map:", error)
        setError("Failed to initialize map. Please try again later.")
        setIsLoading(false)
      }
    }

    initializeMap()
  }, [isClient, initialCenter, initialZoom, onViewChange])

  // Geocode addresses and add markers
  useEffect(() => {
    if (!mapInstance.current || !isMounted.current || isLoading) return
    if (!properties || properties.length === 0) {
      clearMarkers()
      return
    }

    clearMarkers()

    const apikey = process.env.NEXT_PUBLIC_MAPTILER_API_KEY as string
    if (!apikey) {
      setError("MapTiler API key is missing. Please check your environment variables.")
      return
    }

    async function geocodeAddress(address: string): Promise<[number, number] | null> {
      try {
        const url = `https://api.maptiler.com/geocoding/${encodeURIComponent(address)}.json?key=${apikey}&limit=1`
        const response = await fetch(url)
        if (!response.ok) {
          console.warn(`Failed to geocode address: ${address}`)
          return null
        }
        const data = await response.json()
        if (data.features && data.features.length > 0) {
          const [lng, lat] = data.features[0].geometry.coordinates
          return [lng, lat]
        }
        return null
      } catch (e) {
        console.error(`Geocoding error for address "${address}":`, e)
        return null
      }
    }

    async function addMarkersForAddresses() {
      for (const address of properties) {
        if (!isMounted.current || !mapInstance.current) break

        const coords = await geocodeAddress(address)
        if (!coords) continue

        const [lng, lat] = coords

        const el = document.createElement("div")
      el.innerHTML = `<img src="https://cdn-icons-png.flaticon.com/512/684/684908.png" style="width: 30px; height: 30px;" alt="Pin" />`
el.style.transform = "translate(-50%, -100%)"
el.style.position = "absolute"

        const marker = new maptilersdk.Marker({ element: el }).setLngLat([lng, lat]).addTo(mapInstance.current)
        markersRef.current.push(marker)
      }

      if (markersRef.current.length > 0 && mapInstance.current) {
        const bounds = new maptilersdk.LngLatBounds()
        markersRef.current.forEach((marker) => bounds.extend(marker.getLngLat()))
        mapInstance.current.fitBounds(bounds, { padding: 50, maxZoom: 15 })
      }
    }

    addMarkersForAddresses()
  }, [properties, isLoading])

  if (!isClient) return <Skeleton className="w-full h-full" />

  if (error) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-100">
        <div className="text-red-500">{error}</div>
      </div>
    )
  }

  return (
    <div className={cn("h-full relative rounded-3xl ", className)}>
      {/* Toggle button top-left */}
      <button
        onClick={() => setMapType(mapType === "streets" ? "satellite" : "streets")}
        className="absolute top-4 left-4 z-20 bg-white bg-opacity-90 text-sm px-3 py-1 rounded shadow-md hover:bg-opacity-100 transition"
        aria-label="Toggle map view"
      >
        {mapType === "streets" ? "Satellite View" : "Street View"}
      </button>

      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-75 z-10">
          <div className="text-lg font-medium">Loading map...</div>
        </div>
      )}
      <div ref={mapContainer} className="h-full rounded-3xl" />
    </div>
  )
}
