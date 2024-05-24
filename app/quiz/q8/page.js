"use client";
import Container from "@/app/components/Container";
import React, { useState } from "react";
import "animate.css";
import "../../components/changeBg.css"
import { useRouter } from "next/navigation";

const Q7 = () => {
  const router = useRouter();

  const data = {
    q: (
      <span>
        เพื่อนของคุณเอามือมาแตะที่บ่า <br /> ค่อยๆบอกให้คุณใจเย็นลง <br />{" "}
        ตอนนี้คุณรู้สึกหนักใจเรื่องอะไรอยู่?{" "}
      </span>
    ),
    c: [],
  };

  const [fadeOut, setfadeOut] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setInputError(false); // Reset error state on input change
  };

  const next = () => {
    if (inputValue.trim() === "") {
      setInputError(true);
    } else {
      setfadeOut(true);
      setTimeout(() => {
        router.push("/story/s4");
      }, 1000);
    }
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
      <textarea
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="บอกมาได้เลยรอฟังอยู่..."
        className={`transition-all resize-none animate__animated animate__fadeIn animate__delay-2s outline-none h-40 w-[300px] mt-7 px-4 py-2 border ${
          inputError ? "border-red-400" : "border-[#E0E0E0]"
        } rounded-lg placeholder-[#828282]`}
      />

      <button
        onClick={next}
        className="mt-9 bg-black py-2 px-4 animate__animated animate__fadeIn animate__delay-2s text-white rounded-lg animate__animated  animate__fadeIn animate__delay-2s"
      >
        เดินทางต่อ
      </button>
    </Container>
  );
};

export default Q7;
