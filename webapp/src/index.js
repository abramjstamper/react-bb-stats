import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import App from './components/App'
import configureStore from './configureStore'
import registerServiceWorker from './registerServiceWorker';

//init data
import teams from './tests/initState/teams';
import seasons from './tests/initState/seasons';
import games from './tests/initState/games';

// create an object for the default data
const defaultState = {
  teams: teams,
  seasons: seasons,
  games: games
};

const history = createHistory();
const { store } = configureStore(history, defaultState);


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


// if (module.hot && process.env.NODE_ENV === 'development') {
//   module.hot.accept('./components/App', () => {
//     const App = require('./components/App').default

//     render(App)
//   });
// }
registerServiceWorker();
