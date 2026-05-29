import {
  useDispatch as dispatchHook,
  useSelector as selectorHook,
} from "react-redux";

import { authSlice } from "../slices/AuthSlice";
import { combineSlices, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineSlices(authSlice);

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export const useDispatch = dispatchHook.withTypes<AppDispatch>();

export const useSelector = selectorHook.withTypes<RootState>();
