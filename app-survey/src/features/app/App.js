import { useQuery, gql } from "../../services/hasura-client";
import Page from "../../components/Page";
import { Logout } from "./Logout";
import Question from "./Components/Question";
import "./pageStyles/surveyStyles.css";
import { useEffect, useState } from "react";
import { storageData } from "./Components/Question";

const PING_ACTION_QUERY = gql`
  query GetQuery {
    answers {
      data
      id
    }
    questions {
      data
      id
    }
  }
`;

export const App = () => {
  const { isSuccess, data } = useQuery("PingAction", PING_ACTION_QUERY);

  const [ans, setAns] = useState([]);

  function setAnswerData(data) {
    console.log("storage", ans);
    setAns([...ans, data]);
  }


  useEffect(()=> {
    setAnswerData(storageData)
  }, storageData)


  useEffect(() => {
    // console.log(ans);
    localStorage.setItem("Answers", JSON.stringify(ans));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ans]);

  useEffect(() => {
    localStorage.getItem("Answers", JSON.stringify(ans));
  });

  return (
    <Page withPadding title={"Survey App"} actions={<Logout />}>
      {isSuccess ? (
        <div className="container">
          {/* {console.log("1",answer?.answers.find(ele => ele.id === "1"))} */}
          {console.log(data?.answers?.find((element) => element?.id === 1))}
          {console.log("answer", data)}
          {data?.questions?.map((element) => {
            console.log("element", element);
            console.log(data?.answers.find((ele) => ele?.id === element?.id));
            return (
              (
                <Question
                  key={element?.id}
                  question={element?.data?.question}
                  id={element?.id}
                  answers={data?.answers?.find(
                    (ele) => ele?.id === element?.id
                  )}
                />
              )
            );
          })}
        </div>
      ) : (
        "loading time..."
      )}
    </Page>
  );
};
