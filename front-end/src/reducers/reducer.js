import {ADD_CATEGORY, LOGIN, LOGOUT, SET_ID} from '../actions/index'
const initialState = {
  categories: ['Breakfast', 'Lunch', 'Dinner'],
  isLoggedIn: false,
  currentUserId: null
}

export const reducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case(LOGIN):
      return({...state, isLoggedIn: true})
    case(LOGOUT):
      return({...state, isLoggedIn: false})
    case(ADD_CATEGORY):
      return({
        ...state,
        categories: [...state.categories, payload ]
      })
    case(SET_ID):
      return({...state, currentUserId: payload})
    default:
      return state
  }
}