"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import "animate.css";
import { useRouter } from "next/navigation";

const StoryComponent = ({ data, href = "/" }) => {
  const [fadeOut, setfadeOut] = useState(false);
  const [fadeIn, setfadeIn] = useState(false);
  const [cursor, setcursor] = useState(0);
  const router = useRouter();
  const changeStory = () => {
    
    setfadeOut(true);

    
    setTimeout(() => {
      if(cursor == data.length - 1){
        router.push(href);
      }
      if (cursor < data.length) {
        setcursor((old) => old + 1);
      }
      setfadeIn(true);
      setTimeout(() => {
        setfadeOut(false);
      }, 800);
    }, 800);
  };

  useEffect(() => {
    setfadeIn(true);
    setTimeout(() => {
      setfadeIn(false);
    }, 800);
  });
  return (
    <div
      className={`flex flex-col items-center relative animate__animated ${
        fadeOut ? "animate__fadeOut" : ""
      } ${fadeIn ? "animate__fadeIn" : ""}`}
    >
      <button
        onClick={changeStory}
        className="bg-red-100 absolute w-full h-full opacity-0"
      ></button>
      <p className="mt-[214px] text-center">{data[cursor]?.text}</p>
      <Image alt="" src={data[cursor]?.image} className="w-full mt-10" />
    </div>
  );
};

export default StoryComponent;
