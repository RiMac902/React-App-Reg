import React, {useEffect, useState} from 'react';
import {Button, Menu, MenuItem} from "@mui/material";
import axiosInstance from "../api/axios";
import {useDispatch} from "react-redux";
import {assignUserToTask} from "../store/actions/tasksActions";

const UserListBtn = ({taskId, user}) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [username, setUsername] = useState(user?.username)
    const [allUsers, setAllUsers] = useState([])
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const onSuccess = (name) => {
        setUsername(name)
    }
    const dispatch = useDispatch()
    const handleClose = (user) => {
        setAnchorEl(null)
        dispatch(assignUserToTask(taskId, user.id, onSuccess))
    };

    useEffect(() => {
        axiosInstance.get('users')
            .then(result => setAllUsers(result.data))
    }, [])

    return (
        <>
            <Button
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                {
                    username ? username : 'not assigned'
                }
            </Button>

            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {allUsers.map(user => (
                    <MenuItem key={user.id} onClick={() => handleClose(user)}>{user.username}</MenuItem>
                ))}

            </Menu>
        </>
    );
};

export default UserListBtn;