"use client";
import Container from "@/app/components/Container";
import StoryComponent from "@/app/components/Story";
import bgS1_1 from "@/app/images/bg-s2-1.png";
import bgS4_1 from "@/app/images/bg-s4-1.png";
import bgS4_3 from "@/app/images/bg-s4-3.png";
import { pauseSound, playSound } from "@/lib/slices/soundEffect";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

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
    image: bgS4_1.src,
  },
  {
    text: (
      <span>
        เสียงน้ําจากแอ่งน้ําตอนนี้สูดอากาศลึกๆ <br />
        ให้เต็มปอด ลองหลับตาสัก 10 วินะ
      </span>
    ),
    image: bgS4_3.src,
  },
];

const S4 = () => {
  const [m, setm] = useState(false);
  const dispatch = useDispatch()
  const changeMt = (cursor) => {
    if (!m) {
      setTimeout(() => {
        setm(true);
      }, 1000);
    }

    switch (cursor) {
      case 1:
        dispatch(playSound({ soundId: "se4_2", vol: 1 }));
        break;
      case 2:
        dispatch(pauseSound({ soundId: "se4_1" }));
        dispatch(pauseSound({ soundId: "se4_2" }));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    dispatch(playSound({soundId:"se4_1"}))
  }, []);
  return (
    <Container className="flex flex-col items-center relative">
      <StoryComponent
        data={data}
        href="/quiz/q9"
        setter={changeMt}
        mt_text={`${m ? "184px" : "128px"}`}
      />
    </Container>
  );
};

export default S4;
