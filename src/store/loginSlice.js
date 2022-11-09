import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../utils/network";

export const postLogin = createAsyncThunk("post/login ", async (data) => {
  const response = await axiosInstance.post(`/api/login`,data);
  console.log("poostlogin", response.data);
  return response.data;
});

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    loginData: {},
    loading: false,
    error: false,
    success: false,
  },
  reducers: {},
  extraReducers: {
    [postLogin.pending]: (state) => {
      state.loading = true;
    },
    [postLogin.fulfilled]: (state, action) => {
      state.loginData = action.payload;
    //   state.loading = false;
      state.loading = false;
      state.success = true;
    },
    [postLogin.rejected]: (state) => {
      state.error = true;
      state.loading = false;
    },
   
  },
});

export const {} = loginSlice.actions;

export default loginSlice.reducer;
