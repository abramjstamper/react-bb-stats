import { NOT_FOUND } from 'redux-first-router'
import _ from 'lodash';
import Games from "../components/games/games";
import Teams from "../components/teams/teams";
import Team_List from "../components/teams/teamList";

type Action = {
  +type: string,
  payload: any
};

// Action Types
export const HOME = 'COMPONENTS/GAMES';
export const TEAMS_LIST = 'COMPONENTS/TEAMS_LIST';
export const TEAMS = 'COMPONENTS/TEAMS';
export const GAMES = 'COMPONENTS/GAMES';

const actionMap = {
  [HOME]: {name: 'Home', component: Games},
  [TEAMS_LIST]: {name: 'Team List', component: Team_List},
  [GAMES]: {name: 'Games', component: Games},
  [TEAMS]: {name: 'Teams', component: Teams}
};

export const componentMap = _.fromPairs(_.map(actionMap, value => [ value.name, value.component ]));

// Reducer
type State = {
  name: string
};
const initialState = {
  name: actionMap[TEAMS].name
};

export default (state: State = initialState, action: Action) => {
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