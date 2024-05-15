import Container from "@/app/components/Container";
import StoryComponent from "@/app/components/Story";
import bgS1_1 from "@/app/images/bg-s1-1.png";
import bgS1_2 from "@/app/images/bg-s1-2.png";
import bgS1_3 from "@/app/images/bg-s1-3.png";

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
        ในซอยไป กลับมีแสงสว่างวาบ
      </span>
    ),
    image: bgS1_3.src,
  },
];


const S1 = () => {
  return (
    <Container className="flex flex-col items-center relative">
      <StoryComponent data={data} href="/quiz/q1"  />
    </Container>
  );
};

export default S1;
