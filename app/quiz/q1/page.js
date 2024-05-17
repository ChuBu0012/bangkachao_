"use client";
import Container from "@/app/components/Container";
import React, { useState } from "react";
import "animate.css";
import ChoiceBtn from "@/app/components/ChoiceBtn";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import bgS2_1 from "@/app/images/bg-s2-1.png";
import { add } from "@/lib/slices/counterScore";

const Q1 = () => {
  const router = useRouter();

  const data = {
    q: (
      <span>
        จากตึกสูง เปลี่ยนเป็นคุณอยู่กลางต้นไม้สูง <br />
        ความรู้สึกของคุณเป็นอย่างไรขณะยืนอยู่ <br /> ท่ามกลางป่า?
      </span>
    ),
    c: [
      { text: "ตื่นตระหนก", score: 1 },
      { text: "สับสน งุนงง", score: 1 },
      { text: "อยากรู้อยากเห็น", score: 1 },
      { text: "ประหม่า", score: 1 },
      { text: "กังวลแต่นิ่งเฉย", score: 1 },
      { text: "ประหลาดใจ", score: 1 },
      { text: "ตื่นเต้นดีใจ", score: 1 },
      { text: "สดชื่นอย่างบอกไม่ถูก", score: 1 },
    ],
    image: bgS2_1.src,
    py:"0px"
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
      className={`flex flex-col items-center animate__animated  animate__fadeIn   ${
        fadeOut ? "animate__fadeOut" : "animate__delay-1s"
      }`}

      bgImg={bgS2_1.src}
    >
      <p className="mt-24 text-center animate__animated animate__fadeIn animate__delay-1s h-[72px] flex flex-col justify-center">
        {data?.q}
      </p>
      <div className="animate__animated animate__fadeIn animate__delay-5s flex flex-col w-72 gap-4 mt-[52px] font-medium ">
        {Array.isArray(data.c) &&
          data.c.map(({ text }, i) => (
            <ChoiceBtn
              key={i}
              choice={text}
              isSelected={selected === i}
              onClick={() => handleClick(i, "/story/s2")}
            />
          ))}
      </div>
    </Container>
  );
};

export default Q1;
