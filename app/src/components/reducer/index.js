import { FETCH_QUESTIONS, QUESTIONS_ERROR, QUESTIONS_SUCCESS } from "./actions/actions";


export const initialValue = {
    questions : [],
    isLoading : false,
    error : " ",
};

export const reducer = (state=initialValue, action) => {
    switch (action.type) {
        case FETCH_QUESTIONS :
            return {
                ...state,
                isLoading : true
            }
        case QUESTIONS_SUCCESS :
            return {
                ...state,
                questions : [action.payload],
                isLoading : false
            }
        case QUESTIONS_ERROR :
            return {
                ...state,
                error : action.payload
            }
        default :
        return state
    }
} 