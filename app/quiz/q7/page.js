"use client";
import Container from "@/app/components/Container";
import React, { useState } from "react";
import "animate.css";
import ChoiceBtn from "@/app/components/ChoiceBtn";
import { useDispatch } from "react-redux";
import { add } from "@/lib/slices/counterScore";

import { useRouter } from "next/navigation";
const Q7 = () => {
  const router = useRouter();

  const data = {
    q: (
      <span>
        เพื่อนของคุณตกใจเป็นอย่างมาก คุณจึง...
      </span>
    ),
    c: [
      { text: "ร้องไห้เพราะตกใจเหมือนกัน", score: 1 },
      { text: "ตกใจและรีบเสิร์ชหาสาเหตุ", score: 1 },
      { text: "ทำเป็นไม่มีอะไรเกิดขึ้น", score: 1 },
      { text: "ไม่พูดอะไร ปาดเลือดกําเดาออกและคุยต่อ", score: 1 },
      { text: "บอกให้เพื่อนใจเย็นๆนี่มันเป็นเรื่องปกติ", score: 1 },
      { text: "แกล้งหัวเราะ และบอกว่าไม่เป็นไร", score: 1 },
      { text: "บอกถึงอาการที่เกิดขึ้นอย่างละเอียด", score: 1 },
      { text: "ชวนคุยถึงสาเหตุที่เลือดกำเดาไหล", score: 1 },
    ],
  };
  const dispatch = useDispatch();

  const [selected, setSelected] = useState(null);
  const [fadeOut, setfadeOut] = useState(false);
  const handleClick = (index, href) => {
    setSelected(index);
    dispatch(add(index))
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
      <div className="animate__animated animate__fadeIn animate__delay-2s flex flex-col w-72 gap-4 mt-[52px] font-medium ">
        {Array.isArray(data.c) &&
          data.c.map(({ text }, i) => (
            <ChoiceBtn
              key={i}
              choice={text}
              isSelected={selected === i}
              onClick={() => handleClick(i, "/quiz/q8")}
            />
          ))}
      </div>
    </Container>
  );
};

export default Q7;
