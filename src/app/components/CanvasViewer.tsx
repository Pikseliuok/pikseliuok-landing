"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";

interface CanvasViewerProps {
  canvasImageUrl: string;
  timelapseGifUrl?: string;
}

const CanvasViewer: React.FC<CanvasViewerProps> = ({
  canvasImageUrl,
  timelapseGifUrl
}) => {
  const [showGif, setShowGif] = useState(false);
  const [magnifierPosition, setMagnifierPosition] = useState({ x: 0, y: 0 });
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [pixelCoords, setPixelCoords] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const magnifierSize = 500; // Increased from 150 to 250 pixels
  const zoomLevel = 4; // Increased zoom level from 3 to 4

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      
      // Calculate pixel coordinates (rounded to integers)
      const pixelX = Math.round((x / width) * 1000);
      const pixelY = Math.round((y / height) * 1000);
      
      setMagnifierPosition({ x, y });
      setPixelCoords({ x: pixelX, y: pixelY });
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="mb-4 flex space-x-4">
        <button 
          className={`px-4 py-2 rounded-md ${!showGif ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setShowGif(false)}
        >
          Final Canvas
        </button>
        {timelapseGifUrl && (
          <button 
            className={`px-4 py-2 rounded-md ${showGif ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setShowGif(true)}
          >
            Timelapse
          </button>
        )}
      </div>

      <div className="w-full max-w-[1000px] relative">
        {/* Coordinates display above and to the left of canvas */}
        {isHovering && !showGif && (
          <div className="absolute top-[-30px] left-0 bg-black bg-opacity-70 text-white px-3 py-1 text-sm font-mono rounded-md z-10">
            Coordinates: {pixelCoords.x}, {pixelCoords.y}
          </div>
        )}
        
        <div 
          className="relative border border-gray-300 overflow-hidden"
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => {
            setShowMagnifier(true);
            setIsHovering(true);
          }}
          onMouseLeave={() => {
            setShowMagnifier(false);
            setIsHovering(false);
          }}
          style={{ width: '100%', height: 'auto', aspectRatio: '1/1', cursor: showGif ? 'default' : 'crosshair' }}
        >
          <div className="w-full h-full relative">
            <Image
              src={showGif && timelapseGifUrl ? timelapseGifUrl : canvasImageUrl}
              alt={showGif ? "Canvas Timelapse" : "Final Canvas"}
              fill
              priority
              unoptimized
              style={{ objectFit: 'contain', imageRendering: 'pixelated' }}
            />
          </div>
          
          {showMagnifier && !showGif && (
            <div
              className="absolute pointer-events-none border-2 border-white overflow-hidden shadow-lg"
              style={{
                width: magnifierSize,
                height: magnifierSize,
                left: magnifierPosition.x - magnifierSize / 2,
                top: magnifierPosition.y - magnifierSize / 2,
                backgroundImage: `url(${canvasImageUrl})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: `${1000 * zoomLevel}px ${1000 * zoomLevel}px`,
                backgroundPosition: `
                  ${-magnifierPosition.x * zoomLevel + magnifierSize / 2}px 
                  ${-magnifierPosition.y * zoomLevel + magnifierSize / 2}px
                `,
                imageRendering: 'pixelated',
              }}
            >
              {/* Removed coordinates display from inside magnifier */}
            </div>
          )}
        </div>
      </div>

      <p className="mt-4 text-center text-sm text-gray-500">
        {!showGif ? 'Hover over the canvas to magnify' : 'Watch how our canvas evolved over time'}
      </p>
    </div>
  );
};

export default CanvasViewer;
