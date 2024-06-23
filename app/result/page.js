"use client";
import React, { useState } from "react";
import Container from "../components/Container";
import { useSelector } from "react-redux";
import axios from "axios";
import LoadingDots from "../components/LoadingDots";
import result_1 from "../images/result/1_result.png";
import result_2 from "../images/result/2_result.png";
import result_3 from "../images/result/3_result.png";
import result_4 from "../images/result/4_result.png";
import result_5 from "../images/result/5_result.png";
import result_6 from "../images/result/6_result.png";
import result_7 from "../images/result/7_result.png";
import result_8 from "../images/result/8_result.png";
import contact from "../images/ddddd-01.png";

import "animate.css";
import Link from "next/link";
import Image from "next/image";

const Result = () => {
  const info = useSelector((state) => state.Info);
  const counter = useSelector((state) => state.counter.value);
  const maxIndex = counter.indexOf(Math.max(...counter));
  const [loading, setloading] = useState(false);
  const [loadingFadeout, setloadingFadeout] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [fadeOut, setfadeOut] = useState(false);
  const [result, setResult] = useState(false);

  const [btn,setBtn] = useState(false);

  const setOfResult = [
    result_1,
    result_2,
    result_3,
    result_4,
    result_5,
    result_6,
    result_7,
    result_8,
  ];
  const submit = async () => {
    setBtn(true)
    try {
      setTimeout(() => {
        setfadeOut(true);
      }, 500);
      setTimeout(() => {
        setClicked(true);
        setTimeout(() => {
          setloading(true);
        }, 500);
      }, 1500);
      const res = await axios.post("/api/info", info);
      console.log("submitted successfully");
    } catch (error) {
      setTimeout(() => {
        setloadingFadeout(true);
        setTimeout(() => {
          setloading(false);
        }, 1000);
      }, 1000);
      console.error("Error submitting data:", error);
    } finally {
      setTimeout(() => {
        setResult(true);
        setloadingFadeout(true);
        setTimeout(() => {
          setloading(false);
        }, 1000);
      }, 1000);
    }
  };
  return (
    <Container
      className={`flex flex-col item-center relative bg-conta in animate__animated animate__fadeIn animate__delay-1s`}
    >
      <p
        className={`mt-9 text-center ${
          result ? "animate__fadeIn" : "absolute opacity-0"
        }`}
      >
        <span className="font-medium">{info?.name}</span> คือ...
      </p>
      <div className={`animate__animated w-8/12 flex flex-col items-center mx-auto relative ${ 
            result
              ? "animate__fadeIn"
              : "opacity-0 pointer-events-none absolute"
          }`}>
        <Image
          className={`mt-3 mx-auto -z-10 w-full ${ 
            result
              ? ""
              : "opacity-0 pointer-events-none absolute"
          }`}
          src={setOfResult[maxIndex]}
        />
        <a
          href={setOfResult[maxIndex].src}
          className={`mt-5 mx-auto w-full bg-green-200 text-center text-white py-2 rounded-lg ${ 
            result
              ? ""
              : "opacity-0 pointer-events-none absolute"
          }`}
          download={`${info?.name || "result"}_image.png`}
        >
          บันทึกภาพ
        </a>
        <Image src={contact} className={`w-full  mt-6 ${ 
            result
              ? ""
              : "opacity-0 pointer-events-none absolute"
          }`}/>
      <Link
        target="_blank"
        href={"https://www.facebook.com/share/oGb7J4bB8CnBJUV4/?mibextid=K35XfP"}
        className="absolute  bottom-[12px] left-[18px] w-[61px] opacity-0 aspect-square"
      ></Link>
      </div>

      {loading && (
        <LoadingDots
          className={`${loadingFadeout ? "animate__fadeOut" : ""}`}
        />
      )}

      {!clicked && (
        <div
          className={`flex flex-col justify-center items-center animate__animated ${
            fadeOut ? "animate__fadeOut" : ""
          }`}
        >
          <p className="text-center mt-56">
            ขอบคุณสำหรับการเดินทางด้วยกันในครั้งนี้ <br />{" "}
            แล้วกลับมาพบกันได้เสมอนะ <br />
            <br />
            ถ้าพร้อมแล้ว มารู้จักกับคู่หูคู่ซี้ของคุณกัน!
          </p>
          <button
            onClick={submit}
            disabled={btn}
            className="py-1 px-11 mt-9 mx-auto bg-green-100 w-fit rounded-lg font-medium"
          >
            ดูผลลัพธ์
          </button>
        </div>
      )}
    </Container>
  );
};

export default Result;
