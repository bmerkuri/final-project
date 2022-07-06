import React from "react";
import Question from "../Questions/Question";

function Page() {
  return (
    <div>
      <Question answers = {["hjdghs", "hello", "beni", "ale"]} question = "What is your name?"/>
      <Question answers = {["20", "21", "24", "35"]} question = "How old are you?"/>
    
    </div>
  );
}

export default Page;
