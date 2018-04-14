import React, { Component } from 'react';
import { connect } from 'react-redux';
import Action from './Action';
import Court from './Court';
import PlayerList from './PlayerList';
import Score from './Score';
import Timer from './Timer';
import LeftSideActionButtons from './LeftSideActionButtons';
import RightSideActionButtons from './RightSideActionButtons';
import { selectPlayer } from '../../../actions/actionCreators';

class Game extends Component {

  render() {
    return (
      <div>
        <div className="columns">
          <div className="column"><Score selectPlayer={this.props.selectPlayer} game={this.props.game} team={this.props.awayTeam} score={this.props.game.temp.awayScore} teamName={this.props.awayTeam.teamName} /></div>
          <div className="column"><Timer game={this.props.game} gameId={this.props.game.id} /></div>
          <div className="column"><Score selectPlayer={this.props.selectPlayer} game={this.props.game} team={this.props.homeTeam} score={this.props.game.temp.homeScore} teamName={this.props.homeTeam.teamName} /></div>
        </div>

        <div className="columns">
        <div className="column"><Action actionText={this.props.game.temp.actionText}/></div>
        </div>

        <div className="columns">
          <div className="column"><PlayerList game={this.props.game} team={this.props.awayTeam} /></div>
          <div className="column"><Court game={this.props.game} gameId={this.props.game.id} /></div>
          <div className="column"><PlayerList game={this.props.game} team={this.props.homeTeam} /></div>
        </div>
        <div className="columns">
          <div className="column"><LeftSideActionButtons game={this.props.game}/></div>
          <div className="column"><RightSideActionButtons game={this.props.game}/></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => { return { games: state.games, teams: state.teams, location: state.location } };
export default connect(mapStateToProps, {selectPlayer})(Game);
