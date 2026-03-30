import React from "react";
import DownloadItem from "@/components/ui/DownloadItem";
import Panel from "@/components/ui/Panel";
import type { EventData } from "@/features/events/types";

interface EventDownloadsProps {
  downloads?: EventData["downloads"];
}

const EventDownloads = ({ downloads }: EventDownloadsProps) => {
  if (!downloads?.length) {
    return null;
  }

  return (
    <div className="mt-12">
      <h2 className="mb-4 text-center text-2xl font-bold">Atsisiuntimai</h2>
      <Panel className="mx-auto max-w-2xl rounded-2xl p-8 shadow-xl backdrop-blur-lg">
        <ul className="space-y-2">
          {downloads.map((download) => (
            <DownloadItem
              key={download.path}
              filename={download.filename}
              path={download.path}
              downloadName={download.downloadName}
              size={download.size}
            />
          ))}
        </ul>
      </Panel>
    </div>
  );
};

export default EventDownloads;
