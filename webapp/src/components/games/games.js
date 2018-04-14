import React, { Component } from 'react';
import { connect } from 'react-redux';
import Game from './game/Game';

class Games extends Component {

  constructor() {
    super();
    this.state = {
      currentTab: 0,
      tabs: {
        "GAME": 0,
        "EDIT": 1,
        "TEAMS": 2,
        "INFO": 3,
        "REPORTS": 4
      }
    }
  }

  componentWillMount() {
    this.gameId = this.props.location.payload.id;
    this.game = this.props.games[this.props.location.payload.id];
    this.homeTeam = this.props.teams[this.game.info.homeTeam];
    this.awayTeam = this.props.teams[this.game.info.awayTeam];
  }

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
      </div>
    );
  }
}

const mapStateToProps = state => { return { games: state.games, teams: state.teams, location: state.location } };
export default connect(mapStateToProps)(Games);
