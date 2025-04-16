import { createSlice } from "@reduxjs/toolkit";

const UsersSlice = createSlice({
  name: "UserSlice",
  initialState: {
    list: [],
  },
  reducers: {
    getUsers() {},
    saveUsers(state, action) {
      state.list = action.payload;
    },
    getPostListByUserId() {},
  },
});
export default UsersSlice;
export const { getUsers, saveUsers, getPostListByUserId } = UsersSlice.actions;
