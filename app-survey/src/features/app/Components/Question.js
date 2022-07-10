import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio
} from "@mui/material";

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
      <FormControl style={{color: "white", textAlign:"left"}}>
        <FormLabel id="demo-radio-buttons-group-label" style={{color: "white", textAlign:"left",width: "38ch"}}>
          {props?.question}
        </FormLabel>
        {console.log("answerProps", props?.answers?.data)}
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          style={{color: "white", textAlign:"left"}}
        >
          {Object.values(props?.answers?.data).map((ans) => {
            return (
              <FormControlLabel value={ans} control={<Radio />} label={ans} style={{accentColor: "white", textAlign:"left"}}/>
            )
          })}
        </RadioGroup>
      </FormControl>
    </Box>
  );
}
