import axiosInstance from "../../api/axios";

export const SET_COMMENTS = 'COMMENTS::SET_COMMENTS'


export const setComments = (comments) => {
    return {
        type: SET_COMMENTS,
        payload: comments
    }
}

export const fetchComments = () => async (dispatch) => {
    try {
        const data = await axiosInstance.get(`projects/4/tasks/42/comments`)
        console.log('commentsThunk -->', data.data)
        dispatch(setComments(data.data))
    } catch (e) {
        console.log('commentsError -->', e)
    }
}