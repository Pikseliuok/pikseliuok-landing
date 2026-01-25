"use client";
import React from "react";
import Image from "next/image";
import Countdown from "./components/Countdown";

const App = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 backdrop-blur-lg p-4">
        {/* Left Section */}
        <div className="space-y-6 text-center">
          <div className="flex flex-col items-center gap-4">
            <Image
              src="/logo.png"
              alt="Pikseliuok"
              width={120}
              height={120}
              className="rounded-md"
            />
            <div>
              <h1 className="text-4xl font-bold">Pikseliuok</h1>
              <p className="mt-3 text-gray-700 dark:text-gray-300 max-w-md">
                Tai{" "}
                <a
                  className="underline text-blue-400"
                  href="https://www.reddit.com/r/place/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  r/place
                </a>{" "}
                įkvėptas projektas, skirtas įvairioms Lietuvos bendruomenėms.
                Jame galima padėti pikselius ant bendros drobės, kuriant bendrą
                meno kūrinį.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center">
          <div className="text-md font-bold mb-4">
            iki projekto pradžios liko
          </div>

          <div className="max-w-full rounded-2xl">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Countdown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
