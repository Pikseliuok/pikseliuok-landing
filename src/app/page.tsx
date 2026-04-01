"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaDiscord, FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";
import { event2025 } from "@/data/events/2025";
import { event2026 } from "@/data/events/2026";

const App = () => {
  return (
    <div className="w-full max-w-6xl mx-auto backdrop-blur-sm bg-white/60 dark:bg-black/60 border border-gray-200 dark:border-gray-700 shadow-lg rounded-2xl p-8 space-y-10">
      {/* Hero */}
      <section className="text-center">
        <div className="flex flex-col items-center gap-6">
          <Image
            src="/logo.png"
            alt="Pikseliuok"
            width={96}
            height={96}
            className="rounded-xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Pikseliuok</h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
              Lietuviškas{" "}
              <a
                className="underline text-blue-400"
                href="https://www.reddit.com/r/place/"
                target="_blank"
                rel="noopener noreferrer"
              >
                r/place
              </a>{" "}
              įkvėptas projektas, skirtas įvairioms Lietuvos bendruomenėms.
              Kartu ant bendros drobės — vienas meno kūrinys.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-gray-200 dark:border-gray-700" />

      {/* Event cards */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-center">Metai</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 2025 */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden flex flex-col">
            <div className="aspect-video relative bg-gray-100 dark:bg-gray-800">
              <Image
                src="/events/2025/placemap.png"
                alt="Pikseliuok 2025 drobė"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col grow">
              <h3 className="text-xl font-bold">Pikseliuok 2025</h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {event2025.summary}
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {event2025.stats?.slice(0, 2).map((stat) => (
                  <div
                    key={stat.title}
                    className="bg-white/60 dark:bg-gray-700/60 rounded-xl p-3"
                  >
                    <div className="font-bold text-lg">{stat.value}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {stat.title}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-auto pt-5">
                <Link
                  href="/events/2025"
                  className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold transition-colors"
                >
                  Peržiūrėti archyvą <FaArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* 2026 */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden flex flex-col">
            <div className="aspect-video relative bg-gray-100 dark:bg-gray-800">
              <Image
                src="/events/2026/placemap.png"
                alt="Pikseliuok 2026 drobė"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col grow">
              <h3 className="text-xl font-bold">Pikseliuok 2026</h3>
              <p className="mt-1 text-sm text-gray-400 dark:text-gray-500">
                {event2026.summary}
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {event2026.stats?.slice(0, 2).map((stat) => (
                  <div
                    key={stat.title}
                    className="bg-white/60 dark:bg-gray-700/60 rounded-xl p-3"
                  >
                    <div className="font-bold text-lg">{stat.value}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {stat.title}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-auto pt-5">
                <Link
                  href="/events/2026"
                  className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold transition-colors"
                >
                  Peržiūrėti archyvą <FaArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-gray-200 dark:border-gray-700" />

      {/* Discord */}
      <section className="text-center">
        <FaDiscord className="h-12 w-12 text-indigo-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">Bendruomenė</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md mx-auto">
          Bendraukite, dalinkitės idėjomis ir sekite naujienas mūsų Discord
          serveryje
        </p>
        <Link
          href="https://discord.gg/jCw8vg93xH"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
        >
          Prisijunkite prie Discord <FaExternalLinkAlt className="h-4 w-4" />
        </Link>
      </section>
    </div>
  );
};

export default App;
