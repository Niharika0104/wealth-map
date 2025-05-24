"use client"

import { useRef, useEffect, useState } from "react"
import * as maptilersdk from "@maptiler/sdk"
import "@maptiler/sdk/dist/maptiler-sdk.css"
import { Loader2 } from "lucide-react"
import { getCoordinates } from "../home/interactive-map"
import { Property } from "@/Models/models"

interface MapRef extends maptilersdk.Map {
  remove: () => void
}

interface PropertyMapProps {
  ownaddress: Property[]
  compaddress?: Property[]
  className?: string
}

export function PropertyMap({ ownaddress, compaddress, className = "" }: PropertyMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null)
  const mapInstance = useRef<MapRef | null>(null)
  const initialCoords = { lng: -95.7129, lat: 37.0902 }
  const zoom = 3
  const isMounted = useRef(false)
  const [isClient, setIsClient] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsClient(true)
    isMounted.current = true
    return () => {
      isMounted.current = false
      if (mapInstance.current) {
        mapInstance.current.remove()
      }
    }
  }, [])

  useEffect(() => {
    if (!isClient || !mapContainer.current) return
    if (mapInstance.current) {
      mapInstance.current.remove()
      mapInstance.current = null
    }
    setIsLoading(true)
    async function initializeMap() {
      try {
        const apikey: string = process.env.NEXT_PUBLIC_MAPTILER_API_KEY as string
        maptilersdk.config.apiKey = apikey
        await new Promise((resolve) => setTimeout(resolve, 100))
        if (!isMounted.current) return
        mapInstance.current = new maptilersdk.Map({
          container: mapContainer.current!,
          style: maptilersdk.MapStyle.STREETS,
          center: [initialCoords.lng, initialCoords.lat],
          zoom: zoom,
        }) as MapRef
        mapInstance.current.on("load", async () => {
          if (!isMounted.current) return
          const ownProps = Array.isArray(ownaddress) ? ownaddress : []
          const comparisonProperties = Array.isArray(compaddress) ? compaddress : []
          const allProperties = [...ownProps, ...comparisonProperties]
          if (allProperties.length > 0) {
            const bounds = new maptilersdk.LngLatBounds()
            let clng = initialCoords.lng, clat = initialCoords.lat
            let foundCoords = false
            for (const property of allProperties) {
              const coords = await getCoordinates(property)
              if (coords) {
                [clng, clat] = coords
                foundCoords = true
                break
              }
            }
            for (const property of ownProps) {
              if (!isMounted.current) break
              const coords = await getCoordinates(property)
              if (!coords) continue
              const [lng, lat] = coords
              bounds.extend([lng, lat])
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
              const popup = new maptilersdk.Popup({ offset: 25 }).setHTML(`
                <div class="p-2">
                  <div class="font-medium">${property.address}</div>
                  <div class="text-sm">Value: ${property.price}</div>
                </div>
              `)
              const marker = new maptilersdk.Marker({
                element: markerEl,
                anchor: "bottom",
              })
                .setLngLat([lng, lat])
                .setPopup(popup)
                .addTo(mapInstance.current!)
              marker.getElement().style.cursor = "pointer"
            }
            for (const property of comparisonProperties) {
              if (!isMounted.current) break
              const coords = await getCoordinates(property)
              if (!coords) continue
              const [lng, lat] = coords
              bounds.extend([lng, lat])
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
              const popup = new maptilersdk.Popup({ offset: 25 }).setHTML(`
                <div class="p-2">
                  <div class="font-medium">${property.address}</div>
                  <div class="text-sm">Value: ${property.price}</div>
                  <div class="text-xs text-orange-500 font-medium mt-1">Comparison Property</div>
                </div>
              `)
              const marker = new maptilersdk.Marker({
                element: markerEl,
                anchor: "bottom",
              })
                .setLngLat([lng, lat])
                .setPopup(popup)
                .addTo(mapInstance.current!)
              marker.getElement().style.cursor = "pointer"
            }
            if (bounds.isEmpty() && foundCoords && isMounted.current && mapInstance.current) {
              mapInstance.current.flyTo({
                center: [clng, clat],
                zoom: 14,
                essential: true,
              })
            } else if (!bounds.isEmpty() && isMounted.current && mapInstance.current) {
              mapInstance.current.fitBounds(bounds, { padding: 70, maxZoom: 15 })
            }
          }
          setIsLoading(false)
        })
      } catch (error) {
        console.error("Error initializing map:", error)
        setIsLoading(false)
      }
    }
    initializeMap()
  }, [isClient, ownaddress, compaddress])

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