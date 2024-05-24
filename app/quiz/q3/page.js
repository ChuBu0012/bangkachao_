"use client";
import Container from "@/app/components/Container";
import React, { useState } from "react";
import "animate.css";
import ChoiceBtn from "@/app/components/ChoiceBtn";

import { useDispatch } from "react-redux";
import { add } from "@/lib/slices/counterScore";

import { useRouter } from "next/navigation";
import Image from "next/image";
import b1 from "@/app/images/b-1.png";
import b2 from "@/app/images/b-2.png";
import b3 from "@/app/images/b-3.png";
import b4 from "@/app/images/b-4.png";
import b5 from "@/app/images/b-5.png";
import b6 from "@/app/images/b-6.png";
import b7 from "@/app/images/b-7.png";
import b8 from "@/app/images/b-8.png";

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
      { text: "จักรยานไฟฟ้า", score: 1, image: b4 },
      { text: "จักรยานมีตะกร้าหน้า", score: 1, image: b5 },
      { text: "จักรยานฟิกเกียร์", score: 1, image: b6 },
      { text: "จักรยานสองตอน", score: 1, image: b7 },
      { text: "จักรยานถีบสามล้อ", score: 1, image: b8 },
    ],
  };
  const dispatch = useDispatch();

  const [selected, setSelected] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);
  const [fadeOut, setfadeOut] = useState(false);
  const handleClick = (index, indexImg) => {
    setSelected(index);
    setSelectedImage(indexImg);
  };

  const next = () => {
    setfadeOut(true);
    dispatch(add(selected));
    setTimeout(() => {
      router.push("/quiz/q4");
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
      {/*  */}
      <div className=" pt-11 animate__animated  animate__fadeIn animate__delay-2s">
        <Image
          alt=""
          src={data?.c[selectedImage]?.image}
          className="w-52 h-36"
        />
      </div>

      <div className="flex gap-5">
        <div className="animate__animated  animate__fadeIn animate__delay-2s flex flex-col w-36 gap-4 mt-[52px] font-medium ">
          {Array.isArray(data.c) &&
            data.c.map(
              ({ text }, i) =>
                i < 4 && (
                  <ChoiceBtn
                    key={i + i}
                    choice={text}
                    isSelected={selected === i + i}
                    onClick={() => handleClick(i + i, i)}
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
                    key={i - (7 - i)}
                    choice={text}
                    isSelected={selected === i - (7 - i)}
                    onClick={() => handleClick(i - (7 - i), i)}
                  />
                )
            )}
        </div>
      </div>
      <button
        onClick={next}
        className="mt-9 bg-black py-2 px-4 text-white rounded-lg animate__animated  animate__fadeIn animate__delay-2s"
      >
        เดินทางต่อ {">>"}
      </button>
    </Container>
  );
};

export default Q3;
