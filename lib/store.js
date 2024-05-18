import { configureStore } from "@reduxjs/toolkit";
import counter from "./slices/counterScore";
import info from "./slices/infoSlice";
import soundEffect from "./slices/soundEffect";

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counter,
      Info:info,
      soundEffect:soundEffect
    },
  });
};
