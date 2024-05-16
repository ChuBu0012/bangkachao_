"use client";
import React, { useState } from "react";
import Container from "../components/Container";
import { useSelector } from "react-redux";
import axios from "axios";

const Result = () => {
  const info = useSelector((state) => state.Info);
  const counter = useSelector((state) => state.counter.value);
  const maxIndex = counter.indexOf(Math.max(...counter));
  const [loading, setloading] = useState(false);  const submit = async () => {
    try {
      setloading(true);
      const res = await axios.post("/api/info", info);
      console.log("submitted successfully");
    } catch (error) {
      setloading(true);
      console.error("Error submitting data:", error);
    } finally {
      setTimeout(() => {
        setloading(false);
      }, 1000);
    }
  };
  return (
    <Container className={"flex flex-col item-center"}>
      <p className="text-center mt-56">
        ขอบคุณสำหรับการเดินทางด้วยกันในครั้งนี้ <br /> แล้วกลับมาพบกันได้เสมอนะ{" "}
        <br />
        <br />
        ถ้าพร้อมแล้ว มารู้จักกับคู่หูคู่ซี้ของคุณกัน!
      </p>
      <button
        onClick={submit}
        className="py-1 px-11 mt-9 mx-auto bg-green-100 w-fit rounded-lg font-medium"
      >
        ดูผลลัพธ์
      </button>
      {loading && "loading..."}
      {/* {maxIndex} */}
    </Container>
  );
};

export default Result;
