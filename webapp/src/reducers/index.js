import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux';

import teams from './teams';
import routes from './routes';

const rootReducer = combineReducers({ teams: teams, routes: routes });

export default rootReducer;
