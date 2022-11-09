import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../utils/network";

export const getProduct = createAsyncThunk("get/product ", async (id) => {
  const response = await axiosInstance.get(`/api/v1/product/${id}`, id);
  console.log("getProduct", response);
  return response.data;
});

export const productSlice = createSlice({
  name: "product",
  initialState: {
    product: {},
    loading: false,
    error: false,
    success: false,
  },
  reducers: {},
  extraReducers: {
    [getProduct.pending]: (state) => {
      state.loading = true;
      state.product={}
    },
    [getProduct.fulfilled]: (state, action) => {
      state.product = action.payload.product;
      //   state.loading = false;
      state.loading = false;
      state.success = true;
    },
    [getProduct.rejected]: (state) => {
      state.error = true;
      state.loading = false;
    },
  },
});

export const {} = productSlice.actions;

export default productSlice.reducer;
