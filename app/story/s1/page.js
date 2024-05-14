"use client";
import Container from "@/app/components/Container";
import StoryComponent from "@/app/components/Story";
import bgImage from "@/app/images/bg-main.jpg";

const data = [
  {
    text: (
      <span>
        ระหว่างเดินทางกลับบ้าน
        <br />
        หลังเลิกงานในเมืองหลวง
      </span>
    ),
    image: bgImage,
  },
  {
    text: (
      <span>
        คุณเลือกที่จะใช้ทางลัด
        <br />
        ที่คุณใช้เป็นประจำ
      </span>
    ),
    image: bgImage,
  },
  {
    text: (
      <span>
        ทันทีที่คุณก้าวเท้าเข้าไป
        <br />
        ในซอยไป กลับมีแสงสว่างวาบ
      </span>
    ),
    image: bgImage,
  },
];

const S1 = () => {
  return (
    <Container className="flex flex-col items-center relative">
      <StoryComponent data={data} href="/quiz/q1" />
    </Container>
  );
};

export default S1;
