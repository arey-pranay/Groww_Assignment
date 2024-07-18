import { createSlice } from "@reduxjs/toolkit";

const watchlistSlice = createSlice({
  name: "watchlist",
  initialState: [],
  reducers: {
    addToWatchlist: (state, action) => {
      const { id } = action.payload;
      const existingCoinIndex = state.findIndex((coin) => coin.id === id);
      if (existingCoinIndex === -1) {
        state.push(action.payload);
      }
    },
    removeFromWatchlist: (state, action) => {
      return state.filter((coin) => coin.id !== action.payload.id);
    },
  },
});

export const { addToWatchlist, removeFromWatchlist } = watchlistSlice.actions;
export default watchlistSlice.reducer;
