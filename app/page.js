"use client";
import Container from "./components/Container";
// import { useDispatch, useSelector } from "react-redux";
// import { increment } from "@/lib/slices/counterScore";
// const count = useSelector((state) => state.counter.value);
// const dispatch = useDispatch();
import Introduction from "./components/Introduction";
import { useEffect, useState } from "react";
import Content from "./components/Home";

export default function Home() {
  const [audio, setAudio] = useState(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    setAudio(new Audio("/bgm.mp3"));
  }, []);

  const startPlaying = () => {
    setPlaying(true);
    audio && audio.play();
  };

  const stopPlaying = () => {
    setPlaying(false);
    audio && audio.pause();
  };

  useEffect(() => {
    return () => {
      stopPlaying();
    };
  }, []);



  const [isCheckIntro, setisCheckIntro] = useState(true);
  const [isCheckNext, setisCheckNext] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  const changeStatusNext = () => {
    setFadeOut(true);
    setTimeout(() => {
      setisCheckNext(false);
      setFadeIn(true);
      setFadeOut(false);
    }, 1000); // 500 milliseconds for the fade out transition
  };

  useEffect(() => {
    setTimeout(() => {
      setisCheckIntro(false);
    }, 4000);
  }, []);

  return (
    <Container className="flex flex-col items-center py-8 px-14 relative bg-white">
      {isCheckIntro && <Introduction />}
      <Content
        isCheckIntro={isCheckIntro}
        isCheckNext={isCheckNext}
        fadeIn={fadeIn}
        fadeOut={fadeOut}
        changeStatusNext={changeStatusNext}
        startPlaying={startPlaying}
      />
    </Container>
  );
}
{
  /* <div className={`h-[296px] flex items-end `}>
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
            // startPlaying();
          }}
        >
          เข้าใจแล้ว
        </button>
      ) : (
        <Link
          href={"/next-page/page1"}
          className={`mt-10 px-4 py-3 bg-green-200 rounded-lg text-white font-medium ${
            fadeIn ? "animate__animated animate__fadeIn" : ""
          }`}
        >
          เริ่มเลย
        </Link>
      )} */
}
