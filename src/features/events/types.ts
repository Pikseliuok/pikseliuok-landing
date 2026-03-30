export type PixelData = {
  coords: string;
  changes: string;
  description: string;
};

export type Leader = {
  username: string;
  pixelCount: string;
};

export type Download = {
  filename: string;
  path: string;
  downloadName: string;
  size: string;
};

export type EventStat = {
  title: string;
  value: string;
};

export type EventData = {
  title: string;
  summary?: string;
  canvasImageUrl: string;
  timelapseUrl?: string;
  stats?: EventStat[];
  contestedPixels?: PixelData[];
  topPixelPlacers?: Leader[];
  downloads?: Download[];
  clips?: string[];
  note?: string;
};
