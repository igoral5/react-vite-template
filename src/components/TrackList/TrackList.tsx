import type { ReactElement } from "react";
import type { TrackModel } from "../../models/Track";
import Track from "../Track/Track";
import style from "./TrackList.module.scss";

interface TrackListProps {
  tracks: TrackModel[];
  isLoading: boolean;
}

export default function TrackList({
  tracks,
  isLoading,
}: TrackListProps): ReactElement {
  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className={style.trackList}>
          {tracks.map((track) => (
            <Track key={track.id} track={track} />
          ))}
        </div>
      )}
    </>
  );
}
