import {ADD_CATEGORY, LOGIN, LOGOUT} from '../actions/index'
const initialState = {
  categories: ['Breakfast', 'Lunch', 'Dinner'],
  isLoggedIn: false
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
    default:
      return state
  }
}