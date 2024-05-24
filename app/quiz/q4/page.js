"use client";
import Container from "@/app/components/Container";
import React, { useState } from "react";
import "animate.css";
import ChoiceBtn from "@/app/components/ChoiceBtn";

import { useDispatch } from "react-redux";
import { add } from "@/lib/slices/counterScore";

import { useRouter } from "next/navigation";
const Q4 = () => {
  const router = useRouter();

  const data = {
    q: (
      <span>
        คุณจะทำอย่างไร <br /> กับจักรยานคันนี้ ?
      </span>
    ),
    c: [
      { text: "ยืนงงกลางดงป่า", score: 1 },
      { text: "รีบขึ้นไปจองเป็นเจ้าของ", score: 1 },
      { text: "ปั่นไปนอกเส้นทาง", score: 1 },
      { text: "ปั่นด้วยความเร็วแรงและมั่นใจ", score: 1 },
      { text: "เดินจูงไปก่อน", score: 1 },
      { text: "ค่อยๆปั่นไปไม่รีบร้อน", score: 1 },
      { text: "ปั่นอย่างคลองแคล่วเหมือนชำนาญเส้นทาง", score: 1 },
      { text: "ปั่นไปเรื่อยๆพร้อมชมวิวข้างทาง", score: 1 },
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

  return (
    <Container
      className={`flex flex-col items-center animate__animated ${
        fadeOut ? "animate__fadeOut" : ""
      }`}
    >
      <p className="mt-24 text-center animate__animated animate__fadeIn animate__delay-1s h-[72px] flex flex-col justify-center">
        {data?.q}
      </p>
      <div className="animate__animated animate__fadeIn animate__delay-2s flex flex-col w-[19rem] gap-4 mt-[52px] font-medium whitespace-nowrap">
        {Array.isArray(data.c) &&
          data.c.map(({ text }, i) => (
            <ChoiceBtn
              className={`${i == 6 && "text-sm"}`}
              key={i}
              choice={text}
              isSelected={selected === i}
              onClick={() => handleClick(i, "/quiz/q5")}
            />
          ))}
      </div>
    </Container>
  );
};

export default Q4;
