"use client";
import Container from "@/app/components/Container";
import React, { useEffect, useState } from "react";
import "animate.css";
import ChoiceBtn from "@/app/components/ChoiceBtn";

import { useDispatch } from "react-redux";
import { add } from "@/lib/slices/counterScore";

import { useRouter } from "next/navigation";
import { playSound } from "@/lib/slices/soundEffect";
const Q5 = () => {
  const router = useRouter();

  const data = {
    q: (
      <span>
        คุณปั่นจักรยานไปตามทาง <br /> จนไปพบกับคนที่ไม่ได้เจอกันมานาน <br />{" "}
        คนนั้นคือใคร?
      </span>
    ),
    c: [
      { text: "คนรักเก่า", score: 1 },
      { text: "เพื่อนซี้สมัยมัธยม", score: 1 },
      { text: "คนที่เคยเจอแต่ยังไม่รู้จักชื่อเขา", score: 1 },
      { text: "แก๊งเพื่อนเก่า", score: 1 },
      { text: "คนในครอบครัวของคุณ", score: 1 },
      { text: "สัตว์เลี้ยงตัวโปรด", score: 1 },
      { text: "แฟนคนแรก", score: 1 },
      { text: "คนที่คุณเคารพและไว้ใจ", score: 1 },
    ],
  };
  const dispatch = useDispatch();

  const [selected, setSelected] = useState(null);
  const [fadeOut, setfadeOut] = useState(false);
  const handleClick = (index, href) => {
    setSelected(index);
    dispatch(add(index));
    setTimeout(() => {
      setfadeOut(true);
    }, 500);
    setTimeout(() => {
      router.push(href);
    }, 1000);
  };
  useEffect(() => {
    dispatch(playSound({ soundId: "se3_1" }));
  }, []);

  return (
    <Container
      className={`flex flex-col items-center animate__animated ${
        fadeOut ? "animate__fadeOut" : ""
      }`}
    >
      <p className="mt-24 text-center animate__animated animate__fadeIn animate__delay-1s h-[72px] flex flex-col justify-center">
        {data?.q}
      </p>
      <div className="animate__animated animate__fadeIn animate__delay-2s flex flex-col w-72 gap-4 mt-[52px] font-medium ">
        {Array.isArray(data.c) &&
          data.c.map(({ text }, i) => (
            <ChoiceBtn
              key={i}
              choice={text}
              isSelected={selected === i}
              onClick={() => handleClick(i, "/quiz/q6")}
            />
          ))}
      </div>
    </Container>
  );
};

export default Q5;
