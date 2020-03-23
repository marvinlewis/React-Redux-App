import React from "react";
import "./questions.css";

const QuestionLine = (props) => {
    return (
        <div>
            <p>{props.question.question}</p>
            
            <button
            id="true"
            value={true}
            name="true">
                True
            </button>

            <button
            value={false} 
            id="false"
            name="false">
                False
            </button>
        </div>
    )
}

export default QuestionLine