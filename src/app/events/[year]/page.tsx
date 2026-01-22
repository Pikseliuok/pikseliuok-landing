"use server";
import React from "react";
import NotFound from "@/app/components/NotFound";
import EventArchive from "@/app/components/EventArchive";

type EventData = {
  title: string;
  summary?: string;
  canvasImageUrl: string;
  timelapseUrl?: string;
  stats?: { title: string; value: string }[];
  contestedPixels?: { coords: string; changes: string; description: string }[];
  topPixelPlacers?: { username: string; pixelCount: string }[];
  downloads?: {
    filename: string;
    path: string;
    downloadName: string;
    size: string;
  }[];
  note?: string;
};

export default async function Page({
  params,
}: {
  params: Promise<{ year: string }>;
}) {
  const { year } = await params;

  let data: EventData | null = null;
  try {
    const mod = await import(`@/data/events/${year}`);
    data = mod[`event${year}`] ?? mod.default ?? null;
  } catch {
    data = null;
  }

  if (!data) {
    return (
      <NotFound
        title="Archyvas nerastas"
        message={`Nepavyko rasti ${year} metų archyvo.`}
        suggestions={[
          { label: "Pagrindinis", href: "/" },
          { label: `Peržiūrėti 2025 metų archyvą`, href: "/events/2025" },
        ]}
      />
    );
  }

  return <EventArchive data={data} />;
}
