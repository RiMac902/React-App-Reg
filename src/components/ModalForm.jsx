import React, {useState} from 'react';
import {Box, Button, Card, CardContent, Modal, styled, TextField, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {createNewProject} from "../store/actions/projectsActions";

const ModalForm = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const dispatch = useDispatch()
    const onSuccess = () => {
        setOpen(false)
        alert('Project successfully created')
    }
    const onError = () => {
        alert('Project with title already exists')
    }
    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(createNewProject(title, description, onSuccess, onError))
    }


    return (
        <>
            <Button onClick={handleOpen} variant="outlined">Create Project</Button>
            <StyledModal open={open} onClose={handleClose}>
                <Box>
                    <Card sx={{borderRadius: 5}}>
                        <CardContent>
                            <Typography variant={'h6'} color={'gray'}>Create Project</Typography>
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
                                    // error={!!errors?.title}
                                    // helperText={errors?.title ? errors.title.message : null}
                                    multiline={true}
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}

                                />

                                <Button
                                    type={'submit'}
                                    variant="contained"
                                    sx={{marginTop: 2}}
                                    fullWidth={true}>
                                    Create Project
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </Box>
            </StyledModal>
        </>
    );
};

const StyledModal = styled(Modal)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
})

export default ModalForm;