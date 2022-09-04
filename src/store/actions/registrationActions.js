import axiosInstance from "../../api/axios";

export const SET_EMAIL = 'REG::SET_EMAIL'
export const SET_PASSWORD = 'REG::SET_PASSWORD'
export const SET_USERNAME = 'REG::SET_USERNAME'


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


export const setUsername = (username) => {
  return {
      type: SET_USERNAME,
      payload: username,
  }
}

export const registration = () => async (dispatch, getState) => {

    try {
        const email =  getState().registration.email
        const password =  getState().registration.password
        const username =  getState().registration.username
        if (!email || !password || !username) {
            alert('invalid data')
            return
        }
        const data = await axiosInstance.post('registration', {
            email: email,
            password: password,
            username: username,
            role: 'ADMIN',
        })
        console.log('regThunk -->', data.data)
    } catch (e) {
        alert('this user already exists')
        console.log('regThunk -->', e.response)
    }
}
