"use client";
import Container from "@/app/components/Container";
import React, { useState } from "react";
import "animate.css";
import ChoiceBtn from "@/app/components/ChoiceBtn";
import "../../components/changeBg.css";
import { useDispatch } from "react-redux";
import { addTwo } from "@/lib/slices/counterScore";
import { useRouter } from "next/navigation";
const Q9 = () => {
  const router = useRouter();

  const data = {
    q: (
      <span>
        แล้วคุณคิดว่า <br />
        คุณให้เวลากับตัวเองมากพอหรือยัง?
      </span>
    ),
    c: [
      { text: "ไม่พออยากได้เวลาเพิ่ม", score: 1 },
      { text: "ฉันชอบให้เวลากับคนอื่นมากกว่า", score: 1 },
      { text: "เหมือนจะพอแต่ไม่แน่ใจ", score: 1 },
      { text: "สำหรับฉันพอดีแล้ว", score: 1 },
    ],
  };
  const dispatch = useDispatch();

  const [selected, setSelected] = useState(null);
  const [fadeOut, setfadeOut] = useState(false);

  const handleClick = (index, href) => {
    setSelected(index);
    const index_ = index * 2;
    dispatch(addTwo({ one: index_, two: index_ + 1 }));
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
              onClick={() => handleClick(i, "/story/s5")}
            />
          ))}
      </div>
    </Container>
  );
};

export default Q9;
