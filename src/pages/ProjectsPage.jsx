import React, {useEffect} from 'react';
import {Box, Button} from "@mui/material";
import {connect} from "react-redux";
import {fetchProjects} from "../store/actions/projectsActions";
import ModalCreateProjectForm from "../components/ModalCreateProjectForm";
import Projects from "../components/Projects";
import {logout} from "../store/actions/loginActions";


const ProjectsPage = ({fetchProjects, logout}) => {
    useEffect(() => {
        fetchProjects()
    }, [])

    return (
        <>
            <Box minHeight="10vh">
                <Button onClick={() => {logout()}} variant="outlined" sx={{margin: 2}}>Logout</Button>
                <Box display="flex" justifyContent="center" alignItems="center" minHeight="90vh" flexDirection='column'>
                    <ModalCreateProjectForm/>
                    <Projects/>
                </Box>
            </Box>
        </>
    );
};


const mapStateToProps = (state) => {
    return {
        projects: state.allProjects.projects,
    }
}
const mapDispatchToProps = {
    fetchProjects,
    logout,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsPage);