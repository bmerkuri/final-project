import React, { useEffect, useState } from "react";
import Question from "../Questions/Question";
import "./surveyStyles.css"

import axios from "axios";

export const Page = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [question, setQuestion] = useState([]);
  const [answer, setAnswers] = useState([]);
  const [answersLoading, setAnswersLoading] = useState(true);


  useEffect(() => {
    axios
      .get(
        "https://8080-bmerkuri-finalproject-6gv1eha289z.ws-eu53.gitpod.io/api/rest/question"
      )
      .then((res) => {
        console.log("question",res.data);
        setQuestion(res?.data);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        "https://8080-bmerkuri-finalproject-6gv1eha289z.ws-eu53.gitpod.io/api/rest/answer"
      )
      .then((res) => {
        console.log("responseAnswer", res.data);
        setAnswers(res?.data);
        setAnswersLoading(false);
      });
  }, []);

  if (isLoading && answersLoading) {
    return <h2>Is Loading...</h2>;
  }

  return (
    <div className="container">
      {/* {console.log("1",answer?.answers.find(ele => ele.id === "1"))} */}
      {console.log(answer?.answers?.find(element => element?.id === 1))}
      {console.log("answer", answer)}
      {question?.questions?.map((element) => {
        console.log("element",element)
        console.log(answer?.answers.find(ele => ele?.id === element?.id))
        return (
          <Question
            key={element?.id}
            question={element?.data?.question}
            answers = {(answer?.answers?.find(ele => ele?.id === element?.id))}
          />
        );
      })}
      
    </div>
  );
};

export default Page;
