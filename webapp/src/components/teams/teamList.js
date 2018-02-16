import React, { Component } from 'react';
import Link from 'redux-first-router-link';
import Teams from './teams';

class TeamList extends Component {

  constructor(){
    super();
    this.renderTeam = this.renderTeam.bind(this);
  }

  renderTeam(key){
    const team = this.props.teams[key];
    return (
      <tr>
        <td>{team.name}</td>
        <td>{team.city}</td>
        <td>{team.state}</td>
        <td>{team.coach}</td>
        <td><Link class="button is-link" to={`/teams/${team.id}`}>View</Link></td>
      </tr>
    );
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <div className="columns">
          <div className="column"></div>
          <div className="column">
            <table className="table">
              <thead>
                <tr>
                  <td>Name</td>
                  <td>City</td>
                  <td>State</td>
                  <td>Coach</td>
                  <td>Edit</td>
                </tr>
              </thead>
              {/* {Object.keys(this.props.teams).map(this.renderTeam)} */}
            </table>
          </div>
          <div className="column"></div>
        </div>
      </div>
    );
  }
}

export default TeamList;
