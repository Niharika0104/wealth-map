"use client"

import { useEffect, useState } from "react"

interface PropertyDetailImageGalleryProps {
  propertyId: string
  isHotProperty?: boolean
}

export default function PropertyDetailImageGallery({
  propertyId,
  isHotProperty = false,
}: PropertyDetailImageGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const images = [
    "/image.png",
    "/image1.png",
    "/image2.png",
  ]

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, images.length])

  // Handle thumbnail click
  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index)
    setIsAutoPlaying(false)

    // Resume auto-play after 5 seconds of manual selection
    setTimeout(() => {
      setIsAutoPlaying(true)
    }, 5000)
  }

  return (
    <div className="relative">
      {/* Main Image Display */}
      <div className="relative h-80 w-full overflow-hidden rounded-t-lg">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-gradient-to-r from-blue-100 to-indigo-100 transition-opacity duration-500 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url('${image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}

        {/* Hot Property Badge */}
        {isHotProperty && (
          <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full flex items-center z-10">
            <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            Hot Property
          </div>
        )}

        {/* Image Counter */}
        <div className="absolute top-4 left-4 bg-black/50 text-white px-2 py-1 rounded text-sm z-10">
          {currentImageIndex + 1} / {images.length}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => {
            setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
            setIsAutoPlaying(false)
            setTimeout(() => setIsAutoPlaying(true), 5000)
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
          aria-label="Previous image"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={() => {
            setCurrentImageIndex((prev) => (prev + 1) % images.length)
            setIsAutoPlaying(false)
            setTimeout(() => setIsAutoPlaying(true), 5000)
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
          aria-label="Next image"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Mini Preview Thumbnails */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => handleThumbnailClick(index)}
            className={`relative w-16 h-12 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
              index === currentImageIndex
                ? "border-white shadow-lg scale-110"
                : "border-white/50 hover:border-white/80 hover:scale-105"
            }`}
            aria-label={`View image ${index + 1}`}
          >
            <div
              className="absolute inset-0 bg-gradient-to-r from-blue-100 to-indigo-100"
              style={{
                backgroundImage: `url('${image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            {/* Active indicator */}
            {index === currentImageIndex && <div className="absolute inset-0 bg-white/20" />}
          </button>
        ))}
      </div>

      {/* Auto-play indicator */}
      <div className="absolute bottom-4 right-4 z-10">
        <div className={`w-2 h-2 rounded-full transition-colors ${isAutoPlaying ? "bg-green-400" : "bg-gray-400"}`} />
      </div>
    </div>
  )
}
