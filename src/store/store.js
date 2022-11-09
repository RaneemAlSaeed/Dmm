import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./categorySlice";
import  expanded from "./expanded";
// import  Favorite  from "./FavoriteSlice";
import favoritesSlice from "./favoritesSlice";
import loginSlice from "./loginSlice";
import productSlice from "./productSlice";
import productsSlice  from "./productsSlice";
import registerSlice from "./registerSlice";
import sideBar  from "./sideBarSlice";
import  verifySlice  from "./verifySlice";
// import coursesSlice from './coursesSlice'
// import librarySlice from './librarySlice'
// import servicesSlice from './servicesSlice'
// import usersSlice from './usersSlice'

export const store = configureStore({
  reducer: {
    sideBarState:sideBar,
    expanded:expanded,
    // favoriteState:Favorite,
    category:categorySlice,
    register:registerSlice,
    verify:verifySlice,
    login:loginSlice,
    products:productsSlice,
    product:productSlice,
    favorites:favoritesSlice,
    // users:usersSlice,
    // courses:coursesSlice,
    // library:librarySlice,
    // services:servicesSlice
  },
});
