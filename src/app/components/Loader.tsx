import React, { useEffect, useState } from "react";
import "../../styles/loader.css";

const gridSize = 20;

interface LoaderProps {
  onComplete: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  interface Pixel {
    id: number;
    x: number;
    y: number;
    color: string;
  }

  const [pixels, setPixels] = useState<Pixel[]>([]);
  const [fadeOut, setFadeOut] = useState(false);

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
      setTimeout(onComplete, 1000); // Match the CSS transition duration
    }, 3000);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
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
  );
};

export default Loader;
