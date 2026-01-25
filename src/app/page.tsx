"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Countdown from "./components/Countdown";
import { MdArchive } from "react-icons/md";
import { FaDiscord, FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";

const App = () => {
  const parentDomain = process.env.NEXT_PUBLIC_PARENT_DOMAIN || "localhost";

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 backdrop-blur-sm border bg-white/60 dark:bg-black/60 border-gray-200 dark:border-gray-700 shadow-lg dark:shadow-black/30 rounded-2xl">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 px-4">
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

      {/* Additional Content */}
      <div className="mt-12 space-y-8">
        {/* Showcase Twitch Clips */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-center">
            Praėjusių metų Twitch klipai
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Twitch Clips */}
            <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg shadow-lg">
              <iframe
                src={`https://clips.twitch.tv/embed?clip=ShakingAdorableWhaleWow-6lwzIQ27VTIxGcSJ&parent=${parentDomain}`}
                height="100%"
                width="100%"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
            <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg shadow-lg">
              <iframe
                src={`https://clips.twitch.tv/embed?clip=ArbitraryEnthusiasticBasenjiLitty-EbH99fgLD6Iep3iP&parent=${parentDomain}`}
                height="100%"
                width="100%"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
            <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg shadow-lg">
              <iframe
                src={`https://clips.twitch.tv/embed?clip=EnjoyableSmoggyBeaverSMOrc-ZqNZ3tnPgVQwt7_s&parent=${parentDomain}`}
                height="100%"
                width="100%"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
            <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg shadow-lg">
              <iframe
                src={`https://clips.twitch.tv/embed?clip=TriangularUnusualWaterOSkomodo-Iu3ROicUnaPh6icP&parent=${parentDomain}`}
                height="100%"
                width="100%"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Call to Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Link to 2025 Archive */}
          <div className="backdrop-blur-lg bg-white/60 dark:bg-black/60 rounded-xl shadow-lg dark:shadow-black/30 p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <MdArchive className="h-8 w-8 text-blue-500" />
              </div>
              <div className="flex-grow">
                <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">
                  Archyvas
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  Peržiūrėkite praėjusių metų įvykius ir kūrinius
                </p>
                <Link
                  href="/events/2025"
                  className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold transition-colors"
                >
                  Peržiūrėti 2025 metų archyvą
                  <FaArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Link to Discord */}
          <div className="backdrop-blur-lg bg-white/60 dark:bg-black/60 rounded-xl shadow-lg dark:shadow-black/30 p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <FaDiscord className="h-8 w-8 text-indigo-500" />
              </div>
              <div className="flex-grow">
                <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">
                  Prisijunkite prie bendruomenės
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  Bendraukite, dalinkitės idėjomis ir gaukite naujienas
                </p>
                <Link
                  href="https://discord.gg/jCw8vg93xH"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-indigo-500 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 font-semibold transition-colors"
                >
                  Prisijunkite prie Discord
                  <FaExternalLinkAlt className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
