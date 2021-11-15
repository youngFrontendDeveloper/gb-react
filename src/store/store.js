import { configureStore } from "@reduxjs/toolkit";
import profileSlice  from "./profile/profileSlice"


export default configureStore( {
  reducer: {
    profileReducer: profileSlice
  }
} );