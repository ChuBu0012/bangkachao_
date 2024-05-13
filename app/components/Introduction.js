import React from "react";
import Container from "./Container";
import logo from '../images/logo.png';
import Image from "next/image";
import 'animate.css';

const Introduction = () => {
  return (
    <Container className="animate__animated animate__fadeOut animate__delay-3s flex flex-col items-center justify-center py-8 px-14 bg-green-200 absolute z-10 top-0">
        <Image alt="logo" src={logo} className="animate__animated animate__fadeOut animate__delay-2s"/>
    </Container>
  );
};

export default Introduction;
