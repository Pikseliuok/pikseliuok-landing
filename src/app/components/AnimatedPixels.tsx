"use client";
import React, { useEffect, useState } from "react";
import "@/app/styles/loader.css";

const gridSize = 20;

interface AnimatedPixelsProps {
  asBackground?: boolean;
  children?: React.ReactNode;
  duration?: number; // Only used for loader
}

interface Pixel {
  id: number;
  x: number;
  y: number;
  color: string;
}

const AnimatedPixels: React.FC<AnimatedPixelsProps> = ({
  asBackground = true,
  children,
  duration,
}) => {
  const [pixels, setPixels] = useState<Pixel[]>([]);
  const [fadeOut, setFadeOut] = useState(false);
  const [loading, setLoading] = useState(duration ? true : false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPixels((prevPixels) => [
        ...prevPixels,
        {
          id: prevPixels.length,
          x:
            Math.floor(Math.random() * (window.innerWidth / gridSize)) *
            gridSize,
          y:
            Math.floor(Math.random() * (window.innerHeight / gridSize)) *
            gridSize,
          color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
        },
      ]);
    }, 25);

    if (duration) {
      setTimeout(() => {
        clearInterval(interval);
        setFadeOut(true);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }, duration);
    }

    return () => clearInterval(interval);
  }, [duration]);

  if (asBackground) {
    return (
      <div
        className="loader-overlay -z-50"
        style={{ zIndex: 0, pointerEvents: "none", opacity: 0.3 }}
      >
        <div className="loader">
          {pixels.map((pixel) => (
            <div
              key={pixel.id}
              className="pixel"
              style={{
                left: pixel.x,
                top: pixel.y,
                backgroundColor: pixel.color,
              }}
            ></div>
          ))}
        </div>
      </div>
    );
  }

  // Loader mode (if duration is set)
  return loading ? (
    <div className={`loader-overlay ${fadeOut ? "fade-out" : ""}`}>
      <div className="loader">
        {pixels.map((pixel) => (
          <div
            key={pixel.id}
            className="pixel"
            style={{
              left: pixel.x,
              top: pixel.y,
              backgroundColor: pixel.color,
            }}
          ></div>
        ))}
      </div>
    </div>
  ) : (
    children
  );
};

export default AnimatedPixels;
