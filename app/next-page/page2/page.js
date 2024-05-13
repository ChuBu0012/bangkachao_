import React from "react";
import Container from "../../components/Container";
import bg from "../../images/bg-main.jpg";
import Link from "next/link";

const Page = () => {
  return (
    <Container bgImg={bg.src}>
      <Link
        href={"/next-page/question"}
        className="flex justify-center w-fit px-8 z-30 py-4 bg-rose-400 rounded-md text-white relative font-semibold font-sans after:-z-20 after:absolute after:h-1 after:w-1 after:bg-rose-800 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700  [text-shadow:3px_5px_2px_#be123c;] hover:[text-shadow:2px_2px_2px_#fda4af] text-2xl"
      >
        Hover Me
      </Link>
    </Container>
  );
};

export default Page;
