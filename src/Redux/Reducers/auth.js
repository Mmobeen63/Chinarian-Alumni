import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {},
};

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    createUserData: (state, actions) => {
      state.userInfo = actions.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { createUserData } = auth.actions;

export default auth.reducer;
