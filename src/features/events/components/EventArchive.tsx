import React from "react";
import Panel from "@/components/ui/Panel";
import EventClips from "@/features/events/components/EventClips";
import EventDownloads from "@/features/events/components/EventDownloads";
import EventHero from "@/features/events/components/EventHero";
import EventLeaderboard from "@/features/events/components/EventLeaderboard";
import EventMedia from "@/features/events/components/EventMedia";
import EventStats from "@/features/events/components/EventStats";
import type { EventData } from "@/features/events/types";

const EventArchive = ({ data }: { data: EventData }) => {
  return (
    <Panel className="mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center rounded-2xl p-4 backdrop-blur-sm">
      <div className="container mx-auto py-8">
        <EventHero title={data.title} summary={data.summary} />
        <EventMedia
          canvasImageUrl={data.canvasImageUrl}
          timelapseUrl={data.timelapseUrl}
        />
        <EventClips clips={data.clips ?? []} />
        <EventStats stats={data.stats} contestedPixels={data.contestedPixels} />
        <div className="mt-12 mx-auto max-w-2xl">
          <EventLeaderboard leaders={data.topPixelPlacers} />
        </div>
        <EventDownloads downloads={data.downloads} />

        {data.note && (
          <p className="mt-10 mb-4 text-center text-sm italic text-gray-400 dark:text-gray-600">
            {data.note}
          </p>
        )}
      </div>
    </Panel>
  );
};

export default EventArchive;
