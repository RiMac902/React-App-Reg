import React from 'react';
import {Route, Routes,} from "react-router-dom";
import ProjectPage from "./pages/ProjectPage";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";


// token - refresh_token, access_token
// mui
// private route
// projects



const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<ProjectPage/>}/>
            <Route path={'/login'} element={<LoginForm/>}/>
            <Route path={'/register'} element={<SignUpForm/>}/>
        </Routes>
    );
};

export default App;