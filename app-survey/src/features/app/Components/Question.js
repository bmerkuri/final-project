import { setAnswerData } from "../App";
import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio
} from "@mui/material";


export let storageData;

export default function Question(props) {
  
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
                  storageData = {
                    id: `${props?.id}`,
                    question: `${props?.question}`,
                    answer: `${e.target.value}`
                  };
                }}
                style={{ accentColor: "white", textAlign: "left" }}
              />
            );
          })}
        </RadioGroup>
      </FormControl>
    </Box>
  );
}
