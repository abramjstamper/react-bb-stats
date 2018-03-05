// import { redirect } from 'redux-first-router'

import {GAMES, TEAMS_LIST, TEAMS, SEASONS} from "./reducers/routes";

export default {
  HOME: '/', 
  [GAMES]: '/games',
  [SEASONS]: '/seasons',
  [TEAMS_LIST]: '/teams',      // action <-> url path
  [TEAMS]: '/teams/:id',  // :id is a dynamic segment
};
