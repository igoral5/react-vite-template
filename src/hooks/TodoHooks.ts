import { useDispatch as dispatchHook, useSelector as selectroHook} from "react-redux";
import { todoReducer } from "../reducers/TodoReducer";
import type { store } from "../stores/TodoStore";

export type RootState = ReturnType<typeof todoReducer>;
export type ApiDispatch = typeof store.dispatch;

export const useDispatch = dispatchHook.withTypes<ApiDispatch>();
export const useSelector = selectroHook.withTypes<RootState>();


