"use client";
import React, { useEffect } from "react";
import Container from "./Container";
import logo from "../images/Logo-02-02 1.svg";
import Image from "next/image";
import "animate.css";

const Introduction = () => {
  return (
    <div className="animate__animated min-h-[844px] animate__fadeOut animate__delay-3s flex flex-col items-center justify-center py-8 px-14 bg-green-200 absolute z-10 w-full h-full top-0">
      <Image
        alt="logo"
        src={logo}
        className="animate__animated animate__fadeOut animate__delay-2s"
      />
    </div>
  );
};

export default Introduction;
