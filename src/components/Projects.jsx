import React from 'react';
import {connect} from "react-redux";
import {Box, Button, ButtonGroup, Card, Stack, Typography} from "@mui/material";
import {deleteProject} from "../store/actions/projectsActions";
import {setProjectId} from "../store/actions/tasksActions";
import {useNavigate} from "react-router-dom";
import ModalEditProjectForm from "./ModalEditProjectForm";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Projects = ({projects, deleteProject, setProjectId}) => {
    const navigate = useNavigate()

    const goToTasks = () => {
        navigate('/projects/tasks')
    }

    return (
        <Box display="flex" flexDirection='column-reverse' sx={{maxWidth: 750}}>
            {projects.map(project => (
                <Card key={project.id} variant='outlined' sx={{margin: 1, minWidth: 750, borderRadius: 5}}>
                    <Box sx={{margin: 3}}>
                        <Typography gutterBottom variant="h4">{project.title}</Typography>
                        <Typography sx={{fontSize: 24}} gutterBottom variant="body1"
                                    color={'text.secondary'}>{project.description}</Typography>
                        <Typography gutterBottom variant="subtitle1"
                                    color={'text.secondary'}>Tasks: {project.task_count}</Typography>
                        <Box display="flex" alignItems='stretch'>
                            <AccountCircleIcon color={'primary'}/>
                            <Typography variant="subtitle1" color={'text.secondary'}>{project.users.length}</Typography>
                        </Box>
                        <Stack>
                            <ButtonGroup sx={{marginTop: 2}}>
                                <Button variant="outlined" color={'error'}
                                        onClick={() => deleteProject(project.id)}>Delete</Button>
                                <ModalEditProjectForm projectID={project.id} projectTitle={projects.title} projectDescription={projects.description}/>
                                <Button variant="contained" onClick={() => {
                                    setProjectId(project.id)
                                    goToTasks()
                                }}>Tasks</Button>
                            </ButtonGroup>
                        </Stack>
                    </Box>
                </Card>
            ))}
        </Box>
    );
};

const mapStateToProps = (state) => {
    return {
        projects: state.allProjects.projects,
    }
}

const mapDispatchToProps = {
    deleteProject,
    setProjectId,
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects);