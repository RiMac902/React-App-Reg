import React from 'react';
import {Route, Routes} from "react-router-dom";
import ProjectPage from "./pages/ProjectPage";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import PrivateRoute from "./components/PrivateRoute";
import HomePage from "./pages/HomePage";


// token - refresh_token, access_token in BLL - done
// mui - done
// private route - done
// projects - done

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<HomePage/>}/>
            <Route path={'/projects'} element={<PrivateRoute> <ProjectPage/> </PrivateRoute>}/>
            <Route path={'/login'} element={<LoginForm/>}/>
            <Route path={'/register'} element={<SignUpForm/>}/>
        </Routes>
    );
};

export default App;