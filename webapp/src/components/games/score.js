import React, { Component } from 'react';
import { connect } from 'react-redux';

class Score extends Component {
  render() {
    if(this.props.homeTeam === true){
      return (
        <div className="card">
          <div className="card-content has-text-centered">
            <h1>{this.props.teamName}</h1>
            <h2>{this.props.games[this.props.gameId].temp.homeScore || 0}</h2>
          </div>
        </div>
      );
    } else {
      return (
        <div className="card">
          <div className="card-content has-text-centered">
            <h1>{this.props.teamName}</h1>
            <h2>{this.props.games[this.props.gameId].temp.awayScore || 0}</h2>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => { return { games: state.games } };
export default connect(mapStateToProps)(Score);

