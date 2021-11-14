import { configureStore } from "@reduxjs/toolkit";
// import reducer from "./profile/reducer";
import profileSlice  from "./profile/profileSlice"


export default configureStore( {
  reducer: {
    profileReducer: profileSlice
  } } );