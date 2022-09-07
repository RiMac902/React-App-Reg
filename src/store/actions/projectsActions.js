import axiosInstance from "../../api/axios";

export const SET_PROJECTS = 'PROJECTS::GET_PROJECTS'


export const setProjects = (projects) => {
    return {
        type: SET_PROJECTS,
        payload: projects
    }
}

export const fetchProjects = () => async (dispatch) => {
    try {
        const data = await axiosInstance.get('projects')
        console.log('projectsThunk -->', data.data)
        dispatch(setProjects(data.data))
    } catch (e) {
        console.log('projectsError -->', e)
    }
}

export const createNewProject = (title, description, onSuccess, onError) => async (dispatch) => {
    try {
        const data = await axiosInstance.post('projects', {
            title: title,
            description: description,
        })
        console.log('projectsThunk -->', data.data)
        onSuccess()
        dispatch(fetchProjects())
    } catch (e) {
        console.log('projectsError -->', e)
        onError()
    }
}

export const deleteProject = (id) => async (dispatch) => {
    try {
        const data = await axiosInstance.delete(`projects/${id}`)
        console.log('projectsDelete -->', data.data)
        dispatch(fetchProjects())
    } catch (e) {
        console.log('projectsError -->', e)
    }
}

export const editProject = (id, title, description, onSuccess, onError) => async (dispatch) => {
    try {
        const data = await axiosInstance.put(`projects/${id}`, {
            title: title,
            description: description,
        })
        console.log('editProject -->', data.data)
        onSuccess()
        dispatch(fetchProjects())
    } catch (e) {
        console.log('projectsError -->', e)
        onError()
    }
}