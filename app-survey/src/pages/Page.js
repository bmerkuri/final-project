import React, { useEffect, useState } from "react";
import Question from "../Questions/Question";

import axios from "axios";

export const Page = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [question, setQuestion] = useState([]);
  const [answer, setAnswers] = useState([]);
  const [answersLoading, setAnswersLoading] = useState(true);

  var content = [];

  useEffect(() => {
    axios
      .get(
        "https://8080-bmerkuri-finalproject-44jjfxq8wsx.ws-eu51.gitpod.io/api/rest/question"
      )
      .then((res) => {
        setQuestion(res.data);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        "https://8080-bmerkuri-finalproject-44jjfxq8wsx.ws-eu51.gitpod.io/api/rest/answer"
      )
      .then((res) => {
        console.log("responseAnswer", res.data);
        setAnswers(res.data);
        setAnswersLoading(false);
      });
  }, []);

  if (isLoading && answersLoading) {
    return <h2>Is Loading...</h2>;
  }

  return (
    <div>
      {/* {console.log("1",answer?.answers.find(ele => ele.id === "1"))} */}
      {console.log(answer?.answers?.find(element => element.id === 1))}
      {console.log("answer", answer)}
      {question?.questions.map((element) => {
        return (
          <Question
          
            key={element?.id}
            question={element?.data?.question}
            answers = {(answer?.answers?.find(ele => ele?.id === element?.id))}
            // answers={[
            //   answer.answers[0].data.opsion1,
            //   answer.answers[0].data.opsion2,
            //   answer.answers[0].data.opsion3
            // ]}
          />
        );
      })}
    </div>

    // <Question
    //   key={question.questions[0].id}
    //   question={question.questions[0].data.question}
    //   answers={[
    //     answer.answers[0].data.opsion1,
    //     answer.answers[0].data.opsion2,
    //     answer.answers[0].data.opsion3
    //   ]}
    // />
  );

  // for (let i = 0; i < question.questions.length; i++) {

  //   content.push(
  //     <Question
  //       key={question.questions[i].id}
  //       question={question.questions[i].data.question}
  //       answers={[
  //         answer.answers[i].data.opsion1,
  //         answer.answers[i].data.opsion2,
  //         answer.answers[i].data.opsion3
  //       ]}
  //     />
  //   );
  // }

  // content.map((element) => {
  //   return element;
  // });
};

export default Page;
