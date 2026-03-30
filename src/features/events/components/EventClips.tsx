"use client";

import React, { useEffect, useState } from "react";

interface EventClipsProps {
  clips: string[];
}

const EventClips = ({ clips }: EventClipsProps) => {
  const [host, setHost] = useState<string | null>(null);

  useEffect(() => {
    setHost(window.location.hostname);
  }, []);

  if (clips.length === 0) {
    return null;
  }

  return (
    <div className="mt-12">
      <h2 className="mb-6 text-center text-2xl font-bold">Momentai</h2>
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 lg:grid-cols-2">
        {clips.map((clip) => (
          <div
            key={clip}
            className="aspect-video rounded-xl bg-gray-200 shadow dark:bg-gray-700"
          >
            {host && (
              <iframe
                src={`https://clips.twitch.tv/embed?clip=${clip}&parent=${host}`}
                height="100%"
                width="100%"
                allowFullScreen
                className="rounded-xl"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventClips;
