import React, { Component } from 'react';
import Link from 'redux-first-router-link';
import SideMenu from './sideMenu';

class Dashboard extends Component {
  render() {
    return (
      <div className="container">
        <div className="section">
          <h1 className="title is-3">Dashbaord</h1>

          <div className="columns">
            <div className="column is-one-fifth"><SideMenu /></div>
            <div className="column">
              <h1>Some more information</h1>
            </div>
            <div className="column">
              <h1>Placeholder for more recent game data</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
