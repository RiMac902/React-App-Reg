import React from 'react';
import {Route, Routes} from "react-router-dom";
import ProjectPage from "./pages/ProjectsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PrivateRoute from "./components/PrivateRoute";
import HomePage from "./pages/HomePage";
import {useDispatch} from "react-redux";
import {Button} from "@mui/material";
import {logout} from "./store/actions/loginActions";


//mui proj
//del proj
//list title / delete proj btn = (thunkDeleteProj(delete/id)) : dispatch fetch proj
//validation create proj

const App = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <Button onClick={() => {dispatch(logout())}} variant="outlined">Logout</Button>
        <Routes>
            <Route path={'/'} element={<HomePage/>}/>
            <Route path={'/projects'} element={<PrivateRoute> <ProjectPage/> </PrivateRoute>}/>
            <Route path={'/login'} element={<LoginPage/>}/>
            <Route path={'/register'} element={<RegisterPage/>}/>
        </Routes>
        </div>
    );
};

export default App;