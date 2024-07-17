import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cryptos: [],
  selectedCrypto: null,
};

const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    setCryptos: (state, action) => {
      state.cryptos = action.payload;
    },
    setSelectedCrypto: (state, action) => {
      state.selectedCrypto = action.payload;
    },
  },
});

export const { setCryptos, setSelectedCrypto } = cryptoSlice.actions;

export default cryptoSlice.reducer;
