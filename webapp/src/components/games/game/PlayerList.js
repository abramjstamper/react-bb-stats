import React, { Component } from 'react';
import { connect } from 'react-redux';
import { substitutePlayerIntoGame, substitutePlayerOutOfGame, selectPlayer } from '../../../actions/actionCreators';

const MAX_PLAYERS = 5;

class PlayerList extends Component {

  constructor() {
    super();
    this.state = {
      playersInGame: {},
      playersActive: {}
    };
  }

  substitutePlayerIntoGame = (player) => {
    if (!this.state.playersActive[player.id]) {
      if (Object.keys(this.state.playersInGame).length < MAX_PLAYERS) {
        this.setState({
          playersInGame: { ...this.state.playersInGame, [player.id]: player },
          playersActive: { ...this.state.playersActive, [player.id]: true }
        });
        this.props.substitutePlayerIntoGame(this.props.game, player, this.props.team);
      }
    } else {
      const tempPlayersInGame = this.state.playersInGame;
      delete tempPlayersInGame[player.id];
      this.setState({
        playersInGame: tempPlayersInGame,
        playersActive: { ...this.state.playersActive, [player.id]: false }
      });

    }
  }


  renderPlayerButton = (id) => {
    const player = this.props.team.players[id];
    if (this.state.playersActive[player.id]) {
      return (
        <label key={id} className="panel-block">
          <button className="button" onClick={() => this.props.selectPlayer(this.props.game, this.props.team, player)}>{player.homeNumber}</button>
          {`${player.fname} ${player.lname}`}
        </label>
      );
    }
  }

  renderPlayerSelector = (id) => {
    const player = this.props.team.players[id];
    return (
      <label key={id} className="panel-block">
        <input type="checkbox" onChange={() => this.substitutePlayerIntoGame(player)} checked={!!this.state.playersActive[player.id]} />
        {`${player.homeNumber} - ${player.fname} ${player.lname}`}
      </label>
    );
  }

  render() {

    if (this.props.game.clock.runTimer) {
      return (
        <div>
          <nav className="panel">
            {Object.keys(this.state.playersActive).map(this.renderPlayerButton)}
          </nav>
        </div>
      );
    } else {
      return (
        <div>
          <nav className="panel">
            {Object.keys(this.props.team.players).map(this.renderPlayerSelector)}
          </nav>
        </div>
      );
    }
  }
}

const mapStateToProps = state => { return { games: state.games, teams: state.teams } };

export default connect(
  mapStateToProps,
  {
    substitutePlayerIntoGame,
    substitutePlayerOutOfGame,
    selectPlayer
  }
)(PlayerList);