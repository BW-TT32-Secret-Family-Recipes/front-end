export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const ADD_CATEGORY = 'ADD_CATEGORY'


export const login = () => {
    return ({type: LOGIN})
}

export const logout = () => {
    return ({type: LOGOUT})
}

export const addCategory = (category) => {
    return ({type: ADD_CATEGORY, payload:category })
}