import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const counterSlice = createSlice({
  name: "CounterScore",
  initialState,
  reducers: {
    pop: (state) => {
      if (state.value.length != 0) {
        state.value.pop();
      }
    },
    push: (state, action) => {
      if (state.value.length != 10) {
        state.value.push(action.payload);
      }
    },
    init: (state) => {
      state.value = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { pop, push, init } = counterSlice.actions;

export default counterSlice.reducer;
