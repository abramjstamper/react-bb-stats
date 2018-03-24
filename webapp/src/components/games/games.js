import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlayerList from './playerList';
import Court from './court';
import Score from './score';
import Timer from './timer';

class Games extends Component {

  componentWillMount(){
    this.gameId = this.props.location.payload.id;
    this.game = this.props.games[this.props.location.payload.id];
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

        <div className="columns">
          <div className="column"><Score teamName="Wildkats" score="100"/></div>
          <div className="column"><Timer game={this.game} gameId={this.gameId} /></div>
          <div className="column"><Score teamName="Wildkats" score="100"/></div>
        </div>

        <div className="columns">
          <div className="column"><PlayerList /></div>
          <div className="column"><Court game={this.game} gameId={this.gameId}/></div>
          <div className="column"><PlayerList /></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => { return { games: state.games, location: state.location } };
export default connect(mapStateToProps)(Games);
