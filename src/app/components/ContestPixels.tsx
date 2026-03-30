import React from "react";
import Panel from "@/components/ui/Panel";

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
    <Panel className="mt-6 rounded-xl p-4 backdrop-blur-lg">
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
    </Panel>
  );
};

export default ContestPixels;
