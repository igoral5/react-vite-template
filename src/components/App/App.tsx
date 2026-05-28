import { useEffect, type ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { type AppDispatch, type RootState } from "../../store/store";
import type { TrackModel } from "../../models/Track";
import {
  fetchTracks,
  selectIsLoading,
  selectTracks,
} from "../../slices/tracksSlice";
import Layout from "../Layout/Layout";
import TrackList from "../TrackList/TrackList";

export default function App(): ReactElement {
  const tracks = useSelector<RootState, TrackModel[]>(selectTracks);

  const dispatch = useDispatch<AppDispatch>();

  const isLoading = useSelector<RootState, boolean>(selectIsLoading);

  useEffect(() => {
    dispatch(fetchTracks());
  }, []);

  return (
    <Layout>
      <TrackList tracks={tracks} isLoading={isLoading} />
    </Layout>
  );
}
