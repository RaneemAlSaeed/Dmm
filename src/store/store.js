import { configureStore } from "@reduxjs/toolkit";
import sideBar  from "./sideBarSlice";
// import coursesSlice from './coursesSlice'
// import librarySlice from './librarySlice'
// import servicesSlice from './servicesSlice'
// import usersSlice from './usersSlice'

export const store = configureStore({
  reducer: {
    sideBarState:sideBar
    // users:usersSlice,
    // courses:coursesSlice,
    // library:librarySlice,
    // services:servicesSlice
  },
});
