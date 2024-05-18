import { createSlice } from "@reduxjs/toolkit";

const isBrowser = typeof window !== "undefined";

// Define initial state with an object containing audio objects
const initialState = {
  se1_1: isBrowser ? new Audio("/soundEffect/1-1.mp3") : null,
  se1_2: isBrowser ? new Audio("/soundEffect/1-2.mp3") : null,
  se1_3: isBrowser ? new Audio("/soundEffect/1-3.mp3") : null,
  se2_1: isBrowser ? new Audio("/soundEffect/2-1.mp3") : null,
  se2_2: isBrowser ? new Audio("/soundEffect/2-2.mp3") : null,
  se2_3: isBrowser ? new Audio("/soundEffect/2-3.mp3") : null,
  se3_1: isBrowser ? new Audio("/soundEffect/3-1.mp3") : null,
  se4_1: isBrowser ? new Audio("/soundEffect/4-1.mp3") : null,
  se4_2: isBrowser ? new Audio("/soundEffect/4-2.mp3") : null,
  se5_1: isBrowser ? new Audio("/soundEffect/5-1.mp3") : null,
};

const soundEffectSlice = createSlice({
  name: "soundEffect",
  initialState,
  reducers: {
    playSound: (state, action) => {
      const { soundId, loop = true, vol = 0.1 } = action.payload;
      const audio = state[soundId];
      if (audio) {
        audio.loop = loop;
        audio.volume = vol;
        audio.play();
      }
    },
    pauseSound: (state, action) => {
      const { soundId } = action.payload;
      const audio = state[soundId];
      if (audio) {
        audio.pause();
      }
    },
  },
});

export const { playSound, pauseSound } = soundEffectSlice.actions;

export default soundEffectSlice.reducer;
