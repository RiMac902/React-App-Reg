import {SET_PROJECTS} from "../actions/projectsActions";

const initialState = {
    projects: [],

}


export const projectsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROJECTS:
            return {
                ...state,
                projects: action.payload
            }

        default:
            return state
    }
}


