import axios from "axios";

export const FETCH_QUESTIONS = "FETCH_QUESTIONS";
export const QUESTIONS_SUCCESS = "QUESTIONS_SUCCESS";
export const QUESTIONS_ERROR = "QUESTIONS_ERROR";

export const getQuestions = () => dispatch => {
    dispatch({ type : FETCH_QUESTIONS });
    axios.get("https://opentdb.com/api.php?amount=10&type=boolean")
    .then(res => {
        //console.log("response :", res);
        dispatch({ type : QUESTIONS_SUCCESS, payload : res.data.results})
    })
    // .catch(res => {
    //     console.log("error :", res);
    //     dispatch({ type : QUESTIONS_ERROR, payload: res})
    // })
}