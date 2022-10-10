import { createSlice } from "@reduxjs/toolkit";

export const Favorite = createSlice({
  name: "Favorite",
  initialState: {
    FavoritesArray: [],
  },
  reducers: {
   
    addToFavorite: (state, action) => {
      let newObj={...action.payload.obj,fav:true}
      state.FavoritesArray = [...state.FavoritesArray,newObj]
     
    },
    removeFromFavorite: (state, action) => {
      state.FavoritesArray = state.FavoritesArray.filter((item) => {
        
        return item.id != action.payload.obj.id;
      });
    },
  },
});

export const { addToFavorite, removeFromFavorite, handleFav } =
  Favorite.actions;

export default Favorite.reducer;
