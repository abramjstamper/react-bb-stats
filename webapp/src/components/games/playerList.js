import React, { Component } from 'react';
import { connect } from 'react-redux';
import { substitutePlayerIntoGame, substitutePlayerOutOfGame } from '../../actions/actionCreators';

class PlayerList extends Component {

  renderPlayerButton = (id) => {
    const player = this.props.teams[this.props.teamId].players[id];
    return (
      <label key={id} className="panel-block">
        <button className="button">{player.homeNumber}</button>
        {`${player.fname} ${player.lname}`}
      </label>
    );
  }

  renderPlayerSelector = (id) => {
    const player = this.props.teams[this.props.teamId].players[id];
    return (
      <label key={id} className="panel-block" onClick={() => this.props.substitutePlayerIntoGame(this.props.game, player)}>
        <input type="checkbox" />
        {`${player.homeNumber} - ${player.fname} ${player.lname}`}
      </label>
    );
  }

  render() {

    if (this.props.game.clock.runTimer) {
      return (
        <div>
          <nav className="panel">
            {Object.keys(this.props.teams[this.props.teamId].players).map(this.renderPlayerButton)}
          </nav>
        </div>
      );
    } else {
      return (
        <div>
          <nav className="panel">
            {Object.keys(this.props.teams[this.props.teamId].players).map(this.renderPlayerSelector)}
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
    substitutePlayerOutOfGame 
  }
)(PlayerList);