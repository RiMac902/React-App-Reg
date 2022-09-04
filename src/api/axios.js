import axios from "axios";
import {store} from "../store";

const axiosInstance = axios.create({
    baseURL: 'https://jirapet-python.herokuapp.com/api/',
    timeout: 10000,
})

axiosInstance.interceptors.request.use((config) => {
        const token = store.getState().token.access_token
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`
        }
        return config
    }, error => {
        Promise.reject(error)
    }
)

export default axiosInstance;