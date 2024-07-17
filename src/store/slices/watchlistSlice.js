import { createSlice } from "@reduxjs/toolkit";

const watchlistSlice = createSlice({
  name: "watchlist",
  initialState: [],
  reducers: {
    addToWatchlist: (state, action) => {
      state.push(action.payload);
    },
    removeFromWatchlist: (state, action) => {
      return state.filter((coin) => coin.id !== action.payload.id);
    },
  },
});

export const { addToWatchlist, removeFromWatchlist } = watchlistSlice.actions;
export default watchlistSlice.reducer;
