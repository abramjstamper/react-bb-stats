import { NOT_FOUND } from 'redux-first-router'
import _ from 'lodash';
import Home from "../components/home/home";
import Games from "../components/games/games";
import Games_List from "../components/games/gamesList";
import Teams from "../components/teams/teams";
import Team_List from "../components/teams/teamList";
import Seasons from "../components/seasons/seasons";

// Action Types
export const HOME = 'COMPONENTS/HOME';
export const TEAMS_LIST = 'COMPONENTS/TEAMS_LIST';
export const GAMES_LIST = 'COMPONENTS/GAMES_LIST';
export const TEAMS = 'COMPONENTS/TEAMS';
export const GAMES = 'COMPONENTS/GAMES';
export const SEASONS = 'COMPONENTS/SEASONS';

const actionMap = {
  [HOME]: {name: 'Home', component: Home},
  [TEAMS_LIST]: {name: 'Teams List', component: Team_List},
  [GAMES_LIST]: {name: 'Games List', component: Games_List},
  [GAMES]: {name: 'Games', component: Games},
  [TEAMS]: {name: 'Teams', component: Teams},
  [SEASONS]: {name: 'Seasons', component: Seasons},
  [NOT_FOUND] : NOT_FOUND,
};

export const componentMap = _.fromPairs(_.map(actionMap, value => [ value.name, value.component ]));

// Reducer
const initialState = {
  name: actionMap[HOME].name
};

export default (state = initialState, action) => {
  const actionInfo = actionMap[action.type];
  if (actionInfo) {
      return {
          ...state,
          name: actionInfo.name
      };
  } else {
      return state;
  }
};