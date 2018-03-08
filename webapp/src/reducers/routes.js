import { NOT_FOUND } from 'redux-first-router'
import _ from 'lodash';

//Components
import Home from "../components/home/home";
import Dashboard from "../components/user/dashboard";
import Games_List from "../components/games/gamesList";
import Games from "../components/games/games";
import Team_List from "../components/teams/teamList";
import Teams from "../components/teams/teams";
import Seasons_List from "../components/seasons/seasonsList";

// Action Types
export const HOME = 'COMPONENTS/HOME';
export const DASHBOARD = 'COMPONENTS/DASHBOARD';
export const GAMES_LIST = 'COMPONENTS/GAMES_LIST';
export const GAMES = 'COMPONENTS/GAMES';
export const TEAMS_LIST = 'COMPONENTS/TEAMS_LIST';
export const TEAMS = 'COMPONENTS/TEAMS';
export const SEASONS_LIST = 'COMPONENTS/SEASONS';

const actionMap = {
  [HOME]: {name: 'Home', component: Home},
  [DASHBOARD]: {name: 'Dashboard', component: Dashboard},
  [GAMES_LIST]: {name: 'Games List', component: Games_List},
  [GAMES]: {name: 'Games', component: Games},
  [TEAMS_LIST]: {name: 'Teams List', component: Team_List},
  [TEAMS]: {name: 'Teams', component: Teams},
  [SEASONS_LIST]: {name: 'Seasons List', component: Seasons_List},
  [NOT_FOUND] : NOT_FOUND
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