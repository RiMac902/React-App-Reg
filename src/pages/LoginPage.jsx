import React from 'react';
import {connect} from "react-redux";
import {login, setEmail, setPassword} from "../store/actions/loginActions";
import {Link as RouterLink} from "react-router-dom";
import {Box, Button, Card, TextField, Typography} from "@mui/material";
import LinkMUI from "@mui/material/Link";
import { useNavigate } from "react-router-dom";

const LoginPage = (props) => {

    const onSubmit = (e) => {
        e.preventDefault()
        props.login(navigateToProjects)

    }

    const navigate = useNavigate()

    const navigateToProjects = () => {
        navigate('/projects')
    }

    return (
        <Box display="flex"
             justifyContent="center"
             alignItems="center"
             minHeight="100vh"
             flexDirection='column'>
            <Card variant='outlined' sx={{padding: 5, borderRadius: 5}}>
                <Box sx={{display: 'flex', justifyContent: 'center'}}>
                    <Typography gutterBottom variant="h4">Welcome back</Typography>
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
                                Login
                            </Button>
                        </Box>
                    </form>
                </Box>
                <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <LinkMUI
                        component={RouterLink}
                        to={'/register'}
                        underline="hover"
                        color="primary"
                        variant='subtitle1'
                        sx={{marginTop: 1}}>
                        Need an account?
                    </LinkMUI>
                </Box>
            </Card>
        </Box>
    );
};

const mapStateToProps = (state) => {
    return {
        email: state.login.email,
        password: state.login.password,
        username: state.login.username,
    }
}
const mapDispatchToProps = {
    setEmail,
    setPassword,
    login,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);