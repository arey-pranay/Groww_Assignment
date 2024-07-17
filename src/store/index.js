import { configureStore } from "@reduxjs/toolkit";
import cryptoReducer from "./slices/cryptoSlice";

export const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
  },
});
