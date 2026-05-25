import { useState, type ReactElement } from "react";
import type { TrackModel } from "../../models/Track";
import Layout from "../Layout/Layout";
import { CurrentPlayingTrackContext } from "../../contexts/CurrentPlayingTrackContext";
import TrackList from "../TrackList/TrackList";

const tracks: TrackModel[] = [
  {
    id: 1,
    title: "Space Oddity",
    duration: "5:15",
  },
  {
    id: 2,
    title: "The Man Who Sold The World",
    duration: "3:59",
  },
  {
    id: 3,
    title: "Starman",
    duration: "4:14",
  },
];

export default function App(): ReactElement {
  const [currentPlayingTrack, setCurrentPlayingTrack] =
    useState<TrackModel | null>(null);

  return (
    <Layout>
      <CurrentPlayingTrackContext.Provider
        value={{ currentPlayingTrack, setCurrentPlayingTrack }}
      >
        <TrackList tracks={tracks} />
      </CurrentPlayingTrackContext.Provider>
    </Layout>
  );
}
