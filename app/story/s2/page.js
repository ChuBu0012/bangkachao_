"use client";
import Container from "@/app/components/Container";
import StoryComponent from "@/app/components/Story";
import bgImage from "@/app/images/bg-main.jpg";
import { useState } from "react";

const data = [
  {
    text: (
      <span>
        คุณเดินลัดเลาะหาทางออก <br />
        ไปตามถนนที่เต็มไปด้วยต้นไม้
      </span>
    ),
    image: bgImage,
  },
];

const S1 = () => {
  return (
    <Container className="flex flex-col items-center relative">
      <StoryComponent data={data} href="/quiz/q2"/>
    </Container>
  );
};

export default S1;
