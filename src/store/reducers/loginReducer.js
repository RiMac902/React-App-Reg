import {SET_EMAIL, SET_PASSWORD} from "../actions/loginActions";

const initialState = {
    email: '',
    password: '',
}


export const loginReducer = (state = initialState, action) => {
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
        default:
            return state
    }
}


