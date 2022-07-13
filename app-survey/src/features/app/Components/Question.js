import React, { useState, useEffect } from "react";
import { converter, reverseConverter } from "../logic";
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

  function setAnswerData(data) {
    setAns(data);
    console.log("ans", data);
  }

  useEffect(() => {
    if (localStorage.getItem("Answers") === null) {
      if (typeof ans === "object") {
        localStorage.setItem("Answers", JSON.stringify(ans));
      }
    } else {
      if (typeof ans === "object") {
        const oldStorage = localStorage.getItem("Answers");
        if(converter(oldStorage).find(ele => ele.id === ans.id) === undefined){
          localStorage.setItem("Answers", [oldStorage, JSON.stringify(ans)]);
        }
        else {
          const oldStorageArr = converter(oldStorage);
          const finalArr = oldStorageArr.filter(ele => ele !== (oldStorageArr.find(ele => ele.id === ans.id)))
          finalArr.push(ans)
          localStorage.setItem("Answers", reverseConverter(finalArr))
        } 
      }
    }
  }, [ans]);

  function handleClick(e) {
    if (`${e.target.value}` === `${ans.answers[0]}`) {
      setScore(10);
    } else {
      setScore(0);
    }
    console.log("Score", score);
  }

  console.log(score);

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
          })}
        </RadioGroup>
        <button type="Submit" onClick={handleClick}>
          Save
        </button>
      </FormControl>
    </Box>
  );
}
