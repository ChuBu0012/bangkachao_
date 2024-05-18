"use client"
import React, { useState } from "react";
import "animate.css"
import { useRouter } from "next/navigation";
const Content = ({
  isCheckNext,
  fadeIn,
  fadeOut,
  changeStatusNext,
  startPlaying,
}) => {
  const [endfade, setendfade] = useState(false)
  const router = useRouter()
  return (
    <>
      <div className=" h-[296px] flex items-end">
        {isCheckNext ? (
          <p
            className={`text-center mt-[6.5rem] ${
              fadeOut ? "animate__animated animate__fadeOut" : ""
            }`}
          >
            เกมทายลักษณะนิสัยและบุคลิกภาพเกมนี้สร้างขึ้นโดยเพจบางกะเจ้าเพื่อเป็นพื้นที่พักใจ
            <br/> และพื้นที่ปลอดภัยสำหรับผู้คนที่ผ่านมาพบเรา
            ขอให้พื้นที่นี้เป็นพื้นที่ที่คุณแวะมาได้เสมอนะ {":)"} <br />
            <br />
            เนื้อหาเกมทายลักษณะนิสัยนี้สร้างขึ้นเพื่อ <br />
            ความบันเทิงเท่านั้น ไม่อ้างอิงกับหลักวิชาการใดๆ
          </p>
        ) : (
          <p
            className={`text-center mt-[6.5rem] ${
              fadeIn ? "animate__animated animate__fadeIn" : ""
            } ${endfade ? "animate__animated animate__fadeOut" : ""}`}
          >
            เพื่ออรรถรสในการเล่น
            <br />
            อย่าลืมเปิดเสียง
            <br />
            บนอุปกรณ์ของคุณด้วยนะ{" "}
          </p>
        )}
      </div>
      {isCheckNext ? (
        <button
          className={`mt-10 px-4 py-3 bg-green-200 rounded-lg text-white font-medium ${
            fadeOut ? "animate__animated animate__fadeOut" : ""
          }`}
          onClick={() => {
            changeStatusNext();
          }}
        >
          เข้าใจแล้ว
        </button>
      ) : (
        <button
        onClick={()=>{
          setendfade(true)
          startPlaying()
          setTimeout(()=>{router.push("/info")},1000)
        }}
          className={`mt-10 px-4 py-3 bg-green-200 rounded-lg text-white font-medium ${
            fadeIn ? "animate__animated animate__fadeIn" : ""
          } ${endfade ? "animate__animated animate__fadeOut" : ""}`}
        >
          เริ่มเลย
        </button>
      )}
    </>
  );
};

export default Content;
