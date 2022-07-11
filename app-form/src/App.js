import React from "react";
import "./App.css";
import { Get } from "./Graphql/Query";
import { useQuery } from "@apollo/client";

function App() {
  const { loading, error, data } = useQuery(Get);
  console.log(data);
  return (
    <div>
      <label>Question</label>
      <input type="text" placeholder="Enter Question" />
      <button type="Submit">Submit</button>
    </div>
  );
}

export default App;
