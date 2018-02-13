import { createStore, compose } from 'redux';

// import the root reducer
import rootReducer from '../reducers/index';

import teams from '../tests/initState/teams'

// create an object for the default data
const defaultState = {
  teams
};

const store = createStore(rootReducer, defaultState);

// if(module.hot) {
//   module.hot.accept('../reducers/',() => {
//     const nextRootReducer = require('../reducers/index').default;
//     store.replaceReducer(nextRootReducer);
//   });
// }

export default store;
