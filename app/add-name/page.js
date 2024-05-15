"use client";
import React, { useState } from "react";
import Container from "../components/Container";
import "animate.css";
import { useRouter } from "next/navigation";
const AddName = () => {
  const [fadeOut, setfadeOut] = useState(false);
  const rotuer = useRouter()
  return (
    <Container
      className={` flex flex-col items-center animate__animated animate__fadeIn animate__delay-1s ${
        fadeOut ? "animate__fadeOut" : ""
      }`}
    >
      <p className="mt-40 font-light text-center">
        ก่อนจะเดินทางไปด้วยกัน <br />{" "}
        <span className="font-semibold">ขอทำความรู้จักคุณหน่อย</span>
      </p>
      <form className="mt-7 flex flex-col gap-2 max-w-[250px] w-full">
        <input
          type="text"
          placeholder="ชื่อเล่น"
          className="outline-none h-10 w-full px-4 py-2 border border-[#E0E0E0] rounded-lg placeholder-[#828282]"
        />
        <div className="outline-none h-10 w-full border border-[#E0E0E0] rounded-lg placeholder-[#828282]">
          <select
            className="outline-none h-[38px] pl-[13px] rounded-lg text-[#828282] w-full"
            id="custom-select"
            onChange={() => {
            }}
            style={{
              fontFamily: `Kanit`,
              backgroundPositionX: "10px",
            }}
          >
            <option value="_" disabled selected className="text-[#828282]">
              เพศ
            </option>
            <option value="m" key="male">
              ชาย
            </option>
            <option value="f" key="female">
              หญิง
            </option>
            <option value="f" key="other">
              อื่นๆ
            </option>
          </select>
        </div>

        <input
          type="number"
          placeholder="อายุ"
          className="outline-none h-10 w-full px-4 py-2 border border-[#E0E0E0] rounded-lg placeholder-[#828282]"
        />
      </form>
      <button
        onClick={() => {
          setfadeOut(true);
          setTimeout(() => {
            rotuer.push("/story/s1");
          }, 1000);
        }}
        className={`mt-[60px] px-4 py-2 bg-green-200 rounded-lg text-white font-medium animate__animated `}
      >
        เดินทางต่อ
      </button>
    </Container>
  );
};

export default AddName;
