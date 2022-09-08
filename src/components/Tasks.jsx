import React from 'react';
import {Box, Button, ButtonGroup, Card, CardContent, Typography} from "@mui/material";
import {connect} from "react-redux";
import {deleteTask} from "../store/actions/tasksActions";
import ModalEditTaskForm from "./ModalEditTaskForm";
import UserListBtn from "./UserListBtn";


const Tasks = ({tasks, deleteTask}) => {

    return (
        <Box display={'flex'}>
            {tasks.map(task => (
                <Card key={task.id} variant='outlined' sx={{borderRadius: 5, minWidth: 400, margin: 1}}>
                    <CardContent>
                        <Box display="flex" flexDirection='column'>
                            <Typography gutterBottom variant="h4">{task.title}</Typography>
                            <Typography gutterBottom variant="h6"
                                        sx={{color: '#0288d1'}}>Status: {task.status.title}</Typography>
                            <Typography gutterBottom variant="body1"
                                        color={'text.secondary'}>{task.description}</Typography>
                                <ButtonGroup sx={{marginY: 3}}>
                                    <Button variant="outlined" color={'error'} onClick={() => deleteTask(task.id)}>Delete</Button>
                                    <ModalEditTaskForm taskID={task.id} taskTitle={task.title} taskDescription={task.description}/>
                                </ButtonGroup>
                            <UserListBtn taskId={task.id} user={task.user}/>
                        </Box>
                    </CardContent>
                </Card>
            ))}
        </Box>
    );
};


const mapStateToProps = (state) => {
    return {
        tasks: state.tasks.tasks,
    }
}

const mapDispatchToProps = {
    deleteTask,
}


export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
