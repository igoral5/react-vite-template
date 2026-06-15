import { Suspense, type ReactElement } from "react";
import { Track } from "../Track/Track";
import { useLoaderData } from "react-router-dom";
import type { TrackLoader } from "../App/App";

export function Home(): ReactElement {
  const { trackPromise } = useLoaderData<TrackLoader>();

  return (
    <div>
      <h1>Home</h1>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Track trackPromise={trackPromise} />
      </Suspense>
    </div>
  );
}
