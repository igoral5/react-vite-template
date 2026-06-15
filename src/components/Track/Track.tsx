import { use, type ReactElement } from "react";
import type { TrackType } from "../../utils/GetSong";

interface TrackProps {
  trackPromise: Promise<TrackType>;
}

export function Track({ trackPromise }: TrackProps): ReactElement {
  const { title } = use(trackPromise);

  return <div>{title}</div>;
}
