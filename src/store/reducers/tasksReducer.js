import {SET_PROJECT_ID, SET_TASKS} from "../actions/tasksActions";

const initialState = {
    projectId: null,
    tasks: [],
}


export const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TASKS:
            return {
                ...state,
                tasks: action.payload
            }
        case SET_PROJECT_ID:
            return {
                ...state,
                projectId: action.payload
            }
        default:
            return state
    }
}




