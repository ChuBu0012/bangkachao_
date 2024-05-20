"use client";
import Container from "@/app/components/Container";
import React, { useEffect, useState } from "react";
import "animate.css";
import ChoiceBtn from "@/app/components/ChoiceBtn";
import { useDispatch } from "react-redux";
import { add } from "@/lib/slices/counterScore";
import { useRouter } from "next/navigation";
import bgS2_1 from "@/app/images/bg-s2-1.png";
import { pauseSound, playSound } from "@/lib/slices/soundEffect";

const Q2 = () => {
  const router = useRouter();

  const data = {
    q: (
      <span>
        ทันใดนั้นเผลอสะดุดบางอย่างสิ่งนั้นคืออะไร
      </span>
    ),
    c: [
      { text: "เท้าตัวเอง", score: 1 },
      { text: "ก้อนหิน ก้อนกรวด", score: 1 },
      { text: "กล่องข้าวที่คนกินทิ้งไว้", score: 1 },
      { text: "หลุมดิน", score: 1 },
      { text: "ตอไม้ขนาดใหญ่", score: 1 },
      { text: "กบ", score: 1 },
      { text: "สายไฟ", score: 1 },
      { text: "เถาวัลย์ผักบุ้ง", score: 1 },
    ],
  };
  const dispatch = useDispatch();

  const [selected, setSelected] = useState(null);
  const [fadeOut, setfadeOut] = useState(false);
  const handleClick = (index, href) => {
    setSelected(index)
    dispatch(add(index))
    setTimeout(() => {
        setfadeOut(true);
      }, 500);
      setTimeout(() => {
        dispatch(pauseSound({soundId:"se2_1"}))
        dispatch(pauseSound({soundId:"se2_2"}))
        dispatch(pauseSound({soundId:"se2_3"}))
        router.push(href);
      }, 1000);
  };
  useEffect(()=>{
    dispatch(playSound({soundId:"se2_3"}))
  },[])
  return (
    <Container
      className={`flex flex-col items-center animate__animated animate__fadeIn ${
        fadeOut ? "animate__fadeOut" : "animate__delay-1s"
      }`}
      bgImg={bgS2_1.src}
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
              onClick={() => handleClick(i, "/quiz/q3")}
            />
          ))}
      </div>
    </Container>
  );
};

export default Q2;
