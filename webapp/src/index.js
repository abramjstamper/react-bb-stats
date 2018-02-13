import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter as Router, Route} from 'react-router-dom';

// import router components
import Main from './components/Main';
import Game from './components/game/game';
import Team from './components/team/team';

// import react router deps
import {Provider} from 'react-redux';
import store from './store/store';

const router = (
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/" component={App}></Route>
                <Route path="/team/:teamId" component={Team}></Route>
                <Route path="/game/:gameId" component={Game}></Route>
            </div>
        </Router>
    </Provider>
);

ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
