import { createSlice } from "@reduxjs/toolkit";

export const Favorite = createSlice({
  name: "Favorite",
  initialState: {
    FavoritesArray: [],

  },
  reducers: {
    addToFavorite: (state, action) => {
      state.FavoritesArray = [
        ...state.FavoritesArray,
        action.payload.trueObject,
      ];
    },
    
    removeFromFavorite: (state, action) => {
      state.FavoritesArray = state.FavoritesArray.filter((item) => {
        return item.id != action.payload.trueObject.id;
      });
    },
  },
});

export const { addToFavorite, removeFromFavorite} =
  Favorite.actions;

export default Favorite.reducer;
