import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {fetchTasks} from "../store/actions/tasksActions";
import {Box} from "@mui/material";
import Tasks from "../components/Tasks";
import ModalCommentsForm from "../components/ModalCreateTaskForm";

const TasksPage = ({fetchTasks, tasks}) => {
    useEffect(() => {
        fetchTasks()
    }, [])
    return (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" flexDirection='column'>
            <ModalCommentsForm/>
            <Tasks/>
            {/*    Comment / Tasks show btn => (det/edit/show comment) create tasks /  */}
            {/*    Postman => title / description / status / type */}
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