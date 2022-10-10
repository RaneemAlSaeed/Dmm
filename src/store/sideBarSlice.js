import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const sideBar = createSlice({
  name: "sideBar",
  initialState: {
    sideBarState: false,
  },
  reducers: {
    openSideBar: (state) => {
      state.sideBarState = true;
    },
    closeSideBar: (state) => {
      state.sideBarState = false;
    },
  },
});

export const { openSideBar, closeSideBar } = sideBar.actions;

export default sideBar.reducer;
