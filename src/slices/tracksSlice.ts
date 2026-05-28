import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { TrackModel } from "../models/Track";
import { getTracks } from "../api/getTracks";

interface TrackListState {
  tracks: TrackModel[];
  isLoading: boolean;
}

const initialState: TrackListState = {
  tracks: [],
  isLoading: true,
};

export const fetchTracks = createAsyncThunk("tracks/getAll", async () => {
  return getTracks();
});

const trackSlice = createSlice({
  name: "tracks",
  initialState,
  reducers: {
    toggleLike(state, action: PayloadAction<number>) {
      state.tracks = state.tracks.map((track) => {
        if (track.id === action.payload) {
          return {
            ...track,
            isLiked: !track.isLiked,
          };
        }
        return track;
      });
    },
  },
  selectors: {
    selectTracks: (sliceState) => sliceState.tracks,
    selectIsLoading: (sliceState) => sliceState.isLoading,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTracks.pending, (state) => {
        state.isLoading = true;
        state.tracks = [];
      })
      .addCase(fetchTracks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tracks = action.payload;
      });
  },
});

export const { selectTracks, selectIsLoading } = trackSlice.selectors;

export const { toggleLike } = trackSlice.actions;

export default trackSlice.reducer;
