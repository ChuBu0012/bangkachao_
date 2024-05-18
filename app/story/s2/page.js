"use client"
import Container from "@/app/components/Container";
import StoryComponent from "@/app/components/Story";
import bgS2_1 from "@/app/images/bg-s2-1.png";
import { playSound } from "@/lib/slices/soundEffect";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const data = [
  {
    text: (
      <span>
        คุณเดินลัดเลาะหาทางออก <br />
        ไปตามถนนที่เต็มไปด้วยต้นไม้
      </span>
    ),
    image: bgS2_1.src,
  },
];

const S2 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(playSound({ soundId: "se2_2" }));
  }, []);
  return (
    <Container className="flex flex-col items-center relative">
      <StoryComponent data={data} href="/quiz/q2" mt_text="150px" />
    </Container>
  );
};

export default S2;
