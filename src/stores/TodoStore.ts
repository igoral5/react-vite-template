import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "../reducers/TodoReducer";

export const store = configureStore({
  reducer,
});
