import React from 'react';
import {Route, Routes} from "react-router-dom";
import ProjectPage from "./pages/ProjectsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PrivateRoute from "./components/PrivateRoute";
import TasksPage from "./pages/TasksPage";


//validation create proj

const App = () => {
    return (
        <Routes>
            <Route path={'/projects'} element={<PrivateRoute> <ProjectPage/> </PrivateRoute>}/>
            <Route path={'/login'} element={<LoginPage/>}/>
            <Route path={'/projects/tasks'} element={<TasksPage/>}/>
            <Route path={'/register'} element={<RegisterPage/>}/>
        </Routes>
    );
};

export default App;