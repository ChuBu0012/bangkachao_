"use client";
import Container from "@/app/components/Container";
import React, { useEffect, useState } from "react";
import "animate.css";
import ChoiceBtn from "@/app/components/ChoiceBtn";
import { useDispatch } from "react-redux";
import { add } from "@/lib/slices/counterScore";

import { useRouter } from "next/navigation";
import Image from "next/image";
import a1 from "@/app/images/a-1.png";
import a2 from "@/app/images/a-2.png";
import a3 from "@/app/images/a-3.png";
import a4 from "@/app/images/a-4.png";
import a5 from "@/app/images/a-5.png";
import a6 from "@/app/images/a-6.png";
import a7 from "@/app/images/a-7.png";
import a8 from "@/app/images/a-8.png";
import { playSound } from "@/lib/slices/soundEffect";

const Q11 = () => {
  const router = useRouter();

  const data = {
    q: (
      <span>
        คุณพบว่าเวลาล่วงเลยไปจนใกล้ค่ำ <br />{" "}
        ขณะนี้คุณยืนอยู่หน้าร้านของฝากแห่งหนึ่ง <br />
        <br />
        คุณคิดว่าอยากได้อะไร <br /> ติดไม้ติดมือกลับไปด้วย?
      </span>
    ),
    //
    c: [
      {
        text: (
          <span>
            เสื้อหรือชุดผ้ามัดย้อม <br /> สีสดใส
          </span>
        ),
        score: 1,
        image: a1,
      },
      { text: "แก้วสกรีนลายสุดเท่", score: 1, image: a2 },
      { text: "หมวกสวยๆซักใบ", score: 1, image: a3 },
      { text: "กาแฟคั่วบดอย่างดี", score: 1, image: a4 },
      {
        text: (
          <span>
            เครื่องประดับ <br /> ที่ระยิบระยับ
          </span>
        ),
        score: 1,
        image: a5,
      },
      {
        text: (
          <span>
            เสื้อพิมพ์ลาย <br /> เอาไปใส่ได้เป็นแก๊งค์
          </span>
        ),
        score: 1,
        image: a6,
      },
      { text: "โปสการ์ดสวยๆซักใบ", score: 1, image: a7 },
      { text: "ถุงผ้าลายน่ารักๆ", score: 1, image: a8 },
    ],
  };
  const dispatch = useDispatch();

  const [selected, setSelected] = useState(0);
  const [fadeOut, setfadeOut] = useState(false);
  const handleClick = (index, href) => {
    setSelected(index);
  };

  const next = () => {
    setfadeOut(true);
    dispatch(add(selected));
    setTimeout(() => {
      router.push("/quiz/q12");
    }, 1000);
  };

  useEffect(() => {
    dispatch(playSound({soundId:"se5_1"}))
  }, []);

  return (
    <Container
      className={`flex flex-col items-center animate__animated ${
        fadeOut ? "animate__fadeOut" : ""
      }`}
    >
      <p className="mt-12 text-center animate__animated animate__fadeIn animate__delay-1s h-auto flex flex-col justify-center">
        {data?.q}
      </p>
      {/*  */}
      <div className=" pt-11 animate__animated  animate__fadeIn animate__delay-2s">
        <Image alt="" src={data?.c[selected]?.image} className="w-full h-36" />
      </div>

      <div className="flex gap-5">
        <div className="animate__animated  animate__fadeIn animate__delay-2s flex flex-col w-36 gap-4 mt-[52px] font-medium ">
          {Array.isArray(data.c) &&
            data.c.map(
              ({ text }, i) =>
                i < 4 && (
                  <ChoiceBtn
                    className={"text-sm"}
                    key={i + i}
                    choice={text}
                    isSelected={selected === i + i}
                    onClick={() => handleClick(i + i, "/quiz/q12")}
                    hl={true}
                  />
                )
            )}
        </div>
        <div className="animate__animated  animate__fadeIn animate__delay-2s flex flex-col w-36 gap-4 mt-[52px] font-medium ">
          {Array.isArray(data.c) &&
            data.c.map(
              ({ text }, i) =>
                i >= 4 && (
                  <ChoiceBtn
                    className={"text-sm"}
                    key={i - (7 - i)}
                    choice={text}
                    isSelected={selected === i - (7 - i)}
                    onClick={() => handleClick(i - (7 - i), "/quiz/q12")}
                    hl={true}
                  />
                )
            )}
        </div>
      </div>
      <button
        onClick={next}
        className="mt-9 bg-black py-2 px-4 text-white rounded-lg animate__animated  animate__fadeIn animate__delay-2s"
      >
        เดินทางต่อ
      </button>
    </Container>
  );
};

export default Q11;
