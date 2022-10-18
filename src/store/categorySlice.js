import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategory = createAsyncThunk("fetch/category ", async () => {
  const response = await axios.get(`https://dm-mobile-back.point-dev.net/api/v1/category`);
  console.log("rrrrrrrrrr", response.data);
  return response.data;
});

export const categorySlice = createSlice({
  name: "category",
  initialState: {
    category: [],
    loading: false,
    error: false,
    success: false,
  },
  reducers: {},
  extraReducers: {
    [fetchCategory.pending]: (state) => {
      state.loading = true;
    },
    [fetchCategory.fulfilled]: (state, action) => {
      state.category = action.payload.data;
      state.loading = false;
    },
    [fetchCategory.rejected]: (state) => {
      state.error = true;
      state.loading = false;
    },
   
  },
});

export const {} = categorySlice.actions;

export default categorySlice.reducer;
