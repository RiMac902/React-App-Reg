import React from 'react';
import {connect} from "react-redux";
import {registration, setEmail, setPassword, setUsername} from "../store/actions/registrationActions";
import {Link as RouterLink} from "react-router-dom";
import {Box, Button, Card, TextField, Typography} from "@mui/material";
import LinkMUI from '@mui/material/Link';

const SingUpForm = (props) => {

    const onSubmit = (e) => {
        e.preventDefault()
        props.registration()
    }

    return (
        <Box display="flex"
             justifyContent="center"
             alignItems="center"
             minHeight="100vh"
             flexDirection='column'>
            <Card variant='outlined' sx={{padding: 5}}>
                <Box sx={{display: 'flex', justifyContent: 'center'}}>
                    <Typography gutterBottom variant='h4'>Create an account</Typography>
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'center'}}>
                    <form onSubmit={onSubmit}>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'column',
                            width: '300px'
                        }}>
                            <TextField
                                fullWidth={true}
                                label="Username"
                                placeholder="Enter your username"
                                margin="normal"
                                variant="outlined"
                                type="text"
                                value={props.username}
                                onChange={(e) => props.setUsername(e.target.value)}/>

                            <TextField
                                fullWidth={true}
                                label="Email"
                                placeholder="Enter your email"
                                margin="normal"
                                variant="outlined"
                                type="email"
                                value={props.email}
                                onChange={(e) => props.setEmail(e.target.value)}/>

                            <TextField
                                fullWidth={true}
                                label="Password"
                                placeholder="Enter your password"
                                margin="normal"
                                variant="outlined"
                                type="password"
                                value={props.password}
                                onChange={(e) => props.setPassword(e.target.value)}/>

                            <Button
                                type={'submit'}
                                variant="contained"
                                sx={{margin: 2}}
                                fullWidth={true}>
                                Sing Up
                            </Button>
                        </Box>
                    </form>
                </Box>
                <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <LinkMUI component={RouterLink}
                             to={'/login'}
                             underline="hover"
                             color="primary"
                             variant='subtitle1'
                             sx={{marginTop: 1}}>
                        Already have an account?
                    </LinkMUI>
                </Box>
            </Card>
        </Box>
    );
};


const mapStateToProps = (state) => {
    return {
        email: state.registration.email,
        password: state.registration.password,
        username: state.registration.username,
    }
}
const mapDispatchToProps = {
    setEmail,
    setPassword,
    setUsername,
    registration,
}

export default connect(mapStateToProps, mapDispatchToProps)(SingUpForm);