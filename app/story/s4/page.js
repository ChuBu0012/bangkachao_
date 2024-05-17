"use client";
import Container from "@/app/components/Container";
import StoryComponent from "@/app/components/Story";
import bgS1_1 from "@/app/images/bg-s1-1.png";
import bgS1_2 from "@/app/images/bg-s1-2.png";
import bgS1_3 from "@/app/images/bg-s1-3.png";
import { useEffect, useState } from "react";

const data = [
  {
    text: (
      <span>
        ตอนนี้คนข้างตัวของคุณบอกให้คุณ <br />
        ทําหัวให้โล่งมองบรรยากาศรอบๆที่มีแต่ป่า <br />
        และอากาศที่ดีที่สุดเท่าที่คุณเคยรู้สึก
      </span>
    ),
    image: bgS1_1.src,
  },
  {
    text: (
      <span>
        ตอนนี้ลองฟังเสียงรอบๆดูสิทั้งเสียงนก <br />
        เสียงต้นไม้จากที่กระทบกันตอนลมผ่าน
      </span>
    ),
    image: bgS1_2.src,
  },
  {
    text: (
      <span>
        เสียงน้ําจากแอ่งน้ําตอนนี้สูดอากาศลึกๆ <br />
        ให้เต็มปอด ลองหลับตาสัก 10 วินะ
      </span>
    ),
    image: bgS1_3.src,
  },
];

const S4 = () => {
  const [m, setm] = useState(false);
  const changeMt = (cursor) => {
    if (!m) {
      setTimeout(() => {
        setm(true);
      }, 1000);
    }
  };
  return (
    <Container className="flex flex-col items-center relative">
      <StoryComponent
        data={data}
        href="/quiz/q9"
        setter={changeMt}
        mt_text={`${m ? "140px" : "128px"}`}
      />
    </Container>
  );
};

export default S4;
