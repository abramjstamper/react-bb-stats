import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'redux-first-router-link';
import CreateTeamForm from './CreateTeamForm';

class TeamList extends Component {

  constructor() {
    super();
    this.renderTeam = this.renderTeam.bind(this);
  }

  renderTeam(key) {
    const team = this.props.teams[key];
    return (
      <tr key={key}>
        <td>{team.teamName}</td>
        <td>{team.city}</td>
        <td>{team.state}</td>
        <td>{team.headCoach}</td>
        <td>{team.assistiantCoach}</td>
        <td><Link className="button is-link" to={`/teams/${key}`}>View</Link></td>
      </tr>
    );
  }

  render() {
    return (
      <div className="container">
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Teams</h1>
            </div>
          </div>
          <table className="table">
            <thead>
              <tr>
                <td>Name</td>
                <td>City</td>
                <td>State</td>
                <td>Coach</td>
                <td>Assistant</td>
                <td>Edit</td>
              </tr>
            </thead>
            <tbody>
              {Object.keys(this.props.teams).map(this.renderTeam)}
            </tbody>
          </table>
        </section>
        <CreateTeamForm/>
      </div>
    );
  }
}


const mapStateToProps = state => state;
export default connect(mapStateToProps, {})(TeamList);
