import { NOT_FOUND } from 'redux-first-router'

export default (state = 'HOME', action = {}) => components[action.type] || state

const components = {
  HOME: 'Home',
  TEAMS_LIST: 'Team_List',
  TEAMS: 'Teams',
  GAMES: 'Games',
  [NOT_FOUND]: 'NotFound'
}