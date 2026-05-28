import type { Middleware } from "redux";
import type { RootState } from "../reducers/rootReducer";
import { startTicker, stopTiker } from "../actions/tikerActions";
import { updateTicker } from "../slices/tickerSlice";

export const tickerMiddleware = (
  period: number = 3000,
): Middleware<unknown, RootState> => {
  return (store) => {
    let timer = 0;
    return (next) => (action) => {
      if (startTicker.match(action)) {
        timer = setInterval(() => store.dispatch(updateTicker()), period);
      } else if (stopTiker.match(action)) {
        clearInterval(timer);
      } else {
        next(action);
      }
    };
  };
};
