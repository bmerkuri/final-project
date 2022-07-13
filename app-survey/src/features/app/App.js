import { useQuery, gql } from "../../services/hasura-client";
import Page from "../../components/Page";
import { Logout } from "./Logout";
import Question from "./Components/Question";
import "./pageStyles/surveyStyles.css";
import axios from "axios";
import { converter } from "../../features/app/logic";

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

  const ADMIN_SECRET = "hasura";

  const BASE_URL =
    "https://8080-bmerkuri-finalproject-7imwg1bno2k.ws-eu54.gitpod.io/v1/graphql";

  const ADD_POST = gql`
    mutation MyMutation($data: json) {
      insert_userResponse_one(object: { data: $data }) {
        data
      }
    }
  `;

  const submitAnswer = () => {
    axios({
      url: BASE_URL,
      method: "POST",
      headers: {
        "x-hasura-admin-secret": ADMIN_SECRET
      },
      data: {
        variables: {
          data: [converter(localStorage.getItem("Answers"))]
        },
        query: ADD_POST
      }
    })
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Page withPadding title={"Survey App"} actions={<Logout />}>
      {isSuccess ? (
        <div className="container">
          {/* {console.log("1",answer?.answers.find(ele => ele.id === "1"))} */}
          {/* {console.log(data?.answers?.find((element) => element?.id === 1))}
          {console.log("answer", data)} */}
          {data?.questions?.map((element) => {
            console.log("element", element);
            console.log(data?.answers.find((ele) => ele?.id === element?.id));
            return (
              <Question
                key={element?.id}
                question={element?.data?.question}
                // anss={element?.data?.answers}
                id={element?.id}
                score={element?.answers?.data?.opsion1}
                answers={data?.answers?.find((ele) => ele?.id === element?.id)}
              />
            );
          })}

          <div>
            <button onClick={submitAnswer}>Save</button>
          </div>
        </div>
      ) : (
        "loading time..."
      )}
    </Page>
  );
};
