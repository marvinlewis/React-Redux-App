import React from "react";
import QuestionLine from "./QuestionLine";
import "./questions.css";


const Questions = (props) => {
    console.log(props.question)
    return (
        <div className="questionbox">
            {props.question.map(item => 
            <QuestionLine question={item} />
            )}
        </div>
    )
}

export default Questions;