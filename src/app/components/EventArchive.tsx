"use client";
import React from "react";
import CanvasViewer from "@/app/components/CanvasViewer";
import StatCard from "@/app/components/StatCard";
import ContestPixels from "@/app/components/ContestPixels";
import DownloadItem from "@/app/components/DownloadItem";

type PixelData = { coords: string; changes: string; description: string };
type Leader = { username: string; pixelCount: string };
type Download = {
  filename: string;
  path: string;
  downloadName: string;
  size: string;
};

export type EventData = {
  title: string;
  summary?: string;
  canvasImageUrl: string;
  timelapseUrl?: string;
  stats?: { title: string; value: string }[];
  contestedPixels?: PixelData[];
  topPixelPlacers?: Leader[];
  downloads?: Download[];
  note?: string;
};

const EventArchive: React.FC<{ data: EventData }> = ({ data }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center backdrop-blur-lg rounded-2xl text-foreground p-4">
      <div className="container mx-auto py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
          {data.summary && <p className="text-lg mb-2">{data.summary}</p>}
        </div>

        <div className="mb-16">
          <CanvasViewer canvasImageUrl={data.canvasImageUrl} />
        </div>

        {data.timelapseUrl && (
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
                  <source src={data.timelapseUrl} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        )}

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4 text-center">Statistika</h2>
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {data.stats?.map((s, i) => (
                <StatCard key={i} title={s.title} value={s.value} />
              ))}
            </div>

            {data.contestedPixels && (
              <>
                <h3 className="text-2xl font-bold mb-4 text-center">
                  Labiausiai ginčyti pikseliai
                </h3>
                <ContestPixels pixels={data.contestedPixels} />
              </>
            )}

            {data.topPixelPlacers && (
              <>
                <h3 className="text-2xl font-bold mb-4 mt-8 text-center">
                  TOP {data.topPixelPlacers.length} pikseliuotojai
                </h3>
                <div className="backdrop-blur-lg bg-white/60 dark:bg-black/60 rounded-xl shadow-lg p-4 border border-gray-200 dark:border-gray-700">
                  <div className="max-h-[500px] overflow-y-auto">
                    <table className="w-full">
                      <thead className="sticky top-0 backdrop-blur-lg bg-white/80 dark:bg-black/80">
                        <tr className="border-b border-gray-300 dark:border-gray-700">
                          <th className="text-left py-2 px-4">#</th>
                          <th className="text-left py-2 px-4">Vartotojas</th>
                          <th className="text-right py-2 px-4">
                            Pikselių kiekis
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.topPixelPlacers.map((user, index) => (
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
              </>
            )}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4 text-center">Atsisiuntimai</h2>
          <div className="max-w-2xl mx-auto backdrop-blur-lg bg-white/60 dark:bg-black/60 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
            <ul className="space-y-2">
              {data.downloads?.map((d, i) => (
                <DownloadItem
                  key={i}
                  filename={d.filename}
                  path={d.path}
                  downloadName={d.downloadName}
                  size={d.size}
                />
              ))}
            </ul>
          </div>
        </div>

        {data.note && (
          <p className="text-sm text-gray-400 dark:text-gray-600 italic text-center mt-10 mb-4">
            {data.note}
          </p>
        )}
      </div>
    </div>
  );
};

export default EventArchive;
