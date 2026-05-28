import { configureStore } from "@reduxjs/toolkit";
import tracksSliceReducer from "../slices/tracksSlice";

export const store = configureStore({
  reducer: {
    tracks: tracksSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
