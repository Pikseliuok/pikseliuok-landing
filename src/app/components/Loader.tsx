"use client";
import React, { useEffect, useState } from "react";
import "../../styles/loader.css";

const gridSize = 20;

interface LoaderProps {
  children: React.ReactNode;
}

const Loader: React.FC<LoaderProps> = ({ children }) => {
  interface Pixel {
    id: number;
    x: number;
    y: number;
    color: string;
  }

  const [pixels, setPixels] = useState<Pixel[]>([]);
  const [fadeOut, setFadeOut] = useState(false);
  const [loading, setLoading] = useState(true);

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

    setTimeout(() => {
      clearInterval(interval);
      setFadeOut(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000); // Match the CSS transition duration
    }, 3000);

    return () => clearInterval(interval);
  });

  return (
    <>
      {loading ? (
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
      )}
    </>
  );
};

export default Loader;
