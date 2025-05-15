'use client';

import React, { useState } from 'react';

interface ImageCarouselProps {
  images: String[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  return (
    <div className="relative w-full">
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-56">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
              current === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={src}
              alt={`Slide ${index}`}
              className="block w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? 'bg-white' : 'bg-gray-400'
            }`}
          ></button>
        ))}
      </div>

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50">
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </span>
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50">
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default ImageCarousel;
