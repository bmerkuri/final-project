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
        backgroundColor: "#EEEEFF",
        padding: "2rem",
        width: "50%"
      }}
    >
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">
          {props?.question}
        </FormLabel>
        {console.log("answerProps", props?.answers)}
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          {/* {props?.answers?.data.map((item) => console.log("item", item))}
          <FormControlLabel
            value={props.answers[0]}
            control={<Radio />}
            label={props.answers[0]}
          />
          <FormControlLabel
            value={props.answers[1]}
            control={<Radio />}
            label={props.answers[1]}
          />
          <FormControlLabel
            value={props.answers[2]}
            control={<Radio />}
            label={props.answers[2]}
          /> */}
        </RadioGroup>
      </FormControl>
    </Box>
  );
}
