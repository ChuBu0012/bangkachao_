import React from "react";
import Introduction from "./Introduction"; // ต้องการตรวจสอบว่าควร import อย่างไร
import Link from "next/link";
import "animate.css"
const Content = ({
  isCheckNext,
  fadeIn,
  fadeOut,
  changeStatusNext,
  startPlaying,
}) => {
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
            <br />
            และพื้นที่ปลอดภัยสำหรับผู้คนที่ผ่านมาพบเรา
            ขอให้พื้นที่นี้เป็นพื้นที่ที่คุณแวะมาได้เสมอนะ {":)"} <br />
            <br />
            เนื้อหาเกมทายลักษณะนิสัยนี้สร้างขึ้นเพื่อ <br />
            ความบันเทิงเท่านั้น
            <br />
            ไม่อ้างอิงกับหลักวิชาการใดใด
          </p>
        ) : (
          <p
            className={`text-center mt-[6.5rem] ${
              fadeIn ? "animate__animated animate__fadeIn" : ""
            }`}
          >
            เพื่ออถรรสในการเล่น
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
            // startPlaying()
          }}
        >
          เข้าใจแล้ว
        </button>
      ) : (
        <Link
          href={"/add-name"}
          className={`mt-10 px-4 py-3 bg-green-200 rounded-lg text-white font-medium ${
            fadeIn ? "animate__animated animate__fadeIn" : ""
          }`}
        >
          เริ่มเลย
        </Link>
      )}
    </>
  );
};

export default Content;
