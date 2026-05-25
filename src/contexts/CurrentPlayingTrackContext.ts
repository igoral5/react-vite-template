import React from "react";
import type { TrackModel } from "../models/Track";

export interface TrackContextValue {
  currentPlayingTrack: TrackModel | null;
  setCurrentPlayingTrack: (track: TrackModel | null) => void;
}

export const CurrentPlayingTrackContext =
  React.createContext<TrackContextValue>({} as TrackContextValue);
