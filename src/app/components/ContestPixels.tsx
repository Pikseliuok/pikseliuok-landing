import React from "react";

interface PixelData {
  coords: string;
  changes: string;
  description: string;
}

interface ContestPixelsProps {
  pixels: PixelData[];
}

const ContestPixels: React.FC<ContestPixelsProps> = ({ pixels }) => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mt-6">
        <ul className="space-y-3">
          {pixels.map((pixel, index) => (
            <li key={index} className="flex flex-col">
              <div className="flex justify-between items-center">
                <span className="font-mono font-bold">{pixel.coords}</span>
                <span className="text-gray-600 dark:text-gray-400">
                  {pixel.changes}
                </span>
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400 italic">
                {pixel.description}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ContestPixels;
