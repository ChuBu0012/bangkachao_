"use client";
import Container from "@/app/components/Container";
import React, { useState } from "react";
import "animate.css";
import ChoiceBtn from "@/app/components/ChoiceBtn";
import "../../components/changeBg.css";
import { useDispatch } from "react-redux";
import { add } from "@/lib/slices/counterScore";

import { useRouter } from "next/navigation";
import { pauseSound } from "@/lib/slices/soundEffect";
const Q6 = () => {
  const router = useRouter();

  const data = {
    q: (
      <span>
        คนที่คุณได้เจอชวนคุณไปเดินเล่น <br /> ไปตามเส้นทาง จนคุณไปพบกับ...
      </span>
    ),
    c: [
      { text: "สวนที่เต็มไปด้วยดอกไม้หลากหลายสี", score: 1 },
      { text: "วิวพระอาทิตย์ตกริมแม่น้ำ", score: 1 },
      { text: "เส้นทางเดินที่ขนาบด้วยป่าสน", score: 1 },
      { text: "สะพานที่ทอดยาวสวยงามสุดลูกหูลูกตา", score: 1 },
      { text: "บ่อน้ำสำหรับให้อาหารปลา", score: 1 },
      { text: "เรือปั่นริมทะเลสาบ", score: 1 },
      { text: "หอชมวิวที่เห็นนกนาๆชนิด", score: 1 },
      { text: "พิพิธภัณฑ์ที่มีของหาชมยาก", score: 1 },
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
      dispatch(pauseSound({ soundId: "se3_1" }));
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
      <div className="animate__animated animate__fadeIn animate__delay-2s flex flex-col w-[19rem] gap-4 mt-[52px] font-medium ">
        {Array.isArray(data.c) &&
          data.c.map(({ text }, i) => (
            <ChoiceBtn
              className={`${i == 3 && "text-sm"}`}
              key={i}
              choice={text}
              isSelected={selected === i}
              onClick={() => handleClick(i, "/story/s3")}
            />
          ))}
      </div>
    </Container>
  );
};

export default Q6;
