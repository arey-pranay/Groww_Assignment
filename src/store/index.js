import { configureStore } from "@reduxjs/toolkit";
import cryptoReducer from "./slices/cryptoSlice";
import watchlistReducer from "./slices/watchlistSlice";
import recentlyViewedReducer from "./slices/recentlyViewedSlice";

export const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
    watchlist: watchlistReducer,
    recentlyViewed: recentlyViewedReducer,
  },
});
