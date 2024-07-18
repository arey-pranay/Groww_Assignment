import { createSlice } from "@reduxjs/toolkit";

const recentlyViewedSlice = createSlice({
  name: "recentlyViewed",
  initialState: [],
  reducers: {
    addRecentlyViewed: (state, action) => {
      const existingIndex = state.findIndex(
        (crypto) => crypto.id === action.payload.id
      );
      if (existingIndex === -1) {
        state.push(action.payload);
      } else {
        state.splice(existingIndex, 1);
        state.push(action.payload);
      }
    },
  },
});

export const { addRecentlyViewed } = recentlyViewedSlice.actions;
export default recentlyViewedSlice.reducer;
