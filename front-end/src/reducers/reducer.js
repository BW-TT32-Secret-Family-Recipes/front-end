import {LOGIN} from '../actions/index'
const initialState = {
  categories: ['breakfast', 'lunch', 'dinner'],
  isLoggedIn: false
}

export const reducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case(LOGIN):
      return({...state, isLoggedIn: true})
    default:
      return state
  }
}