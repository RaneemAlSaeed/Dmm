import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../utils/network";

export const getFavorites = createAsyncThunk("get/favorites", async () => {
  const response = await axiosInstance.get(`/api/v1/favorite`);
  console.log("getFavoritesss", response.data.favorites);
  return response.data.favorites;
});
export const postFavorites = createAsyncThunk("post/Favorites ", async (id) => {
  const response = await axiosInstance.post(`/api/v1/favorite`,id);
  console.log("poostFavorites", response.data);
  return response.data;
});
export const deleteFavorites = createAsyncThunk("delete/Favorites ", async (product_id) => {
  const response = await axiosInstance.delete(`/api/v1/favorite/${product_id}`,product_id);
  console.log("deleteFavorites", response.data);
  return response.data;
});
export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: [],
    loading: false,
    error: false,
    success: false,
  },
  reducers: {},
  extraReducers: {
    [getFavorites.pending]: (state) => {
      state.loading = true;
    },
    [getFavorites.fulfilled]: (state, action) => {
      state.favorites = action.payload;
    //   state.loading = false;
      state.loading = false;
      state.success = true;
    },
    [getFavorites.rejected]: (state) => {
      state.error = true;
      state.loading = false;
    },
   



    [postFavorites.pending]: (state) => {
      state.loading = true;
      // state.favorites=[]
    },
    [postFavorites.fulfilled]: (state, action) => {
      // state.favorites = [...state.favorites ,{...action.payload,fav:true}];
      // console.log("ss",state.favorites);
    //   state.loading = false;
    // state.favorites = action.payload;
      state.loading = false;
      state.success = true;
    },
    [postFavorites.rejected]: (state) => {
      state.error = true;
      state.loading = false;
    },


    [deleteFavorites.pending]: (state) => {
      state.loading = true;
      // state.favorites=[]
    },
    [deleteFavorites.fulfilled]: (state, action) => {
      // state.favorites = action.payload;
      // state.favorites = [...state.favorites ,action.payload];
      // console.log("ss",state.favorites);
    //   state.loading = false;
      state.loading = false;
      state.success = true;
    },
    [deleteFavorites.rejected]: (state) => {
      state.error = true;
      state.loading = false;
    },




  },
});

export const {} = favoritesSlice.actions;

export default favoritesSlice.reducer;
