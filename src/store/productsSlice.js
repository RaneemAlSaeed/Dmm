import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../utils/network";

export const getProducts = createAsyncThunk("get/products ", async () => {
  const response = await axiosInstance.get(`/api/v1/product`);
  console.log("getProducts", response.data.products);
  return response.data.products;
});

export const productsSlice = createSlice({
  name: "login",
  initialState: {
    products: [],
    loading: false,
    error: false,
    success: false,
  },
  reducers: {},
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.loading = true;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
    //   state.loading = false;
      state.loading = false;
      state.success = true;
    },
    [getProducts.rejected]: (state) => {
      state.error = true;
      
      state.loading = false;
    },
   
  },
});

export const {} = productsSlice.actions;

export default productsSlice.reducer;
