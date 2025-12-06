"use client";
import React, { useEffect, useRef, useState } from "react";
import "@/app/styles/loader.css";

const gridSize = 20;

interface AnimatedPixelsProps {
  asBackground?: boolean;
  children?: React.ReactNode;
  duration?: number; // Only used for loader
}

const AnimatedPixels: React.FC<AnimatedPixelsProps> = ({
  asBackground = true,
  children,
  duration,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [fadeOut, setFadeOut] = useState(false);
  const [loading, setLoading] = useState(!!duration);
  const pixelDataRef = useRef<ImageData | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasDimensions = () => {
      if (ctx && canvas.width > 0 && canvas.height > 0) {
        pixelDataRef.current = ctx.getImageData(
          0,
          0,
          canvas.width,
          canvas.height
        );
      }

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      if (pixelDataRef.current) {
        ctx.putImageData(pixelDataRef.current, 0, 0);
      }
    };

    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);

    const interval = setInterval(() => {
      const x =
        Math.floor(Math.random() * (canvas.width / gridSize)) * gridSize;
      const y =
        Math.floor(Math.random() * (canvas.height / gridSize)) * gridSize;
      const color = `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")}`;

      ctx.fillStyle = color;
      ctx.fillRect(x, y, gridSize, gridSize);
    }, 50);

    if (duration) {
      setTimeout(() => {
        clearInterval(interval);
        setFadeOut(true);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }, duration);
    }

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", setCanvasDimensions);
    };
  }, [duration]);

  const canvasElement = (
    <canvas ref={canvasRef} style={{ position: "absolute", top: 0, left: 0 }} />
  );

  if (asBackground) {
    return (
      <div
        className="loader-overlay -z-50"
        style={{ pointerEvents: "none", opacity: 0.3 }}
      >
        {canvasElement}
      </div>
    );
  }

  // Loader mode (if duration is set)
  return loading ? (
    <div className={`loader-overlay ${fadeOut ? "fade-out" : ""}`}>
      {canvasElement}
    </div>
  ) : (
    <>{children}</>
  );
};

export default AnimatedPixels;
