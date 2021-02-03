import { LOGIN, LOGOUT, SET_ID} from '../actions/index'
const initialState = {
  isLoggedIn: false,
  currentUserId: null
}

export const reducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case(LOGIN):
      return({...state, isLoggedIn: true})
    case(LOGOUT):
      return({...state, isLoggedIn: false})
    case(SET_ID):
      return({...state, currentUserId: payload})
    default:
      return state
  }
}