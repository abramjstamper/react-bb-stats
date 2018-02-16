import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import App from './components/App'
import configureStore from './configureStore'
import registerServiceWorker from './registerServiceWorker';
// import { AppContainer } from 'react-hot-loader';

import teams from './tests/initState/teams';

// create an object for the default data
const defaultState = {
    teams: teams
};

const history = createHistory();
const { store } = configureStore(history, defaultState);

const render = App => {
    const root = document.getElementById('root')
  
    ReactDOM.hydrate(
        <Provider store={store}>
          <App />
        </Provider>,
      root
    )
  }
  
  render(App)
  
  if (module.hot && process.env.NODE_ENV === 'development') {
    module.hot.accept('./components/App', () => {
      const App = require('./components/App').default
  
      render(App)
    })
  }
registerServiceWorker();
