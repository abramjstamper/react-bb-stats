import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// import router components
import Main from './components/Main';
import Game from './components/game/game';
import Team from './components/team/team';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store/store';

const router = (
  <Provider store={store}>
  <App />
    {/* <Router history={history}>
      <Route path="/" exact component={App}>
        <Route path="/team/:teamId" component={Team}></Route>
        <Route path="/game/:gameId" component={Game}></Route>
      </Route>
    </Router> */}
  </Provider>
)

ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
