"use client";
import Container from "@/app/components/Container";
import React, { useState } from "react";
import "animate.css";
import ChoiceBtn from "@/app/components/ChoiceBtn";
import { useDispatch, useSelector } from "react-redux";
import { push } from "@/lib/slices/counterScore";
import { useRouter } from "next/navigation";
import Image from "next/image";
import b1 from "@/app/images/b-1.png";
import b2 from "@/app/images/b-2.png";
import b3 from "@/app/images/b-3.png";
import b5 from "@/app/images/b-5.png";
import b6 from "@/app/images/b-6.png";
import b7 from "@/app/images/b-7.png";

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
      { text: "จักรยานญี่ปุ่น", score: 1, image: b1 },
      { text: "จักรยานเสือภูเขา", score: 1, image: b2 },
      { text: "จักรยานทั่วไป", score: 1, image: b3 },
      // รอรูป
      { text: "จักรยานไฟฟ้า", score: 1, image: b1 },
      { text: "จักรยานมีตระกร้าหน้า", score: 1, image: b5 },
      { text: "จักรยานฟิกเกียร์", score: 1, image: b6 },
      { text: "จักรยานสองตอน", score: 1, image: b7 },
      // รอรูป
      { text: "จักรยานถีบสามล้อ", score: 1, image: b1 },
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
    setTimeout(()=>{
      router.push("/quiz/q12")
    },1000)
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
      <button onClick={next} className="mt-9 bg-black py-2 px-4 text-white rounded-lg animate__animated  animate__fadeIn animate__delay-2s">
        เดินทางต่อ
      </button>
    </Container>
  );
};

export default Q3;