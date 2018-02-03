import React, { Component } from 'react';
import PlayerList from './playerList';
import Court from './court';
import Score from './score';
import Timer from './timer';

class Game extends Component {
  render() {
    return (
      <div>
        <div className="tabs is-centered is-large">
          <ul>
            <li className="is-active"><a>Game</a></li>
            <li><a>Edit</a></li>
            <li><a>Teams</a></li>
            <li><a>Info</a></li>
            <li><a>Reports</a></li>
          </ul>
        </div>

        <div className="columns">
          <div className="column"><Score teamName="Wildkats" score="100"/></div>
          <div className="column"><Timer /></div>
          <div className="column"><Score teamName="Wildkats" score="100"/></div>
        </div>

        <div className="columns">
          <div className="column"><PlayerList /></div>
          <div className="column"><Court /></div>
          <div className="column"><PlayerList /></div>
        </div>
      </div>
    );
  }
}

export default Game;
