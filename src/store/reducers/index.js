import {combineReducers} from "redux";
import {registrationReducer} from "./registrationReducer";
import {loginReducer} from "./loginReducer";
import {tokensReducer} from "./tokensReducer";
import {projectsReducer} from "./projectsReducer";
import {persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage';
import {tasksReducer} from "./tasksReducer";

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['token'],
}

const rootReducer = combineReducers({
    registration: registrationReducer,
    login: loginReducer,
    token: tokensReducer,
    allProjects: projectsReducer,
    tasks: tasksReducer
})

export const persistedReducer = persistReducer(persistConfig, rootReducer)