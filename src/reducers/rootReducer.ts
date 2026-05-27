import { combineSlices } from "@reduxjs/toolkit";
import { tickerSlice } from "../slices/tickerSlice";

export const rootReducer = combineSlices(tickerSlice);

export type RootState = ReturnType<typeof rootReducer>;

