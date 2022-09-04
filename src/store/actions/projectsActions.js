import axiosInstance from "../../api/axios";


export const SET_PROJECTS = 'PROJECTS::GET_PROJECTS'


export const setProjects = (projects) => {
    return {
        type: SET_PROJECTS,
        payload: projects
    }
}


export const fetchProjects = () => async (dispatch, getState) => {
    try {
        const data = await axiosInstance.get('projects')
        console.log('projectsThunk -->', data.data)
        dispatch(setProjects(data.data))
    } catch (e) {
        console.log('projectsError -->', e)
    }
}

export const createNewProject = (title, description, onSuccess, onError) => async (dispatch, getState) => {
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
