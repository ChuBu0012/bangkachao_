import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [0, 0, 0, 0, 0, 0, 0, 0],
};

export const counterSlice = createSlice({
  name: "counterScore",
  initialState,
  reducers: {
    reset: (state) => {
      state.value = [0, 0, 0, 0, 0, 0, 0, 0];
    },
    add: (state, action) => {
      const index = parseInt(action.payload, 10);
      if (!isNaN(index) && index >= 0 && index < state.value.length) {
        state.value[index] += 1;
      }
    },
    addTwo: (state, action) => {
      const { one, two } = action.payload;
      if (one >= 0 && one < state.value.length) {
        state.value[one] += 1;
      }
      if (two >= 0 && two < state.value.length) {
        state.value[two] += 1;
      }
    },
  },
});

export const { reset, add, addTwo } = counterSlice.actions;

export default counterSlice.reducer;
