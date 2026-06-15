import type { ReactElement } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../Home/Home";
import { fakeGetSong, type TrackType } from "../../utils/GetSong";
import style from "./App.module.scss";

export type TrackLoader = {
  trackPromise: Promise<TrackType>;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: (): TrackLoader => {
      return { trackPromise: fakeGetSong() };
    },
  },
]);

export default function App(): ReactElement {
  return (
    <div className={style.container}>
      <RouterProvider router={router} />
    </div>
  );
}
