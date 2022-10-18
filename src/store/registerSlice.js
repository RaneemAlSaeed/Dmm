import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../utils/network";

export const postRegister = createAsyncThunk("post/register ", async (data) => {
  const response = await axiosInstance.post(`/api/register`,data);
  console.log("poost", response);
  return response.data;
});

export const registerSlice = createSlice({
  name: "register",
  initialState: {
    registerData: {},
    loading: false,
    error: false,
    success: false,
  },
  reducers: {},
  extraReducers: {
    [postRegister.pending]: (state) => {
      state.loading = true;
    },
    [postRegister.fulfilled]: (state, action) => {
      state.registerData = action.payload;
    //   state.loading = false;
      state.loading = false;
      state.success = true;
    },
    [postRegister.rejected]: (state) => {
      state.error = true;
      state.loading = false;
    },
   
  },
});

export const {} = registerSlice.actions;

export default registerSlice.reducer;
