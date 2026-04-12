"use client";

import { useSyncExternalStore } from "react";

const subscribeToStaticValue = () => () => {};

export function useStaticBrowserValue<T>(
  getSnapshot: () => T,
  getServerSnapshot: () => T,
): T {
  return useSyncExternalStore(
    subscribeToStaticValue,
    getSnapshot,
    getServerSnapshot,
  );
}
