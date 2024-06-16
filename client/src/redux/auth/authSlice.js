import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userCredentials: {},
  },
  reducers: {
    addUser: (state, action) => {
      state.userCredentials = action.payload;
    },
  },
});

export const { addUser } = authSlice.actions;

export default authSlice.reducer;
