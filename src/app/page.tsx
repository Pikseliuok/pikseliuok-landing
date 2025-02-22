"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Loader from "./components/Loader";
import logo from "../../public/logo.png"; // Import the logo image

const targetUnixTime = 1744988400; // Example Unix timestamp (January 1, 2025)

const App = () => {
  const [loading, setLoading] = useState(true);
  const [countdown, setCountdown] = useState(
    targetUnixTime - Math.floor(Date.now() / 1000)
  ); // Set initial countdown value

  const handleLoaderComplete = () => {
    setLoading(false);
  };

  useEffect(() => {
    if (!loading && countdown > 0) {
      const timer = setInterval(() => {
        setCountdown(targetUnixTime - Math.floor(Date.now() / 1000));
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [loading, countdown]);

  const formatTime = (seconds) => {
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return { days, hours, minutes, secs };
  };

  const { days, hours, minutes, secs } = formatTime(countdown);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-background text-foreground p-4">
      {loading && <Loader onComplete={handleLoaderComplete} />}
      {!loading && (
        <>
          <div className="flex flex-col items-center text-center md:text-left p-4 bg-background text-foreground rounded-lg shadow-lg mb-8 md:mb-0 md:mr-8 w-full md:w-1/2 lg:w-1/3">
            <div className="mb-4">
              <Image
                src={logo}
                alt="Pikseliuok Logo"
                width={150}
                height={150}
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-4">Pikseliuok</h1>
              <p className="text-lg mb-4 text-center md:text-left">
                Tai{" "}
                <a
                  href="https://www.reddit.com/r/place/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  r/place
                </a>{" "}
                įkvėptas projektas, skirtas įvairioms Lietuvos bendruomenėms.
                Jame galima padėti pikselius ant bendros drobės, kuriant bendrą
                meno kūrinį.
              </p>
            </div>
          </div>
          <div className="relative bg-gradient-to-br bg-background p-8 rounded-2xl shadow-lg w-full md:w-auto lg:w-1/3">
            <div className="absolute inset-0 bg-gradient-radial to-transparent rounded-full blur-3xl" />
            <div className="relative z-10 flex flex-col items-center space-y-4 text-center text-4xl font-bold">
              <span className="text-lg font-semibold">
                iki projekto pradžios liko
              </span>
              <div className="flex flex-wrap justify-center md:space-x-6 lg:space-x-8">
                {[
                  { value: days, label: "Dienos" },
                  { value: hours, label: "Valandos" },
                  { value: minutes, label: "Minutės" },
                  { value: secs, label: "Sekundės" },
                ].map((unit, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center backdrop-blur-lg p-4 rounded-xl shadow-inner m-2"
                  >
                    <span className="text-6xl">
                      {unit.value.toString().padStart(2, "0")}
                    </span>
                    <span className="mt-2 text-sm tracking-wider uppercase">
                      {unit.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
