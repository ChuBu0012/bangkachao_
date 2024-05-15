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
        เวลาที่คุณได้ใช้กับตัวเอง <br /> เป็นของขวัญที่ดีที่สุดที่คุณควรได้รับ
        <br />
        <br />
        ให้เวลากับคนอื่นแล้ว <br /> อย่าลืมให้เวลากับตัวเองบ้างนะ
      </span>
    ),
    image: bgS1_1.src,
  },
  {
    text: (
      <span>
        ไปสถานที่ที่ชอบ ดื่มเครื่องดื่มแสนอร่อย <br />{" "}
        ไปกินเมนูโปรดที่สั่งเป็นประจำ
      </span>
    ),
    image: bgS1_2.src,
  },
  {
    text: (
      <span>
        พักผ่อนให้รางวัลกับตัวเองบ้าง <br /> เพราะคุณคือคนพิเศษนะ{":)"}
      </span>
    ),
    image: bgS1_3.src,
  },
];

const S4 = () => {
  const [index, setindex] = useState(0);
  const [m, setm] = useState("160px");
  useEffect(() => {
    setTimeout(() => {
      setm("116px");
    }, 1000);
  }, [index]);
  return (
    <Container className="flex flex-col items-center relative">
      <StoryComponent
        data={data}
        href="/quiz/q11"
        setter={setindex}
        mt_text={`${m}`}
      />
    </Container>
  );
};

export default S4;
