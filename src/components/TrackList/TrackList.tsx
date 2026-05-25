import type { ReactElement } from "react";
import type { TrackModel } from "../../models/Track";
import style from "./TrackList.module.scss";
import Track from "../Track/Track";

interface TrackListProps {
  tracks: TrackModel[];
}

export default function TrackList({ tracks }: TrackListProps): ReactElement {
  return (
    <div className={style.trackList}>
      {tracks.map((track) => (
        <Track key={track.id} track={track} />
      ))}
    </div>
  );
}
