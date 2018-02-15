import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
// import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { composeWithDevTools } from 'redux-devtools-extension';
import { connectRoutes } from 'redux-first-router';

// import the root reducer
import rootReducer from '../reducers/index';

import teams from '../tests/initState/teams';

// create an object for the default data
const defaultState = {
  teams: teams
};

// THE WORK:
export const routesMap = { 
  GAMES: '/games',
  TEAMS_LIST: '/teams',      // action <-> url path
  TEAMS: '/teams/:id',  // :id is a dynamic segment
};

export const history = createHistory();

const enhancers = [];
// const middleware = [
//   routerMiddleware(history)
// ];

const composedEnhancers = composeWithDevTools(
  // applyMiddleware(...middleware),
  ...enhancers
);

const { reducer, middleware, enhancer } = connectRoutes(history, routesMap);

// const storeRootReducer = combineReducers();

const store = createStore(rootReducer, defaultState, composedEnhancers);

if(module.hot) {
  module.hot.accept('../reducers/',() => {
    const nextRootReducer = require('../reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
