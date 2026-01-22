"use client";
import React from "react";
import EventArchive from "./components/EventArchive";
import { event2025 } from "@/data/events/2025";

const App = () => {
  return <EventArchive data={event2025} />;
};

export default App;
