import React, {useState} from 'react';
import {Box, Button, Card, CardContent, TextField, Typography} from "@mui/material";
import {StyledModal} from "./ModalCreateProjectForm";
import {useDispatch} from "react-redux";
import {createNewTask} from "../store/actions/tasksActions";


const ModalCreateTaskForm = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const dispatch = useDispatch()
    const onSuccess = () => {
        setOpen(false)
        alert('Task successfully created')
    }
    const onError = () => {
        alert('Task with title already exists')
    }
    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(createNewTask(title, description, onSuccess, onError))
    }



    return (
        <>
            <Button onClick={handleOpen} variant="outlined" size="large" sx={{marginBottom: 2}}>Create Task</Button>
            <StyledModal open={open} onClose={handleClose}>
                <Box>
                    <Card sx={{borderRadius: 5}}>
                        <CardContent>
                            <Typography variant={'h6'} color={'gray'}>Create Task</Typography>
                            <form onSubmit={onSubmit}>
                                <TextField
                                    fullWidth={true}
                                    label="Title"
                                    placeholder="Write something ..."
                                    margin="normal"
                                    variant="outlined"
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                                <TextField
                                    fullWidth={true}
                                    label="Description"
                                    placeholder="Describe something ..."
                                    margin="normal"
                                    variant="outlined"
                                    type="text"
                                    multiline={true}
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                                <Button
                                    type={'submit'}
                                    variant="contained"
                                    sx={{marginTop: 2}}
                                    fullWidth={true}>
                                    Create Task
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </Box>
            </StyledModal>
        </>
    );
};


export default ModalCreateTaskForm;