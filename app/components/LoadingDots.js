// components/LoadingDots.js

import Image from "next/image";
import Container from "./Container";
import by from "../images/bicycle 1.svg";
import "animate.css"
const LoadingDots = ({className}) => {
  return (
    <Container className={`animate__animated   animate__fadeIn  flex flex-col items-center justify-center absolute w-full h-full bg-[#FFFCED] left-0 ${className}`}>
      <Image src={by} alt />
      <div className="flex flex-col items-center relative w-fit pr-5">
        <span className="font-medium">Loading</span>
        <div className="dots absolute bottom-1 right-0"></div>
      </div>
    </Container>
  );
};

export default LoadingDots;
