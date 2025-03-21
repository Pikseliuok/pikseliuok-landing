"use client";
import React, { useState, useEffect } from "react";
import localFont from "next/font/local";
import Image from "next/image";
import logo from "../../public/logo.png";
import CanvasViewer from "./components/CanvasViewer";

const targetUnixTime = 1641968000;
const vcrOSDFont = localFont({ src: "../fonts/VCR_OSD_MONO.ttf" });

const App = () => {
  const [countdown, setCountdown] = useState(
    targetUnixTime - Math.floor(Date.now() / 1000)
  );
  const [eventEnded, setEventEnded] = useState(false);

  useEffect(() => {
    // Check if we should show the event ended view
    if (countdown <= 0) {
      setEventEnded(true);
    }

    if (countdown > 0) {
      const timer = setInterval(() => {
        const newCountdown = targetUnixTime - Math.floor(Date.now() / 1000);
        setCountdown(newCountdown);
        
        // Check if the event has just ended
        if (newCountdown <= 0) {
          setEventEnded(true);
          clearInterval(timer);
        }
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [countdown]);

  interface TimeFormat {
    days: number;
    hours: number;
    minutes: number;
    secs: number;
  }

  const formatTime = (seconds: number): TimeFormat => {
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return { days, hours, minutes, secs };
  };

  const { days, hours, minutes, secs } = formatTime(countdown);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-4">
      {!eventEnded ? (
        // Countdown view
        <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-background text-foreground p-4">
          <div className="flex flex-col items-center text-center md:text-left p-4 bg-background text-foreground rounded-lg shadow-lg mb-8 md:mb-0 md:mr-8 w-full md:w-1/2 lg:w-1/3">
            <div className="mb-4">
              <Image src={logo} alt="Pikseliuok Logo" width={150} height={150} />
            </div>
            <div className="max-w-md">
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
                įkvėptas projektas, skirtas įvairioms Lietuvos bendruomenėms. Jame
                galima padėti pikselius ant bendros drobės, kuriant bendrą meno
                kūrinį.
              </p>
            </div>
          </div>
          <div className="relative bg-gradient-to-br bg-background p-8 rounded-2xl shadow-lg w-auto">
            <div className="absolute inset-0 bg-gradient-radial to-transparent rounded-full blur-3xl" />
            <div className="relative z-10 flex flex-col items-center space-y-4 text-center text-4xl font-bold">
              <span className="text-lg font-semibold">
                iki projekto pradžios liko
              </span>
              {countdown > 0 ? (
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
              ) : (
                <div className="flex flex-col items-center justify-center backdrop-blur-lg p-4 rounded-xl shadow-inner m-2">
                  <span
                    className={`text-4xl tracking-wider loading-text ${vcrOSDFont.className}`}
                  ></span>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        // Event ended view with canvas viewer
        <div className="container mx-auto py-8">
          <div className="text-center mb-8">
            <h1 className={`text-4xl font-bold mb-4 ${vcrOSDFont.className}`}>
              Pikseliuok - Finalinis Rezultatas
            </h1>
            <p className="text-lg mb-6">
              Štai galutinis mūsų bendruomenės sukurtas piešinys! Ačiū visiems dalyvavusiems.
            </p>
          </div>
          
          <CanvasViewer 
            canvasImageUrl="/final-canvas.png" 
            timelapseGifUrl="/timelapse.gif" 
          />
          
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Apie projektą</h2>
            <p className="max-w-2xl mx-auto text-lg">
              Pikseliuok buvo kolektyvinis meno projektas, kuriame Lietuvos bendruomenės 
              nariai galėjo patalpinti po vieną pikselį tam tikru laiko intervalu. 
              Rezultatas - bendrai sukurtas meno kūrinys, atspindintis mūsų kūrybiškumą ir bendradarbiavimą.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
