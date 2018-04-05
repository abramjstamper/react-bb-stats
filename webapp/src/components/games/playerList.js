import React, { Component } from 'react';
import { connect } from 'react-redux';

class PlayerList extends Component {

  renderPlayerSelector = (id) => {
    const player = this.props.teams[this.props.teamId].players[id];
    return (
      <label key={id} className="panel-block">
        <input type="checkbox" />
        {`${player.homeNumber} - ${player.fname} ${player.lname}`}
      </label>
    );
  }

  render() {

    if (this.props.games[this.props.gameId].clock.runTimer) {
      return (
        <div>
          <nav className="panel">
            <label className="panel-block">
              <input type="checkbox" />
              Player 1
          </label>
            <label className="panel-block">
              <input type="checkbox" />
              Player 2
          </label>
            <label className="panel-block">
              <input type="checkbox" />
              Player 3
          </label>
            <label className="panel-block">
              <input type="checkbox" />
              Player 4
          </label>
            <label className="panel-block">
              <input type="checkbox" />
              Player 5
          </label>
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
export default connect(mapStateToProps)(PlayerList);
