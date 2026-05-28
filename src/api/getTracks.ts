import { tracks } from "../data/tracks";
import type { TrackModel } from "../models/Track";

export const getTracks = () => {
  return new Promise((resolve: (tracks: TrackModel[]) => void) => {
    setTimeout(() => {
      resolve(tracks);
    }, 3000);
  });
};
