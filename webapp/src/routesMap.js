// import { redirect } from 'redux-first-router'

import { HOME, GAMES, TEAMS_LIST, TEAMS, SEASONS, GAMES_LIST } from "./reducers/routes";

export default {
  [HOME]: '/',
  [GAMES_LIST]: 'games',
  [GAMES]: 'games/:id',
  //[GAMES_LIST]: 'seasons/:id/games',
  //[GAMES]: 'seasons/:id/games/:id',
  [SEASONS]: '/seasons',
  [TEAMS_LIST]: '/teams',      // action <-> url path
  [TEAMS]: '/teams/:id',  // :id is a dynamic segment
};
