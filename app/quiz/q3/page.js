"use client";
import Container from "@/app/components/Container";
import React, { useState } from "react";
import "animate.css";
import ChoiceBtn from "@/app/components/ChoiceBtn";
import { useDispatch, useSelector } from "react-redux";
import { push } from "@/lib/slices/counterScore";
import { useRouter } from "next/navigation";
import Image from "next/image";
const Q3 = () => {
  const router = useRouter();

  const data = {
    q: (
      <span>
        คุณไปเจอจักรยานคันหนึ่ง <br /> พร้อมป้ายเขียนกำกับไว้ว่า For you <br />{" "}
        จักรยานคันนั้นเป็นแบบไหน?
      </span>
    ),
    // 
    c: [
      { text: "จักรยานญี่ปุ่น", score: 1 },
      { text: "จักรยานเสือภูเขา", score: 1 },
      { text: "จักรยานทั่วไป", score: 1 },
      { text: "จักรยานไฟฟ้า", score: 1 },
      { text: "จักรยานมีตระกร้าหน้า", score: 1 },
      { text: "จักรยานฟิกเกียร์", score: 1 },
      { text: "จักรยานสองตอน", score: 1 },
      { text: "จักรยานถีบสามล้อ", score: 1 },
    ],
  };
  const dispatch = useDispatch();

  const [selected, setSelected] = useState(null);
  const [fadeOut, setfadeOut] = useState(false);
  const handleClick = (index, href) => {
    setSelected(index);
    // dispatch(push(data.c[index].score));
    // setfadeOut(true);
    // setTimeout(() => {
    //   setfadeOut(true);
    // }, 500);
    // setTimeout(() => {
    //   router.push(href);
    // }, 1000);
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
{/*  */}
      <Image src={""} className="my-11" />

      <div className="flex gap-5">
        <div className="animate__animated  animate__fadeIn animate__delay-2s flex flex-col w-36 gap-4 mt-[52px] font-medium ">
          {Array.isArray(data.c) &&
            data.c.map(
              ({ text }, i) =>
                i < 4 && (
                  <ChoiceBtn
                    key={i}
                    choice={text}
                    isSelected={selected === i}
                    onClick={() => handleClick(i, "/quiz/q4")}
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
                    className={`${i == 4 ? "text-sm" : ""} `}
                    key={i}
                    choice={text}
                    isSelected={selected === i}
                    onClick={() => handleClick(i, "/quiz/q4")}
                  />
                )
            )}
        </div>
      </div>
    </Container>
  );
};

export default Q3;
