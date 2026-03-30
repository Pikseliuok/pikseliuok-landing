import React from "react";
import Panel from "@/components/ui/Panel";
import type { EventData } from "@/features/events/types";

interface EventLeaderboardProps {
  leaders?: EventData["topPixelPlacers"];
}

const EventLeaderboard = ({ leaders }: EventLeaderboardProps) => {
  if (!leaders?.length) {
    return null;
  }

  return (
    <>
      <h3 className="mt-8 mb-4 text-center text-2xl font-bold">
        TOP {leaders.length} pikseliuotojai
      </h3>
      <Panel className="rounded-xl p-4 backdrop-blur-lg">
        <div className="max-h-125 overflow-y-auto">
          <table className="w-full">
            <thead className="sticky top-0 bg-white/80 backdrop-blur-lg dark:bg-black/80">
              <tr className="border-b border-gray-300 dark:border-gray-700">
                <th className="px-4 py-2 text-left">#</th>
                <th className="px-4 py-2 text-left">Vartotojas</th>
                <th className="px-4 py-2 text-right">Pikselių kiekis</th>
              </tr>
            </thead>
            <tbody>
              {leaders.map((user, index) => (
                <tr
                  key={`${user.username}-${index}`}
                  className={`border-b border-gray-200 dark:border-gray-700 ${
                    index < 3 ? "font-semibold" : ""
                  }`}
                >
                  <td className="px-4 py-2">
                    {index === 0
                      ? "🥇"
                      : index === 1
                        ? "🥈"
                        : index === 2
                          ? "🥉"
                          : index + 1}
                  </td>
                  <td className="px-4 py-2">{user.username}</td>
                  <td className="px-4 py-2 text-right">{user.pixelCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>
    </>
  );
};

export default EventLeaderboard;
