import React, { useEffect, useState } from "react";
import Question from "../Questions/Question";

import axios from "axios";

export const Page = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [question, setQuestion] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [answersLoading, setAnswersLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "https://8080-bmerkuri-finalproject-i52z2dfqen5.ws-eu51.gitpod.io/api/rest/question"
      )
      .then((res) => {
        setQuestion(res.data);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        "https://8080-bmerkuri-finalproject-i52z2dfqen5.ws-eu51.gitpod.io/api/rest/answer"
      )
      .then((res) => {
        setAnswers(res.data);
        setAnswersLoading(false);
      });
  }, []);

  if (isLoading) {
    return <h2>Is Loading...</h2>;
  }

  return (
    <Question
      key={question.questions[0].id}
      question={question.questions[0].data.question}
      answers={[
        answers.answers[0].data.answer,
        answers.answers[1].data.answer,
        answers.answers[2].data.answer
      ]}
    />
  );
};

export default Page;
