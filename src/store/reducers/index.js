import {combineReducers} from "redux";
import {registrationReducer} from "./registrationReducer";
import {loginReducer} from "./loginReducer";
import {tokensReducer} from "./tokensReducer";


export const rootReducer = combineReducers({
    registration: registrationReducer,
    login: loginReducer,
    token: tokensReducer,
})