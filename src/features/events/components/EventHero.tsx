import React from "react";
import type { EventData } from "@/features/events/types";

interface EventHeroProps {
  title: EventData["title"];
  summary?: EventData["summary"];
}

const EventHero = ({ title, summary }: EventHeroProps) => {
  return (
    <div className="mb-8 text-center">
      <h1 className="mb-4 text-4xl font-bold">{title}</h1>
      {summary && <p className="mb-2 text-lg">{summary}</p>}
    </div>
  );
};

export default EventHero;
