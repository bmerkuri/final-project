import React from "react"

export default function Question(props) {
    const question=props.question;
    const answers=props.answers;
    const score=props.score;

    return(
        <div>
        <h1>{question}</h1>
        <input>{answers}</input>
        <h1>{score}</h1>
        </div>        
    );
}