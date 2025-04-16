import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
  name: "CounterSlice",
  initialState: {
    count: 0,
  },
  reducers: {
    incFun(state) {
      state.count += 1;
    },
    setCount(state, action) {
      state.count = Number(action.payload);
    },
  },
});

export default CounterSlice;
export const { incFun, setCount } = CounterSlice.actions;
