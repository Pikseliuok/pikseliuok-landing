"use client";
import React from "react";
import CanvasViewer from "./components/CanvasViewer";
import DownloadItem from "./components/DownloadItem";
import StatCard from "./components/StatCard";
import ContestPixels from "./components/ContestPixels";

const App = () => {
  const contestedPixels = [
    {
      coords: "231,354",
      changes: "304 pakeitimai",
      description: "LTU Republic Zita",
    },
    {
      coords: "656,430",
      changes: "227 pakeitimai",
      description: "Žemaitijos herbas, buvusi kolba",
    },
    {
      coords: "906,708",
      changes: "151 pakeitimas",
      description: "Žilvinas Žvagulis",
    },
    {
      coords: "13,912",
      changes: "135 pakeitimai",
      description: "RGB katinas",
    },
    {
      coords: "408,603",
      changes: "135 pakeitimai",
      description: "Liberalų sąjūdžio logotipas",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-4">
      <div className="container mx-auto py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Pikseliuok 2025</h1>
          <p className="text-lg mb-2">
            1000×1000 drobė. 34 spalvos.{" "}
            <span className="font-semibold">5,645</span> kūrėjai.
          </p>
        </div>

        {/* Final canvas */}
        <div className="mb-16">
          <CanvasViewer canvasImageUrl="/placemap.png" />
        </div>

        {/* Timelapse */}
        <div className="mb-16">
          <div className="flex justify-center">
            <div
              className="max-w-[1000px] w-full relative"
              style={{ aspectRatio: "1/1" }}
            >
              <video
                className="w-full h-full object-contain"
                controls
                loop
                playsInline
              >
                <source src="/timelapse.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* Downloads */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4 text-center">Atsisiuntimai</h2>
          <div className="max-w-2xl mx-auto">
            <ul className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 space-y-2">
              <DownloadItem
                filename="final.png"
                path="/placemap.png"
                downloadName="final.png"
                size="(000KB)"
              />
              <DownloadItem
                filename="timelapse.mp4"
                path="/timelapse.mp4"
                downloadName="timelapse.mp4"
                size="(000MB)"
              />
              {/* <DownloadItem
                filename="pixels.log (anonimizuota)"
                path="/pixels.log"
                downloadName="pixels.log"
                size="(256MB)"
              />
              <DownloadItem
                filename="palette.json"
                path="/palette.json"
                downloadName="palette.json"
                size="(2.7KB)"
              /> */}
            </ul>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4 text-center">Statistika</h2>
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <StatCard title="Iš viso pikselių" value="1,340,885" />
              <StatCard title="Registruoti vartotojai" value="5,645" />
              <StatCard
                title="Daugiausia prisijungusių vienu metu"
                value="~850"
              />
              <StatCard title="Sunaudota duomenų" value="378 GB" />
            </div>

            <h3 className="text-2xl font-bold mb-4 text-center">
              Labiausiai ginčyti pikseliai
            </h3>
            <ContestPixels pixels={contestedPixels} />
          </div>
        </div>

        <p className="text-sm text-gray-400 dark:text-gray-600 italic text-center mt-10 mb-4">
          Tai dar ne pabaiga...
        </p>
      </div>
    </div>
  );
};

export default App;
