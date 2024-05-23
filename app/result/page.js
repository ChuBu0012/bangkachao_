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
  const [fadeIn, setfadeIn] = useState(true);
  const [result, setResult] = useState(false);

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
      <p className="mt-9 text-center">
        <span className="font-medium">{info?.name}</span> คือ...</p>
      <Image className={` -z-10 animate__animated ${result ? "animate__fadeIn" : "opacity-0 pointer-events-none"}`} src={setOfResult[maxIndex]}/>
      <Link
        target="_blank"
        href={"https://www.facebook.com/groups/253853421103820/"}
        className="absolute bottom-[101px] right-[63px] w-[71px] aspect-square opacity-0"
      ></Link>
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
