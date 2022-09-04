import React from 'react';
import {connect} from "react-redux";
import {Box, Button, ButtonGroup, Card, Stack, Typography} from "@mui/material";

const Projects = ({projects}) => {
    return (
        <Box display="flex" flexDirection='column-reverse' sx={{maxWidth: 750}}>
            {projects.map(project => (
                <Card variant='outlined' sx={{margin: 1, minWidth: 750, borderRadius: 5}}>
                    <Box sx={{margin: 3}}>

                        <Typography gutterBottom variant="h4">{project.title}</Typography>
                        <Typography sx={{fontSize: 24}} gutterBottom variant="body1" color={'text.secondary'}>{project.description}</Typography>
                        <Typography gutterBottom variant="subtitle1" color={'text.secondary'}>Tasks count: {project.task_count}</Typography>
                        <Typography gutterBottom variant="subtitle1" color={'text.secondary'}>Users: {project.users.length}</Typography>
                        <Stack>
                            <ButtonGroup sx={{marginTop: 2}}>
                                <Button variant="outlined" color={'error'}>Delete</Button>
                                <Button variant="contained">Edit</Button>
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

export default connect(mapStateToProps, null)(Projects);