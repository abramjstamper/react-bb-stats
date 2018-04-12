import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlayerList from './playerList';
import Action from './action';
import Court from './court';
import Score from './score';
import Timer from './timer';
import LeftSideActionButtons from './leftSideActionButtons';
import RightSideActionButtons from './rightSideActionButtons';
import { selectPlayer } from '../../actions/actionCreators';

class Games extends Component {

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

        <div className="columns">
          <div className="column"><Score selectPlayer={this.props.selectPlayer} game={this.game} team={this.awayTeam} score={this.game.temp.awayScore} teamName={this.awayTeam.teamName} /></div>
          <div className="column"><Timer game={this.game} gameId={this.gameId} /></div>
          <div className="column"><Score selectPlayer={this.props.selectPlayer} game={this.game} team={this.homeTeam} score={this.game.temp.homeScore} teamName={this.homeTeam.teamName} /></div>
        </div>

        <div className="columns">
        <div className="column"><Action actionText={this.game.temp.actionText}/></div>
        </div>

        <div className="columns">
          <div className="column"><PlayerList game={this.game} team={this.awayTeam} /></div>
          <div className="column"><Court game={this.game} gameId={this.gameId} /></div>
          <div className="column"><PlayerList game={this.game} team={this.homeTeam} /></div>
        </div>
        <div className="columns">
          <div className="column"><LeftSideActionButtons game={this.game}/></div>
          <div className="column"><RightSideActionButtons game={this.game}/></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => { return { games: state.games, teams: state.teams, location: state.location } };
export default connect(mapStateToProps, {selectPlayer})(Games);
