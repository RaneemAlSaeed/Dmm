import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../utils/network";

export const postverify = createAsyncThunk("post/verify ", async (data) => {
  const response = await axiosInstance.post(`/api/verify`,data);
  console.log("poostverify", response);
  return response.data;
});

export const verifySlice = createSlice({
  name: "verify",
  initialState: {
    verifyData: {},
    loading: false,
    error: false,
    success: false,
  },
  reducers: {},
  extraReducers: {
    [postverify.pending]: (state) => {
      state.loading = true;
    },
    [postverify.fulfilled]: (state, action) => {
      state.verifyData = action.payload;
    //   state.loading = false;
      state.loading = false;
      state.success = true;
    },
    [postverify.rejected]: (state) => {
      state.error = true;
      state.loading = false;
    },
   
  },
});

export const {} = verifySlice.actions;

export default verifySlice.reducer;
