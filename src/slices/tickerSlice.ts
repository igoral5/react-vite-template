import { createSlice } from "@reduxjs/toolkit";

type TickerStore = {
  ticker: number;
};

const initialState: TickerStore = {
  ticker: 0,
};

export const tickerSlice = createSlice({
  name: "tikerSlice",
  initialState,
  reducers: {
    updateTicker: (state) => {
      state.ticker = state.ticker + 1;
    },
  },
  selectors: {
    getTicker: (state) => state.ticker,
  },
});

export const { updateTicker } = tickerSlice.actions;

export const { getTicker } = tickerSlice.selectors;
