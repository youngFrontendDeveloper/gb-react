import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice( {
  name: "profileReducer",
  initialState: {
    userName: "Default",
    showName: false
  },
  reducers: {
    toggleShowName: (state) => {
      state.showName = !state.showName;
    }
  }
} );

export const { toggleShowName } = profileSlice.actions;
export const selectShowName = state => state.profileReducer.showName;
export const selectName = state => state.profileReducer.userName;

export default profileSlice.reducer;