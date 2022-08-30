import {combineReducers} from "redux";
import {registrationReducer} from "./registrationReducer";
import {loginReducer} from "./loginReducer";


export const rootReducer = combineReducers({
    registration: registrationReducer,
    login: loginReducer,
})