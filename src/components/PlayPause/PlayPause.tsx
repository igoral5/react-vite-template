import { useContext, useEffect, useState, type ReactElement } from "react";
import type { TrackModel } from "../../models/Track";
import { CurrentPlayingTrackContext } from "../../contexts/CurrentPlayingTrackContext";
import style  from "./PlayPause.module.scss";

interface PlayPauseProps {
  track: TrackModel;
}

export default function PlayPause({ track }: PlayPauseProps): ReactElement {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const { currentPlayingTrack, setCurrentPlayingTrack } = useContext(
    CurrentPlayingTrackContext,
  );

  useEffect(() => {
    if (currentPlayingTrack && currentPlayingTrack.id !== track.id) {
      setIsPlaying(false);
    }
  }, [currentPlayingTrack]);

  const onclick = () => {
    if (!currentPlayingTrack || currentPlayingTrack.id !== track.id) {
      setCurrentPlayingTrack(track);
      setIsPlaying(true);
    } else if (
      currentPlayingTrack &&
      currentPlayingTrack.id === track.id &&
      isPlaying
    ) {
      setIsPlaying(false);
    } else if (
      currentPlayingTrack &&
      currentPlayingTrack.id === track.id &&
      !isPlaying
    ) {
      setIsPlaying(true);
    }
  };

  return (
    <button className={style.playPauseButton} onClick={onclick}>
      {isPlaying ? "pause" : "play"}
    </button>
  );
}
