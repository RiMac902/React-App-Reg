import {SET_EMAIL, SET_PASSWORD, SET_USERNAME} from "../actions/registrationActions";

const initialState = {
    email: '',
    password: '',
    username: '',
}


export const registrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_EMAIL:
            return {
                ...state,
                email: action.payload
            }

        case SET_PASSWORD:
            return {
                ...state,
                password: action.payload
            }
        case SET_USERNAME:
            return {
                ...state,
                username: action.payload
            }
        default:
            return state
    }
}


