import { NOT_FOUND } from 'redux-first-router'

export const routes = (state = null, action = {}) => {
  switch(action.type) {
    case 'GAMES':
    case 'TEAMS_LIST':
    case NOT_FOUND:
      return null
    case 'TEAMS':
      return action.payload.id
    default: 
      return state
  }
}

export default routes;