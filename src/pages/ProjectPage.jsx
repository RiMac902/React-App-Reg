import React from 'react';
import { Navigate } from "react-router-dom";

const ProjectPage = () => {
    return (
        <div>
            <Navigate to="/login"/>
            <h1>ProjectPage</h1>
        </div>
    );
};

export default ProjectPage;