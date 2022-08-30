import React from 'react';
import { Navigate } from "react-router-dom";
import {Box, Typography} from "@mui/material";

const HomePage = () => {
    return (
        <Box display="flex"
             justifyContent="center"
             alignItems="center"
             minHeight="100vh">
            <Navigate to="/login"/>
            <Typography variant={'h1'}>Home</Typography>
        </Box>
    );
};

export default HomePage;