import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice( {
  name: "profileReducer",
  initialState: {
    showName: false
  },
  reducers: {
    toggleShowName: (state) => {
      state.showName = !state.showName;
    },
    changeName: (state, action) => {
      const {userName} = action.payload;

    }
  }
} );

export const { toggleShowName, changeName } = profileSlice.actions;
export const selectShowName = state => state.profileReducer.showName;
export const selectName = state => state.profileReducer.userName;

export default profileSlice.reducer;