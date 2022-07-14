import React, { useState, useEffect } from "react";
import { converter, reverseConverter , storageExists} from "../logic";
import {
  Box,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio
} from "@mui/material";

export default function Question(props) {
  const [ans, setAns] = useState();
  const [score, setScore] = useState(0);

  const prevAnswers = storageExists(localStorage.getItem("Answers"))

  function setAnswerData(data) {
    setAns(data);
    console.log(prevAnswers.find((ele) => ele.answer === "30%")===undefined);
  }

  useEffect(() => {
    if (localStorage.getItem("Answers") === null) {
      if (typeof ans === "object") {
        localStorage.setItem("Answers", JSON.stringify(ans));
      }
    } else {
      if (typeof ans === "object") {
        const oldStorage = localStorage.getItem("Answers");
        if (
          converter(oldStorage).find((ele) => ele.id === ans.id) === undefined
        ) {
          localStorage.setItem("Answers", [oldStorage, JSON.stringify(ans)]);
        } else {
          const oldStorageArr = converter(oldStorage);
          const finalArr = oldStorageArr.filter(
            (ele) => ele !== oldStorageArr.find((ele) => ele.id === ans.id)
          );
          finalArr.push(ans);
          localStorage.setItem("Answers", reverseConverter(finalArr));
        }
      }
    }
  }, [ans]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        boxShadow:
          " rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
        margin: "3rem auto",
        backgroundColor: "rgba(0,0,0, 0.6)",
        padding: "2rem",
        width: "50%",
        borderRadius: "10px",
        color: "white"
      }}
    >
      <FormControl style={{ color: "white", textAlign: "left" }}>
        <FormLabel
          id="demo-radio-buttons-group-label"
          style={{ color: "white", textAlign: "left", width: "38ch" }}
        >
          {props?.question}
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          style={{ color: "white", textAlign: "left" }}
        >
          {Object.values(props?.answers?.data).map((answer) => {
            if (prevAnswers.find((ele) => ele.answer === answer) !== undefined) {
              return (
                <FormControlLabel
                  value={answer}
                  control={<Radio />}
                  label={answer}
                  checked={true}
                  onChange={(e) => {
                    setAnswerData({
                      id: `${props?.id}`,
                      question: `${props?.question}`,
                      answer: `${e.target.value}`
                    });
                  }}
                  style={{ accentColor: "white", textAlign: "left" }}
                />
              );
            }
            else {
              return (
                <FormControlLabel
                  value={answer}
                  control={<Radio />}
                  label={answer}
                  
                  onChange={(e) => {
                    setAnswerData({
                      id: `${props?.id}`,
                      question: `${props?.question}`,
                      answer: `${e.target.value}`
                    });
                  }}
                  style={{ accentColor: "white", textAlign: "left" }}
                />
              );
            }
          })}
        </RadioGroup>
      </FormControl>
    </Box>
  );
}
