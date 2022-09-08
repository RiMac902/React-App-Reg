import {SET_COMMENTS} from "../actions/commentsAction";

const initialState = {
    comments: '',
}


export const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COMMENTS:
            return {
                ...state,
                comments: action.payload
            }
        default:
            return state
    }
}


