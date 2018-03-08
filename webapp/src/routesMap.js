import { HOME, DASHBOARD, GAMES, TEAMS_LIST, TEAMS, SEASONS_LIST, GAMES_LIST } from "./reducers/routes";

export default {
  [HOME]: '/',
  [DASHBOARD]: '/dashboard',
  [GAMES_LIST]: '/seasons/:id/games',
  [GAMES]: '/seasons/:id/games/:id',
  [TEAMS_LIST]: '/teams',
  [TEAMS]: '/teams/:id',
  [SEASONS_LIST]: '/seasons',
};
