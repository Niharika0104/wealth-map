'use client';

import React, { useRef, useEffect } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";

// Proper interface for the Map instance
interface MapRef extends maptilersdk.Map {
  remove: () => void;
}

export default function MapComponent() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<MapRef | null>(null);
  const initialCoords = { lng: -157.9253, lat: 21.4732 };
  const zoom = 14;

  useEffect(() => {
    // Create an async function inside useEffect
    async function initializeMap() {
      if (!mapContainer.current || mapInstance.current) return;

      try {
        const apikey: string = process.env.NEXT_PUBLIC_MAPTILER_API_KEY as string;
        maptilersdk.config.apiKey = apikey;

        mapInstance.current = new maptilersdk.Map({
          container: mapContainer.current,
          style: maptilersdk.MapStyle.STREETS,
          center: [initialCoords.lng, initialCoords.lat],
          zoom: zoom
        }) as MapRef;

        const addresses = ['Hyderabad, India', 'New York, USA'];
        
        for (const address of addresses) {
          try {
            const result = await maptilersdk.geocoding.forward(address);
            if (result.features.length > 0) {
              // Type guard to check if the geometry is a type that has coordinates
              const geometry = result.features[0].geometry;
              
              if ('coordinates' in geometry) {
                const [lon, lat] = geometry.coordinates as [number, number];
                
                const marker = new maptilersdk.Marker({ color: 'red' })
                  .setLngLat([lon, lat])
                  .addTo(mapInstance.current);
                
                const markerElement = marker.getElement();
                markerElement.style.cursor = 'pointer';

                markerElement.onclick = () => {
                  window.location.href = `https://www.google.com/`
                };
                
                // Optional: center the map to the first result
                mapInstance.current.setCenter([lon, lat]);
                mapInstance.current.setZoom(10);
              }
            }
          } catch (error) {
            console.error(`Failed to geocode address "${address}":`, error);
          }
        }

        console.log('Map initialized successfully');
      } catch (error) {
        console.error('Error initializing map:', error);
      }
    }

    // Call the async function
    initializeMap();

    // Cleanup on unmount
    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
      }
    };
  }, []);

  return (
    <div className="w-full h-full relative">
      <div ref={mapContainer} className='h-full' />
    </div>
  );
}