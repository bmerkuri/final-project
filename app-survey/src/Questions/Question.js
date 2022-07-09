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
        {console.log("answerProps", props?.answers?.data)}
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          {Object.values(props?.answers?.data).map((ans) => {
            return (
              <FormControlLabel value={ans} control={<Radio />} label={ans} />
            )
          })}
        </RadioGroup>
      </FormControl>
    </Box>
  );
}
