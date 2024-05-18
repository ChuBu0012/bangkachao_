import Container from "@/app/components/Container";
import StoryComponent from "@/app/components/Story";
import bgS2_2 from "@/app/images/bg-s2-2.png";

const data = [
  {
    text: (
      <span>
        คุณพูดคุยถามสารทุกข์สุกดิบกับ คนที่พบ <br /> จู่ๆระหว่างพูดคุย <br />{" "}
        เลือดกําเดาคุณไหลออกจากจมูก <br /> คุณแสบจมูกและในปอดรู้สึกอึดอัดไปหมด
      </span>
    ),
    image: bgS2_2.src,
  },
];

const S2 = () => {
  return (
    <Container className="flex flex-col items-center relative">
      <StoryComponent data={data} href="/quiz/q7" mt_text="75px" />
    </Container>
  );
};

export default S2;
