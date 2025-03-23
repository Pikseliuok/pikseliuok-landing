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

  const topPixelPlacers = [
    { username: "Kaukas", pixelCount: "18.709" },
    { username: "BigDaddy", pixelCount: "11.509" },
    { username: "Laimeg", pixelCount: "11.275" },
    { username: "B392", pixelCount: "11.111" },
    { username: "galkamvyno", pixelCount: "10.821" },
    { username: "killer11x", pixelCount: "10.680" },
    { username: "RealTAS", pixelCount: "10.371" },
    { username: "Nim", pixelCount: "9.952" },
    { username: "zygism16", pixelCount: "9.828" },
    { username: "Minvydaz", pixelCount: "9.120" },
    { username: "MNDBZ", pixelCount: "8.543" },
    { username: "Friebay", pixelCount: "8.527" },
    { username: "Emivio", pixelCount: "8.250" },
    { username: "16iq", pixelCount: "8.123" },
    { username: "Karolinskis", pixelCount: "7.938" },
    { username: "drigis3", pixelCount: "7.509" },
    { username: "nafoapelsinas", pixelCount: "7.241" },
    { username: "eNakamyto", pixelCount: "6.969" },
    { username: "Nerijusas", pixelCount: "6.827" },
    { username: "Moiros", pixelCount: "6.797" },
    { username: "Justinas_Au", pixelCount: "6.794" },
    { username: "antiputinistas", pixelCount: "6.661" },
    { username: "TheNewBOII", pixelCount: "6.600" },
    { username: "Atsi", pixelCount: "6.522" },
    { username: "AgnePau", pixelCount: "6.387" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-4">
      <div className="container mx-auto py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Pikseliuok 2025</h1>
          <p className="text-lg mb-2">
            1000×1000 drobė. 34 spalvos.{" "}
            <span className="font-semibold">6,244</span> kūrėjai.
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

        {/* Statistics */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4 text-center">Statistika</h2>
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <StatCard title="Iš viso pikselių" value="1,899,950" />
              <StatCard title="Registruoti vartotojai" value="6,244" />
              <StatCard
                title="Daugiausia prisijungusių vienu metu"
                value="~850"
              />
              <StatCard title="Sunaudota duomenų" value="397 GB" />
            </div>

            <h3 className="text-2xl font-bold mb-4 text-center">
              Labiausiai ginčyti pikseliai
            </h3>
            <ContestPixels pixels={contestedPixels} />

            {/* Leaderboard */}
            <h3 className="text-2xl font-bold mb-4 mt-8 text-center">
              TOP 25 pikseliuotojai
            </h3>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
              <div className="max-h-[500px] overflow-y-auto">
                <table className="w-full">
                  <thead className="sticky top-0 bg-gray-100 dark:bg-gray-800">
                    <tr className="border-b border-gray-300 dark:border-gray-700">
                      <th className="text-left py-2 px-4">#</th>
                      <th className="text-left py-2 px-4">Vartotojas</th>
                      <th className="text-right py-2 px-4">Pikselių kiekis</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topPixelPlacers.map((user, index) => (
                      <tr
                        key={index}
                        className={`border-b border-gray-200 dark:border-gray-700 ${
                          index < 3 ? "font-semibold" : ""
                        }`}
                      >
                        <td className="py-2 px-4">
                          {index === 0
                            ? "🥇"
                            : index === 1
                            ? "🥈"
                            : index === 2
                            ? "🥉"
                            : index + 1}
                        </td>
                        <td className="py-2 px-4">{user.username}</td>
                        <td className="py-2 px-4 text-right">
                          {user.pixelCount.toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Feedback Form */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4 text-center">Jūsų nuomonė</h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="mb-4">
              Norime sužinoti jūsų nuomonę, kad galėtume tobulinti ateities
              renginius. Užpildyti užtruks tik kelias minutes.
            </p>
            <a
              href="https://forms.gle/oBqApTciQXWN9RU38"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-colors"
            >
              Pasidalinti atsiliepimais
            </a>
          </div>
        </div>

        {/* Downloads */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4 text-center">Atsisiuntimai</h2>
          <div className="max-w-2xl mx-auto">
            <ul className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 space-y-2">
              <DownloadItem
                filename="placemap.png"
                path="/placemap.png"
                downloadName="placemap.png"
                size="(0.98MB)"
              />
              <DownloadItem
                filename="timelapse.mp4"
                path="/timelapse.mp4"
                downloadName="timelapse.mp4"
                size="(66.2MB)"
              />
              <DownloadItem
                filename="pixels.sanit.log (anonimizuota)"
                path="/pixels.sanit.log"
                downloadName="pixels.sanit.log"
                size="(87.2MB)"
              />
              <DownloadItem
                filename="palette.json"
                path="/palette.json"
                downloadName="palette.json"
                size="(2.91KB)"
              />
            </ul>
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
