// import { redirect } from 'redux-first-router'

import {GAMES, TEAMS_LIST, TEAMS} from "./reducers/routes";

export default {
  HOME: '/', 
  [GAMES]: '/games',
  [TEAMS_LIST]: '/teams',      // action <-> url path
  [TEAMS]: '/teams/:id',  // :id is a dynamic segment
};
