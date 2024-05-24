"use client";
import Container from "@/app/components/Container";
import StoryComponent from "@/app/components/Story";
import bgS1_1 from "@/app/images/bg-s1-1.png";
import bgS1_2 from "@/app/images/เกมทายใจ-01.png";
import { pauseSound, playSound } from "@/lib/slices/soundEffect";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const data = [
  {
    text: (
      <span>
        ระหว่างเดินทางกลับบ้าน
        <br />
        หลังเลิกงานในเมืองหลวง
      </span>
    ),
    image: bgS1_1.src,
  },
  {
    text: (
      <span>
        คุณเลือกที่จะใช้ทางลัด
        <br />
        ที่คุณใช้เป็นประจำ
      </span>
    ),
    image: bgS1_2.src,
  },
  {
    text: (
      <span>
        ทันทีที่คุณก้าวเท้าเข้าไป
        <br />
        ในซอยกลับมีแสงสว่างวาบ
      </span>
    ),
    image: bgS1_2.src,
  },
];

const S1 = () => {
  const dispatch = useDispatch();
  const changeSound = (cursor) => {
    switch (cursor) {
      case 1:
        dispatch(playSound({ soundId: "se1_3", loop: false, vol: 1 }));
        break;
      case 2:
        dispatch(pauseSound({ soundId: "se1_1" }));
        dispatch(pauseSound({ soundId: "se1_2" }));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    dispatch(playSound({ soundId: "se1_1" }));
    dispatch(playSound({ soundId: "se1_2" }));
  }, []);
  return (
    <Container className="flex flex-col items-center relative">
      <StoryComponent data={data} href="/quiz/q1" setter={changeSound} />
    </Container>
  );
};

export default S1;
