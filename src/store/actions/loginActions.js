import axiosInstance from "../../api/axios";
import {setAccessToken, setRefreshToken} from "./tokensAction";

export const SET_EMAIL = 'LOG::SET_EMAIL'
export const SET_PASSWORD = 'LOG::SET_PASSWORD'


export const setEmail = (email) => {
    return {
        type: SET_EMAIL,
        payload: email,
    }
}

export const setPassword = (password) => {
    return {
        type: SET_PASSWORD,
        payload: password,
    }
}


export const login = (navigateToProjects) => async (dispatch, getState) => {
    try {
        const email = getState().login.email
        const password = getState().login.password
        if (!email || !password) {
            alert('invalid data')
            return
        }
        const data = await axiosInstance.post('login', {
            email: email,
            password: password,
        })
        console.log('loginThunk -->', data.data)
        dispatch(setAccessToken(data.data.access_token))
        dispatch(setRefreshToken(data.data.refresh_token))
        navigateToProjects()
    } catch (e) {
        alert(e.response.data.detail)
        console.log('loginThunk -->', e.response.data.detail)
    }
}

export const logout = () => async (dispatch, getState) => {
    try {
        dispatch(setAccessToken(null))
        dispatch(setRefreshToken(null))
    } catch (e) {
        alert(e.response.data.detail)
        console.log('loginThunk -->', e.response.data.detail)
    }
}
