import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'redux-first-router-link';
import CreateSeasonForm from './createSeasonForm';

class Seasons extends Component {

  constructor() {
    super();
    this.renderSeason = this.renderSeason.bind(this);
  }

  renderSeason(key) {
    const season = this.props.seasons[key];
    return (
      <tr key={key}>
        <td>{season.year}</td>
        <td><Link className="is-link" to={`/teams/${season.teamId}`}>{this.props.teams[season.teamId].teamName}</Link></td>
        <td>{season.description}</td>
        <td><Link className="button is-link" to={`/seasons/${season.id}/games`}>View</Link></td>

      </tr>
    );
  }

  render() {
    return (
      <div className="container">
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Seasons</h1>
            </div>
          </div>
          <table className="table">
            <thead>
              <tr>
                <td>Year</td>
                <td>Team</td>
                <td>Description</td>
                <td>Games</td>
              </tr>
            </thead>
            <tbody>
              {Object.keys(this.props.seasons).map(this.renderSeason)}
            </tbody>
          </table>
        </section>
        <CreateSeasonForm/>
      </div>
    );
  }
}


const mapStateToProps = state => state;
export default connect(mapStateToProps, {})(Seasons);
