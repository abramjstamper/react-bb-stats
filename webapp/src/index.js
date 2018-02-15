import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// import router components
import Navbar from './components/navbar';
import Game from './components/game/game';
import TeamList from './components/team/teamList';

// import react router deps
import {Provider} from 'react-redux';
import store from './store/store';

const router = (
    <Provider store={store}>
                <App />
                {/* <Navbar /> */}
                {/* <Route exact path="/" component={App}></Route> */}
                {/* <Route path="/teams" render={() => <TeamList {...this.props} />}></Route>
                <Route path="/games" component={Game}></Route> */}
    </Provider>
);

ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
