import {LOGIN, LOGOUT} from '../actions/index'
const initialState = {
  categories: ['breakfast', 'lunch', 'dinner'],
  isLoggedIn: false
}

export const reducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case(LOGIN):
      return({...state, isLoggedIn: true})
    case(LOGOUT):
      return({...state, isLoggedIn: false})
    default:
      return state
  }
}