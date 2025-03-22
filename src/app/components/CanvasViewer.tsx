"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

interface CanvasViewerProps {
  canvasImageUrl: string;
}

const CanvasViewer: React.FC<CanvasViewerProps> = ({ canvasImageUrl }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [transformOrigin, setTransformOrigin] = useState("center center");
  // const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  // const [showCoords, setShowCoords] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const zoomLevel = 4;

  // Detect touch device
  useEffect(() => {
    setIsTouchDevice(
      "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        ("msMaxTouchPoints" in navigator &&
          (navigator as Navigator).maxTouchPoints > 0)
    );
  }, []);

  // Prevent scroll on page when zoomed
  useEffect(() => {
    const preventScroll = (e: Event) => {
      if (isZoomed) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    if (isZoomed) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
      document.documentElement.style.overscrollBehavior = "none";

      // Capture touch events for mobile
      document.addEventListener("touchmove", preventScroll as EventListener, {
        passive: false,
        capture: true,
      });
      document.addEventListener("touchstart", preventScroll as EventListener, {
        passive: false,
        capture: true,
      });

      // Capture mouse events for desktop
      document.addEventListener("wheel", preventScroll as EventListener, {
        passive: false,
        capture: true,
      });
      document.addEventListener("mousedown", preventScroll as EventListener, {
        passive: false,
        capture: true,
      });
    }

    return () => {
      // Restore styles when zoom is disabled
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
      document.documentElement.style.overscrollBehavior = "";

      // Remove event listeners
      document.removeEventListener(
        "touchmove",
        preventScroll as EventListener,
        {
          capture: true,
        }
      );
      document.removeEventListener(
        "touchstart",
        preventScroll as EventListener,
        {
          capture: true,
        }
      );
      document.removeEventListener("wheel", preventScroll as EventListener, {
        capture: true,
      });
      document.removeEventListener(
        "mousedown",
        preventScroll as EventListener,
        {
          capture: true,
        }
      );
    };
  }, [isZoomed]);

  // Reset zoom state
  const resetZoom = useCallback(() => {
    setIsZoomed(false);
    setTimeout(() => {
      setTransformOrigin("center center");
    }, 150); // Same duration as the CSS transition
  }, []);

  useEffect(() => {
    // Only needed for desktop when zoomed
    if (isZoomed && !isTouchDevice) {
      const handleGlobalMouseUp = () => {
        resetZoom();
      };

      document.addEventListener("mouseup", handleGlobalMouseUp);

      return () => {
        document.removeEventListener("mouseup", handleGlobalMouseUp);
      };
    }
  }, [isZoomed, isTouchDevice, resetZoom]);

  // // Calculate image coordinates from pointer position
  // const calculateImageCoords = (clientX: number, clientY: number) => {
  //   if (!containerRef.current) return { x: 0, y: 0 };

  //   const { left, top, width, height } =
  //     containerRef.current.getBoundingClientRect();
  //   const x = clientX - left;
  //   const y = clientY - top;

  //   // Map to 0-1000 range
  //   const pixelX = Math.floor((x / width) * 1000);
  //   const pixelY = Math.floor((y / height) * 1000);

  //   return {
  //     x: Math.max(0, Math.min(pixelX, 1000)),
  //     y: Math.max(0, Math.min(pixelY, 1000)),
  //   };
  // };

  // Handle zooming
  const handleZoom = (clientX: number, clientY: number) => {
    // Calculate initial transform origin immediately when zooming in
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const offsetX = clientX - rect.left;
      const offsetY = clientY - rect.top;
      const percentX = (offsetX / rect.width) * 100;
      const percentY = (offsetY / rect.height) * 100;

      // Set transform origin to the click/touch position immediately
      setTransformOrigin(`${percentX}% ${percentY}%`);

      // Update coordinates display
      // const coords = calculateImageCoords(clientX, clientY);
      // setCursorPos(coords);
    }

    setIsZoomed(true);
  };

  // Mouse/Pointer event handlers
  const handlePointerMove = (e: React.PointerEvent) => {
    // Get container bounds
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();

    // Calculate coordinates for display
    // const coords = calculateImageCoords(e.clientX, e.clientY);
    // setCursorPos(coords);

    if (isZoomed) {
      const rawX = Math.max(rect.left, Math.min(e.clientX, rect.right));
      const rawY = Math.max(rect.top, Math.min(e.clientY, rect.bottom));

      // Calculate percentages for transform-origin
      const offsetX = rawX - rect.left;
      const offsetY = rawY - rect.top;
      const percentX = (offsetX / rect.width) * 100;
      const percentY = (offsetY / rect.height) * 100;

      // Update transform origin to follow the mouse
      setTransformOrigin(`${percentX}% ${percentY}%`);
    }
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    if (!isZoomed) {
      handleZoom(e.clientX, e.clientY);
    } else {
      resetZoom();
    }
  };

  const handlePointerUp = () => {
    // Only for desktop, no changes needed here
    if (isTouchDevice) return;

    // Keeping the existing behavior of exiting zoom on mouse up for desktop
    if (!isTouchDevice && isZoomed) {
      resetZoom();
    }
  };

  // Touch-specific handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    // Prevent default browser behavior for touch events
    if (isZoomed) {
      e.preventDefault();
    }

    if (!isZoomed) {
      const touch = e.touches[0];
      handleZoom(touch.clientX, touch.clientY);
    } else {
      resetZoom();
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    // Always prevent default when zoomed to avoid scrolling
    if (isZoomed) {
      e.preventDefault();
    }

    if (!isZoomed || !e.touches[0]) return;

    const touch = e.touches[0];

    // Get container bounds
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();

    // Update coordinates display
    // const coords = calculateImageCoords(touch.clientX, touch.clientY);
    // setCursorPos(coords);

    // Clamp touch coordinates to container boundaries
    const rawX = Math.max(rect.left, Math.min(touch.clientX, rect.right));
    const rawY = Math.max(rect.top, Math.min(touch.clientY, rect.bottom));

    const offsetX = rawX - rect.left;
    const offsetY = rawY - rect.top;
    const percentX = (offsetX / rect.width) * 100;
    const percentY = (offsetY / rect.height) * 100;

    // Update transform origin to follow the touch
    setTransformOrigin(`${percentX}% ${percentY}%`);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (isZoomed) {
      e.preventDefault();
      resetZoom();
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div
        ref={containerRef}
        className={`w-full max-w-[1000px] relative overflow-hidden ${
          isZoomed ? "cursor-crosshair" : "cursor-zoom-in"
        }`}
        style={{ aspectRatio: "1/1" }}
        onPointerMove={handlePointerMove}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
      >
        {/* Canvas image with zoom transform */}
        <div
          ref={imageContainerRef}
          className="w-full h-full relative"
          style={{
            transform: isZoomed ? `scale(${zoomLevel})` : "scale(1)",
            transformOrigin: transformOrigin,
            transition: "transform 150ms ease-out",
            pointerEvents: isZoomed ? "none" : "auto", // Disable pointer events when zoomed
          }}
        >
          <Image
            src={canvasImageUrl}
            alt={"Final Canvas"}
            fill
            priority
            unoptimized
            style={{
              objectFit: "contain",
              imageRendering: "pixelated",
              pointerEvents: "none",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CanvasViewer;
