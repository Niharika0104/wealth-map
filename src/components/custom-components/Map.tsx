'use client';

import React, { useRef, useEffect, useState } from 'react';
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
  // Track mounted state to prevent memory leaks
  const isMounted = useRef(false);
  // Use state to ensure client-side rendering only
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set client-side flag
    setIsClient(true);
    // Set mounted flag
    isMounted.current = true;
    
    // Cleanup function to run on unmount
    return () => {
      isMounted.current = false;
      if (mapInstance.current) {
        mapInstance.current.remove();
      }
    };
  }, []);

  // Second useEffect that only runs when isClient is true
  useEffect(() => {
    // Only run on the client side
    if (!isClient || !mapContainer.current || mapInstance.current) return;

    // Create an async function inside useEffect
    async function initializeMap() {
      try {
        const apikey: string = process.env.NEXT_PUBLIC_MAPTILER_API_KEY as string;
        maptilersdk.config.apiKey = apikey;

        // Wait a small amount of time to ensure DOM is fully loaded
        await new Promise(resolve => setTimeout(resolve, 100));
        
        // Check again if component is still mounted
        if (!isMounted.current) return;
        
        mapInstance.current = new maptilersdk.Map({
          container: mapContainer.current!,
          style: maptilersdk.MapStyle.STREETS,
          center: [initialCoords.lng, initialCoords.lat],
          zoom: zoom
        }) as MapRef;

        // Wait for the map to load before adding markers
        mapInstance.current.on('load', async () => {
          if (!isMounted.current) return;
          
          const addresses = ['Hyderabad, India', 'New York, USA'];
          
          for (const address of addresses) {
            try {
              if (!isMounted.current) break;
              
              const result = await maptilersdk.geocoding.forward(address);
              if (result.features.length > 0 && isMounted.current && mapInstance.current) {
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
                  if (isMounted.current && mapInstance.current) {
                    mapInstance.current.setCenter([lon, lat]);
                    mapInstance.current.setZoom(10);
                  }
                }
              }
            } catch (error) {
              console.error(`Failed to geocode address "${address}":`, error);
            }
          }

          console.log('Map initialized successfully');
        });
      } catch (error) {
        console.error('Error initializing map:', error);
      }
    }

    // Call the async function
    initializeMap();
  }, [isClient]); // Only re-run when isClient changes

  // Don't render the map container on the server
  if (!isClient) {
    return <div className="w-full h-full bg-gray-100 flex items-center justify-center">Loading map...</div>;
  }

  return (
    <div className="w-full h-full relative">
      <div ref={mapContainer} className='h-full rounded-lg ' />
    </div>
  );
}