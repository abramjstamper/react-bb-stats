import React, { Component } from 'react';
import { connect } from 'react-redux';
import Team from '../../teams/Team';

class Teams extends Component {

  render() {
    return (
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-half">
            <Team team={this.props.awayTeam} />
          </div>
          <div className="column is-half is-pulled-right">
            <Team team={this.props.homeTeam} />
          </div>
        </div>
      </div>
    );
  }
}

export default Teams;
