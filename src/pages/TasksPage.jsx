import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {fetchTasks} from "../store/actions/tasksActions";
import {Box} from "@mui/material";
import Tasks from "../components/Tasks";
import ModalCommentsForm from "../components/ModalCreateTaskForm";

const TasksPage = ({fetchTasks}) => {
    useEffect(() => {
        fetchTasks()
    }, [])
    return (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" flexDirection='column'>
            <ModalCommentsForm/>
            <Tasks/>
            {/* Loading => <CircularProgress /> and Redux  */}
        </Box>
    );
};


const mapStateToProps = (state) => {
    return {
        tasks: state.tasks.tasks,
    }
}

const mapDispatchToProps = {
    fetchTasks,
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksPage);