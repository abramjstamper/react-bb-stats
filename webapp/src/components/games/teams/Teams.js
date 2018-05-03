import React, { Component } from 'react';
import { connect } from 'react-redux';
import Team from '../../teams/Team';

class Teams extends Component {

  render() {
    return (
      <div className="columns">
        <div className="column">
          <Team team={this.props.awayTeam} />
        </div>
        <div className="column">
          <Team team={this.props.homeTeam} />
        </div>
      </div>
    );
  }
}

export default Teams;
