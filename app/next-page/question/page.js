"use client";
import React, { useEffect, useState } from "react";
import bg from "../../images/bg-main.jpg";
import Container from "../../components/Container";
import Question from "@/app/components/Question";
import q from "../../../public/question.json";
import { useDispatch } from "react-redux";
import { push } from "@/lib/slices/counterScore";
const Page = () => {
  const [index, setIndex] = useState(0);
  const [question, setQuestions] = useState(q[index]);
  const dispatch = useDispatch();
  useEffect(() => {
    setQuestions(q[index]);
  }, [index]);
  const nextQ = (score) => {
    if (index != 12) {
      dispatch(push(score));
      setIndex(index + 1);
    }
  };
  return (
    <Container className={"flex justify-center items-center"} bgImg={bg.src}>
      <Question obj={question} click={nextQ} />
    </Container>
  );
};

export default Page;
