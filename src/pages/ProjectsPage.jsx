import React, {useEffect} from 'react';
import {Box} from "@mui/material";
import {connect} from "react-redux";
import {fetchProjects} from "../store/actions/projectsActions";
import ModalForm from "../components/ModalForm";
import Projects from "../components/Projects";


const ProjectsPage = ({fetchProjects}) => {

    useEffect(() => {
        fetchProjects()
    }, [])

    return (
        <>
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" flexDirection='column'>
                <ModalForm/>
                <Projects/>
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

}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsPage);