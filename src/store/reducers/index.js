import {combineReducers} from "redux";
import {registrationReducer} from "./registrationReducer";
import {loginReducer} from "./loginReducer";
import {tokensReducer} from "./tokensReducer";
import {projectsReducer} from "./projectsReducer";
import {persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage';
import {tasksReducer} from "./tasksReducer";
import {commentsReducer} from "./commentsReducer";

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['token','tasks'],
}

const rootReducer = combineReducers({
    registration: registrationReducer,
    login: loginReducer,
    token: tokensReducer,
    allProjects: projectsReducer,
    tasks: tasksReducer,
    loading: loginReducer,
    comments: commentsReducer,
})


export const persistedReducer = persistReducer(persistConfig, rootReducer)