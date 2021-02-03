export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const SET_ID = 'SET_ID'


export const login = () => {
    return ({type: LOGIN})
}

export const logout = () => {
    return ({type: LOGOUT})
}

export const setId = (userId) => {
    return ({type: SET_ID, payload:userId})
}