import { changeName, toggleShowName } from "./actions";
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  showName: false,
  name: "Default"
};

export default createReducer( initialState, {
  [ toggleShowName.type ]: (initialState) => {
    initialState.showName = !initialState.showName;
  },
  // [changeName.type]: ()=>{

  // }
} );