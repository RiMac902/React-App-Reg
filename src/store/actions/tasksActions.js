import axiosInstance from "../../api/axios";

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
        dispatch(setTasks(data.data.tasks.sort((a, b) => a.id - b.id)))
        console.log('tasksThunk -->', data.data)
    } catch (e) {
        console.log('tasksError -->', e)
    }
}


export const createNewTask = (title, description, onSuccess, onError) => async (dispatch, getState) => {
    try {
        const projectId = getState().tasks.projectId;
        const data = await axiosInstance.post(`projects/${projectId}/tasks`, {
            title: title,
            description: description,
            status_id: 1,
            type_id: 1,
        })
        console.log('createNewTaskThunk -->', data.data)
        onSuccess()
        dispatch(fetchTasks())
    } catch (e) {
        console.log('createNewTaskError -->', e)
        onError()
    }
}



export const editTask = (id, title, description, onSuccess, onError) => async (dispatch, getState) => {
    try {
        const projectId = getState().tasks.projectId;
        const data = await axiosInstance.put(`projects/${projectId}/tasks/${id}`, {
            title: title,
            description: description,
        })
        console.log('editTask -->', data.data)
        onSuccess()
        dispatch(fetchTasks())
    } catch (e) {
        console.log('editTaskError -->', e)
        onError()
    }
}


export const deleteTask = (id) => async (dispatch, getState) => {
    try {
        const projectId = getState().tasks.projectId;
        const data = await axiosInstance.delete(`projects/${projectId}/tasks/${id}`);
        console.log('deleteTask -->', data.data)
        dispatch(fetchTasks());
    } catch (e) {
        console.log('deleteTaskError', e);
    }
};


export const assignUserToTask = (id, userId, onSuccess) => async (dispatch, getState) => {
    try {
        const projectId = getState().tasks.projectId;
        const data = await axiosInstance.put(`projects/${projectId}/tasks/${id}`, {
            user_id: userId,
        })
        onSuccess(data.data.user.username)
        dispatch(fetchTasks())
        console.log('assignUserToTask -->', data.data)
    } catch (e) {
        console.log('assignUserToTaskError', e);
    }
}