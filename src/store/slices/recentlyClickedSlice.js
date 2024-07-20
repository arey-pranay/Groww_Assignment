import { createSlice } from "@reduxjs/toolkit";

const recentlyClickedSlice = createSlice({
  name: "recentlyClicked",
  initialState: [],
  reducers: {
    addRecentlyClickedItem: (state, action) => {
      const newItem = action.payload;

      const filteredState = state.filter((item) => item.id !== newItem.id);
      const newState = [newItem, ...filteredState.slice(0, 4)];
      return newState;
    },
  },
});

export const { addRecentlyClickedItem } = recentlyClickedSlice.actions;
export default recentlyClickedSlice.reducer;
