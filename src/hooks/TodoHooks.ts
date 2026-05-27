import { useDispatch as dispatchHook, useSelector as selectroHook} from "react-redux";
import type { store } from "../stores/TodoStore";
import type { reducer } from "../reducers/TodoReducer";

export type RootState = ReturnType<typeof reducer>;
export type ApiDispatch = typeof store.dispatch;

export const useDispatch = dispatchHook.withTypes<ApiDispatch>();
export const useSelector = selectroHook.withTypes<RootState>();


