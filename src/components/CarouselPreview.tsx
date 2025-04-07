
import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Download, Share } from 'lucide-react';

export interface Slide {
  id: string;
  content: string;
  backgroundImage?: string;
  backgroundColor?: string;
}

interface CarouselPreviewProps {
  slides: Slide[];
  templateId: string;
}

const CarouselPreview: React.FC<CarouselPreviewProps> = ({ slides, templateId }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const navigateToSlide = (index: number) => {
    if (index < 0) {
      setCurrentSlide(slides.length - 1);
    } else if (index >= slides.length) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(index);
    }
  };

  const getSlideStyle = (slide: Slide) => {
    const baseStyle: React.CSSProperties = {
      backgroundImage: slide.backgroundImage ? `url(${slide.backgroundImage})` : undefined,
      backgroundColor: slide.backgroundColor || '#ffffff',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    };

    // Apply different styles based on template
    switch (templateId) {
      case 'minimal':
        return {
          ...baseStyle,
          color: '#333',
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
        };
      case 'gradient':
        return {
          ...baseStyle,
          background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
          color: 'white',
          textAlign: 'left',
          padding: '2rem',
        };
      case 'dark':
        return {
          ...baseStyle,
          backgroundColor: '#121212',
          color: 'white',
          textAlign: 'left',
          padding: '2rem',
        };
      case 'vibrant':
        return {
          ...baseStyle,
          border: '10px solid #f97316',
          color: '#333',
          padding: '2rem',
        };
      default:
        return baseStyle;
    }
  };

  if (slides.length === 0) {
    return null;
  }

  return (
    <div className="w-full bg-white rounded-lg shadow-lg p-6 mt-6 animate-fadeIn">
      <h2 className="text-xl font-semibold mb-4">Preview Your Carousel</h2>
      
      <div className="relative">
        <div 
          ref={carouselRef}
          className="overflow-hidden rounded-lg h-[400px] relative"
        >
          <div 
            className="w-full h-full transition-all duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
              display: 'flex',
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className="carousel-slide min-w-full h-full flex-shrink-0"
                style={getSlideStyle(slide)}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-lg md:text-xl lg:text-2xl whitespace-pre-line">{slide.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <button
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-white transition-colors"
          onClick={() => navigateToSlide(currentSlide - 1)}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-white transition-colors"
          onClick={() => navigateToSlide(currentSlide + 1)}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
        
        <div className="flex justify-center mt-4 gap-1">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-accent w-4' : 'bg-gray-300'
              }`}
              onClick={() => navigateToSlide(index)}
            />
          ))}
        </div>
      </div>
      
      <div className="flex justify-between mt-6">
        <div className="text-sm text-gray-500">
          Slide {currentSlide + 1} of {slides.length}
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-1 px-3 py-1.5 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
            <Download className="w-4 h-4" />
            <span className="text-sm">Download</span>
          </button>
          <button className="flex items-center gap-1 px-3 py-1.5 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
            <Share className="w-4 h-4" />
            <span className="text-sm">Share</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarouselPreview;
