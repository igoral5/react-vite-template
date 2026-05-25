import type { ReactElement } from "react";
import type { TrackModel } from "../../models/Track";
import clsx from "clsx";
import style from "./Track.module.scss";
import PlayPause from "../PlayPause/PlayPause";

export interface TrackProps {
  track: TrackModel;
}

export default function Track({ track }: TrackProps): ReactElement {
  const { duration, id, title } = track;

  return (
    <div className={clsx(style.trackRoot, style.typo)}>
      <div className={style.trackId}>{id}</div>
      <PlayPause track={track} />
      <div className={clsx(style.trackContent, style.typo)}>
        <div className={style.trackTitle}>{title}</div>
        <div className={style.trackDurationContainer}>
          <span className={style.trackDuration}>{duration}</span>
        </div>
      </div>
    </div>
  );
}
