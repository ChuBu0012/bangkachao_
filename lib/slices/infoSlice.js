import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  gender: "",
  age: 0,
};

export const infoSlice = createSlice({
  name: "infoSlice",
  initialState,
  reducers: {
    setInfo: (state, action) => {
      const { name, gender, age } = action.payload;
      state.name = name;
      state.gender = gender;
      state.age = age;
    },
    init: (state) => {
      state.value = {
        name: "",
        gender: "",
        age: 0,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setInfo, init } = infoSlice.actions;

export default infoSlice.reducer;
