"use client";
import Container from "@/app/components/Container";
import React, { useState } from "react";
import "animate.css";
import ChoiceBtn from "@/app/components/ChoiceBtn";
import { useDispatch, useSelector } from "react-redux";
import { push } from "@/lib/slices/counterScore";
import { useRouter } from "next/navigation";
import bgS2_1 from "@/app/images/bg-s2-1.png";

const Q1 = () => {
  const router = useRouter();

  const data = {
    q: (
      <span>
        ตอนนี้ถึงเวลาที่ต้องกลับเมืองใหญ่แล้ว <br/> ก่อนจะจากกันไปคุณคิดว่า...
      </span>
    ),
    c: [
      { text: "ถ้าฉันอยากพักผ่อนค่อยกลับมาแล้วกัน", score: 1 },
      { text: "ไว้ฉันจะแนะนำให้เพื่อนมานะ", score: 1 },
      { text: "แล้วเจอกันใหม่ถ้าฉันผ่านมา", score: 1 },
      { text: "ไว้จะพาแก๊งเพื่อนมา คงจะสนุกไม่น้อย", score: 1 },
      { text: "ขอบคุณสําหรับการพักผ่อนในวันนี้", score: 1 },
      { text: "ถ้ามีเวลาว่างจะกลับมาอีกนะ", score: 1 },
      { text: "ฉันจะกลับมาเยี่ยมบ้านหลังนี้อีกแน่นอน", score: 1 },
      { text: "ยังมีอะไรที่ไม่รู้อีกมาก ฉันจะกลับมาหาคำตอบ", score: 1 },
    ],
    image: bgS2_1.src,
    py:"0px"
  };
  const dispatch = useDispatch();

  const [selected, setSelected] = useState(null);
  const [fadeOut, setfadeOut] = useState(false);
  const handleClick = (index, href) => {
    setSelected(index);
    dispatch(push(data.c[index].score));

    setTimeout(() => {
      setfadeOut(true);
    }, 500);
    setTimeout(() => {
      router.push(href);
    }, 1000);
  };

  return (
    <Container
      className={`flex flex-col items-center animate__animated  animate__fadeIn   ${
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
              onClick={() => handleClick(i, "/story/s2")}
              className={`${i == 7 ? "text-sm" : ""} `}
            />
          ))}
      </div>
    </Container>
  );
};

export default Q1;
