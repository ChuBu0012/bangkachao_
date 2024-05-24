"use client";
import React, { useEffect, useState } from "react";
import "animate.css";
import { useRouter } from "next/navigation";
import Head from "next/head";
const StoryComponent = ({
  data,
  href = "/",
  py = "0px",
  mt_text = "214px",
  setter = null,
}) => {
  const [fadeOut, setfadeOut] = useState(false);
  const [fadeIn, setfadeIn] = useState(false);
  const [cursor, setcursor] = useState(0);
  const router = useRouter();
  const changeStory = () => {
    setfadeOut(true);

    if (setter) {
      setter(cursor);
    }

    setTimeout(() => {
      if (cursor == data.length - 1) {
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

  document.body.style.background = "#FFFCED"
  useEffect(() => {
    setfadeIn(true);
    setTimeout(() => {
      setfadeIn(false);
    }, 800);
  }, []);
  return (
    <>
      <div
        className={` flex flex-col items-center relative animate__animated animate__fadeIn w-full h-full ${
          fadeOut ? "animate__fadeOut" : "animate__delay-1s"
        } !bg-cover`}
        style={{
          background: ` url(${data[cursor]?.image}) no-repeat`,
          backgroundPositionY: py,
        }}
      >
        <button
          onClick={changeStory}
          className=" absolute w-full h-full opacity-0"
        ></button>
        <p className={` text-center`} style={{ marginTop: mt_text }}>
          {data[cursor]?.text}
        </p>
      </div>
    </>
  );
};

export default StoryComponent;
