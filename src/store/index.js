import { configureStore } from "@reduxjs/toolkit";
import cryptoReducer from "./slices/cryptoSlice";
import watchlistReducer from "./slices/watchlistSlice";

export const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
    watchlist: watchlistReducer,
  },
});
