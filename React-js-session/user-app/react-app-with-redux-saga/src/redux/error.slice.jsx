import { createSlice } from "@reduxjs/toolkit";

const ErrorSlice = createSlice({
  name: "ErrorSlice",
  initialState: {
    userError: null,
  },
  reducers: {
    setUserError(state, action) {
      state.userError = action.payload;
    },
    clearError(state) {
      state.userError = null;
    },
  },
});

export default ErrorSlice;
export const { setUserError, clearError } = ErrorSlice.actions;
