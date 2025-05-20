"use client"

import { useEffect, useRef, useState } from "react"
import * as maptilersdk from "@maptiler/sdk"
import "@maptiler/sdk/dist/maptiler-sdk.css"
import { Skeleton } from "@/components/ui/skeleton"

interface InteractiveMapProps {
  addresses?: string[]
  mapType?: "streets" | "satellite"
  initialZoom?: number
  onViewChange?: (center: [number, number], zoom: number) => void
  className?: string
}

interface GeocodedProperty {
  id: string
  address: string
  coordinates: [number, number]
}

export default function InteractiveMap({
  addresses = ["Hyderabad, India", "New York, USA"],
  mapType = "streets",
  initialZoom = 4,
  onViewChange = () => {},
  className = "w-full h-full",
}: InteractiveMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null)
  const mapInstance = useRef<maptilersdk.Map | null>(null)
  const markersRef = useRef<maptilersdk.Marker[]>([])
  const [isClient, setIsClient] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setIsClient(true)
    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove()
      }
    }
  }, [])

  const clearMarkers = () => {
    markersRef.current.forEach((marker) => marker.remove())
    markersRef.current = []
  }

  useEffect(() => {
    if (!isClient || !mapContainer.current || mapInstance.current) return

    const apikey: string = process.env.NEXT_PUBLIC_MAPTILER_API_KEY as string
    if (!apikey) {
      setError("MapTiler API key is missing.")
      setIsLoading(false)
      return
    }

    maptilersdk.config.apiKey = apikey
    const style = mapType === "streets" ? maptilersdk.MapStyle.STREETS : maptilersdk.MapStyle.SATELLITE

    mapInstance.current = new maptilersdk.Map({
      container: mapContainer.current!,
      style,
      center: [0, 20],
      zoom: initialZoom,
    })

    mapInstance.current.on("load", async () => {
      setIsLoading(false)

      const geocodedResults = await Promise.all(
        addresses.map(async (address, idx) => {
          const res = await fetch(
            `https://api.maptiler.com/geocoding/${encodeURIComponent(address)}.json?key=${apikey}`
          )
          const data = await res.json()
          const coords = data?.features?.[0]?.geometry?.coordinates
          if (!coords) return null

          return {
            id: String(idx),
            address,
            coordinates: [coords[0], coords[1]] as [number, number],
          }
        })
      )

      const validResults = geocodedResults.filter(Boolean) as GeocodedProperty[]

      clearMarkers()
      const bounds = new maptilersdk.LngLatBounds()

      for (const prop of validResults) {
        const el = document.createElement("div")
        el.className = "custom-marker"
        el.style.width = "20px"
        el.style.height = "20px"
        el.style.borderRadius = "50%"
        el.style.backgroundColor = "#3b82f6"
        el.style.border = "2px solid white"

        const marker = new maptilersdk.Marker({ element: el })
          .setLngLat(prop.coordinates)
          .setPopup(new maptilersdk.Popup({ offset: 25 }).setText(prop.address))
          .addTo(mapInstance.current!)

        markersRef.current.push(marker)
        bounds.extend(prop.coordinates)
      }

      if (validResults.length > 0) {
        mapInstance.current!.fitBounds(bounds, { padding: 50, maxZoom: 14 })
      }

      mapInstance.current!.on("moveend", () => {
        if (mapInstance.current) {
          const center = mapInstance.current.getCenter().toArray() as [number, number]
          const zoom = mapInstance.current.getZoom()
          onViewChange(center, zoom)
        }
      })
    })
  }, [isClient, addresses, mapType, initialZoom, onViewChange])

  if (!isClient) {
    return <Skeleton className={className} />
  }

  if (error) {
    return <div className="text-red-500">{error}</div>
  }

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
          <p className="text-sm">Loading map...</p>
        </div>
      )}
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  )
}
