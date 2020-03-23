import React from "react";
import { connect } from "react-redux";
import { getQuestions } from "./reducer/actions/actions";
import Questions from "./Questions";
import Loader from 'react-loader-spinner'
import "./loading.css";

const QuestionsPage = (props) => {

    return (
        <div>
            <button className="questions" onClick={props.getQuestions}>
                Questions
            </button>
            {props.isLoading && <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000}
            />}
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
        questions: state.questions,
        isLoading: state.isLoading,
        error: state.error,
    }
}

export default connect(
    mapStateToProps,
    { getQuestions }
)(QuestionsPage)