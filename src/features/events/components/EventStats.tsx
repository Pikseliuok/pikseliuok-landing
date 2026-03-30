import React from "react";
import ContestPixels from "@/features/events/components/ContestPixels";
import type { EventData } from "@/features/events/types";
import StatCard from "@/components/ui/StatCard";

interface EventStatsProps {
  stats?: EventData["stats"];
  contestedPixels?: EventData["contestedPixels"];
}

const EventStats = ({ stats, contestedPixels }: EventStatsProps) => {
  if (!stats?.length && !contestedPixels?.length) {
    return null;
  }

  return (
    <div className="mt-12">
      <h2 className="mb-4 text-center text-2xl font-bold">Statistika</h2>
      <div className="mx-auto max-w-2xl">
        {stats?.length ? (
          <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            {stats.map((stat) => (
              <StatCard
                key={stat.title}
                title={stat.title}
                value={stat.value}
              />
            ))}
          </div>
        ) : null}

        {contestedPixels?.length ? (
          <>
            <h3 className="mb-4 text-center text-2xl font-bold">
              Labiausiai ginčyti pikseliai
            </h3>
            <ContestPixels pixels={contestedPixels} />
          </>
        ) : null}
      </div>
    </div>
  );
};

export default EventStats;
