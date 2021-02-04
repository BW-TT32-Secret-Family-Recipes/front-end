import { LOGIN, LOGOUT, SET_ID, SET_URL } from '../actions/index'
const initialState = {
  isLoggedIn: false,
  currentUserId: null,
  url: ''
}

export const reducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case(LOGIN):
      return({...state, isLoggedIn: true})
    case(LOGOUT):
      return({...state, isLoggedIn: false})
    case(SET_ID):
      return({...state, currentUserId: payload})
    case(SET_URL):
      return({...state, url: payload})
    default:
      return state
  }
}