import axiosInstance from "../../api/axios";
import {fetchProjects} from "./projectsActions";

export const SET_TASKS = 'TASKS::SET_TASKS'
export const SET_PROJECT_ID = 'TASKS::SET_PROJECT_ID'

export const setTasks = (tasks) => {
    return {
        type: SET_TASKS,
        payload: tasks
    }
}

export const setProjectId = (projectId) => {
    return {
        type: SET_PROJECT_ID,
        payload: projectId
    }
}


export const fetchTasks = () => async (dispatch, getState) => {
    try {
        const projectId = getState().tasks.projectId
        const data = await axiosInstance.get(`projects/${projectId}/tasks`)
        dispatch(setTasks(data.data.tasks))
        console.log('tasksThunk -->', data.data)
    } catch (e) {
        console.log('tasksError -->', e)
    }
}


export const createNewTask = ( title, description, status_id, type_id, onSuccess, onError) => async (dispatch, getState) => {
    try {
        const projectId = getState().tasks.projectId;
        const data = await axiosInstance.post(`projects/${projectId}/tasks`, {
            title: title,
            description: description,
            status_id: status_id,
            type_id: type_id,
        })
        console.log('createNewTaskThunk -->', data.data)
        onSuccess()
        dispatch(fetchTasks())
    } catch (e) {
        console.log('createNewTaskError -->', e)
        onError()
    }
}