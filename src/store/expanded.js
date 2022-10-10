import { createSlice } from "@reduxjs/toolkit";

export const expanded = createSlice({
  name: "expanded",
  initialState: {
    expandedState: false,
  },
  reducers: {
    // openexpanded: (state) => {
    //   state.expandedState = true;
    // },
    closeexpanded: (state) => {
      state.expandedState = false;
    },
    handleExpanded: (state) => {
      state.expandedState = !state.expandedState;
    },
  },
});

export const { openexpanded, closeexpanded, handleExpanded } = expanded.actions;

export default expanded.reducer;
