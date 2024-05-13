import { configureStore } from "@reduxjs/toolkit";
import counter from "./slices/counterScore";

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counter,
    },
  });
};
