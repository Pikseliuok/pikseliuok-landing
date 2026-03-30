import React from "react";
import CanvasViewer from "@/app/components/CanvasViewer";
import type { EventData } from "@/features/events/types";

interface EventMediaProps {
  canvasImageUrl: EventData["canvasImageUrl"];
  timelapseUrl?: EventData["timelapseUrl"];
}

const EventMedia = ({ canvasImageUrl, timelapseUrl }: EventMediaProps) => {
  return (
    <>
      <div className="mb-16">
        <CanvasViewer canvasImageUrl={canvasImageUrl} />
      </div>

      {timelapseUrl && (
        <div className="mb-16">
          <div className="flex justify-center">
            <div
              className="relative w-full max-w-250"
              style={{ aspectRatio: "1/1" }}
            >
              <video
                className="h-full w-full object-contain"
                controls
                loop
                playsInline
              >
                <source src={timelapseUrl} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EventMedia;
