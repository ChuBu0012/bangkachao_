"use client";
import Container from "@/app/components/Container";
import React, { useState } from "react";
import "animate.css";
import ChoiceBtn from "@/app/components/ChoiceBtn";

import { useDispatch } from "react-redux";
import { addTwo } from "@/lib/slices/counterScore";
import { useRouter } from "next/navigation";
const Q9 = () => {
  const router = useRouter();

  const data = {
    q: (
      <span>
        เป็นไงบ้าง <br />
        ลองคิดดูซิคุณใช้เวลากับตัวเองครั้งล่าสุด <br />
        เมื่อไหร่?
      </span>
    ),
    c: [
      { text: "เป็นประจำ", score: 1 },
      { text: "เป็นบางครั้ง", score: 1 },
      { text: "ทุกครั้งถ้าว่าง", score: 1 },
      { text: "เฉพาะโอกาสพิเศษ", score: 1 },
    ],
  };
  const dispatch = useDispatch();

  const [selected, setSelected] = useState(null);
  const [fadeOut, setfadeOut] = useState(false);
  const handleClick = (index, href) => {
    setSelected(index);
    // const index_ = index*2
    // dispatch(addTwo({ one: index_ , two: index_ + 1 }));
    setTimeout(() => {
      setfadeOut(true);
    }, 500);
    setTimeout(() => {
      router.push(href);
    }, 1000);
  };

  return (
    <Container
      className={`flex flex-col items-center animate__animated ${
        fadeOut ? "animate__fadeOut" : ""
      }`}
    >
      <p className="mt-44 text-center animate__animated animate__fadeIn animate__delay-1s h-[72px] flex flex-col justify-center">
        {data?.q}
      </p>
      <div className="animate__animated animate__fadeIn animate__delay-2s flex flex-col w-72 gap-4 mt-[152px] font-medium ">
        {Array.isArray(data.c) &&
          data.c.map(({ text }, i) => (
            <ChoiceBtn
              key={i}
              choice={text}
              isSelected={selected === i}
              onClick={() => handleClick(i, "/quiz/q10")}
            />
          ))}
      </div>
    </Container>
  );
};

export default Q9;
