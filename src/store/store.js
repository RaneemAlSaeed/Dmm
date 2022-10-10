import { configureStore } from "@reduxjs/toolkit";
import  expanded from "./expanded";
import  Favorite  from "./FavoriteSlice";
import sideBar  from "./sideBarSlice";
// import coursesSlice from './coursesSlice'
// import librarySlice from './librarySlice'
// import servicesSlice from './servicesSlice'
// import usersSlice from './usersSlice'

export const store = configureStore({
  reducer: {
    sideBarState:sideBar,
    expanded:expanded,
    favoriteState:Favorite
    // users:usersSlice,
    // courses:coursesSlice,
    // library:librarySlice,
    // services:servicesSlice
  },
});
