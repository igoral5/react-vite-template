import type { ReactElement } from "react";
import type { TrackModel } from "../../models/Track";
import { useDispatch } from "react-redux";
import { type AppDispatch } from "../../store/store";
import { toggleLike } from "../../slices/tracksSlice";
import style from "./LikeButton.module.scss";

interface LikeButtonProps {
  track: TrackModel;
}

export default function LikeButton({ track }: LikeButtonProps): ReactElement {
  const dispatch = useDispatch<AppDispatch>();

  const onClick = () => {
    dispatch(toggleLike(track));
  };

  return (
    <button className={style.likeButton} onClick={onClick}>
      {track.isLiked ? "дизлайк" : "лайк"}
    </button>
  );
}
