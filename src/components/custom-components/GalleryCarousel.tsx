'use client';
import React, { useState } from 'react';

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full space-y-4">
      {/* Main Image */}
      <div className="w-full rounded-xl overflow-hidden">
        <img
          src={images[activeIndex]}
          alt={`Main ${activeIndex}`}
          className="w-full h-[400px] object-cover rounded-xl"
        />
      </div>

      {/* Thumbnail Images */}
      <div className="flex gap-4 justify-start">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index}`}
            className={`w-24 h-20 object-cover rounded-md cursor-pointer border-2 ${
              index === activeIndex ? 'border-blue-600' : 'border-transparent'
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
