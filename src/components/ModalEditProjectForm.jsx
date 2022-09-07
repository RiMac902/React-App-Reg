import React, {useState} from 'react';
import {Box, Button, Card, CardContent, TextField, Typography} from "@mui/material";
import {StyledModal} from "./ModalCreateProjectForm";
import {editProject} from "../store/actions/projectsActions";
import {useDispatch} from "react-redux";


const ModalEditProjectForm = (props) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const dispatch = useDispatch()
    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(editProject(props.projectID, title, description, onSuccess, onError))
    }
    const onSuccess = () => {
        setOpen(false)
        alert('Project successfully edited')
    }
    const onError = () => {
        alert('Project with title already exists')
    }


    return (
        <>
            <Button onClick={handleOpen} variant="outlined" color="secondary">Edit</Button>
            <StyledModal open={open} onClose={handleClose}>
                <Box>
                    <Card sx={{borderRadius: 5}}>
                        <CardContent>
                            <Typography variant={'h6'} color={'gray'}>Edit Project</Typography>
                            <form onSubmit={onSubmit}>
                                <TextField
                                    fullWidth={true}
                                    color="secondary"
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
                                    color="secondary"
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
                                    color="secondary"
                                    sx={{marginTop: 2}}
                                    fullWidth={true}
                                    onClick={() => editProject(props.projectID)}
                                >
                                    Edit Project
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </Box>
            </StyledModal>
        </>
    );
};





export default ModalEditProjectForm;
