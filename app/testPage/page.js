"use client"
import { pauseSound, playSound } from "@/lib/slices/soundEffect";
import React from "react";
import { useDispatch } from "react-redux";
import LoadingDots from "../components/LoadingDots";

const page = () => {
  const dispatch = useDispatch();
  const playS1 = () => {
    dispatch(playSound({soundId:"se1_1"}))
  }
  const stopS1 = () => {
    dispatch(pauseSound({soundId:"se1_1"}))
  }
  return <>
    {/* <button onClick={playS1}>เล่นเพลง</button>
    <button onClick={stopS1}>หยุดเพลง</button> */}
    <LoadingDots/>
  </>;
};

export default page;
