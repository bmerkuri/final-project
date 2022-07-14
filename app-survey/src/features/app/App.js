import { useQuery, gql } from "../../services/hasura-client";
import Page from "../../components/Page";
import { Logout } from "./Logout";
import Question from "./Components/Question";
import "./pageStyles/surveyStyles.css";
import axios from "axios";
import { converter , storageExists, reverseConverter} from "../../features/app/logic";
import { Button } from "@mui/material";
import { Send } from "@mui/icons-material";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import {CircularProgressWithLabel} from "./Components/ProgressBar"

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

  const [disable, setDisable] = useState(false);

  const win = window.sessionStorage;

  useEffect(() => {
    if (win.getItem("Button")) setDisable(win.getItem("Button"));
  }, [win]);

  useEffect(() => {
    win.setItem("Button", disable);
  }, [disable, win]);

  const ADMIN_SECRET = "hasura";

  const BASE_URL =
    "https://8080-bmerkuri-finalproject-bllyu96ev1d.ws-eu53.gitpod.io/v1/graphql";

  const ADD_POST = gql`
    mutation MyMutation($data: json) {
      insert_userResponse_one(object: { data: $data }) {
        data
      }
    }
  `;

  function progres(array){
    if(Array.isArray(array)){
      return array;
    }
    else {
      return converter(array)
    }
    }

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
    toast.success("You completed the form !", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });
    setTimeout(function(){
      window.location.reload();
   }, 6000);

  };

  return (
    <Page
      withPadding
      title={"Survey App"}
      actions={<Logout />}
      className="navbar"
    >
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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
          <div className="button-container">
            <Button
              disabled={disable}
              variant="contained"
              endIcon={<Send />}
              onClick={submitAnswer}
            >
              Send
            </Button>
            <div className="progresContainer">
            <CircularProgressWithLabel value={(storageExists(localStorage.getItem("Answers")).length / data?.questions.length * 100)} />
            </div>
          </div>          
        </div>
      ) : (
        "loading time..."
      )}
    </Page>
  );
};
