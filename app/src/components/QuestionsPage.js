import React from "react";
import { connect } from "react-redux";
import { getQuestions } from "./reducer/actions/actions";
import Questions from "./Questions";

const QuestionsPage = (props) => {

    return (
        <div>
            <button onClick={props.getQuestions}>
                Questions
            </button>
            {props.isLoading && <h2>Loading ...</h2>}
            {props.questions.map(question => {
               //console.log(question)
                return (
                    <Questions 
                    key={Date.now()}
                    question={question} />    
                )
            })}  
        </div>
    )
}

const mapStateToProps = state => {
    return {
        questions : state.questions,
        isLoading : state.isLoading,
        error : state.error,
    }
}

export default connect(
    mapStateToProps,
    { getQuestions }
)(QuestionsPage)