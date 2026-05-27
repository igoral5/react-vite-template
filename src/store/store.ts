import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../reducers/rootReducer";
import { tickerMiddleware } from "../middleware/tickerMiddleware";

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(tickerMiddleware(500));
    }
});

export type ApiDispath = typeof store.dispatch;