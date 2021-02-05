export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const SET_ID = 'SET_ID'
export const SET_URL = 'SET_URL'


export const login = () => {
    return ({type: LOGIN})
}

export const logout = () => {
    return ({type: LOGOUT})
}

export const setId = (userId) => {
    return ({type: SET_ID, payload: userId})
}

export const setUrl = (url) => {
    console.log(`hi, Im in the action, url is ${url}`)
    return ({type: SET_URL, payload: url})
}