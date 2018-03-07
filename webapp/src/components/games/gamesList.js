import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'redux-first-router-link';

class GamesList extends Component {

  constructor() {
    super();
    this.renderGame = this.renderGame.bind(this);
    this.renderHeading = this.renderHeading.bind(this);
  }

  componentWillMount() {
    this.season = this.props.seasons[this.props.location.payload.id];
    this.team = this.props.teams[this.season.teamId];
  }

  renderHeading() {
    return (
      <div className="container">
        <h1 className="title">Games</h1>
        <h2>{`${this.season.year} ${this.team.teamName} Season`}</h2>
      </div>
    );
  }

  renderGame(key) {
    const game = this.props.games[key];
    return (
      <tr key={key}>
        <td>{game.info.date}</td>
        <td>{game.info.time}</td>
        <td>{this.props.teams[game.info.homeTeam].teamName}</td>
        <td>{this.props.teams[game.info.awayTeam].teamName}</td>
        <td>{game.info.location}</td>
        <td><Link className="button is-link" to={`/seasons/${game.info.season_id}/games/${key}`}>View</Link></td>
      </tr>
    );
  }

  render() {
    return (
      <div className="container">
        <section className="hero">
          <div className="hero-body">
            {this.renderHeading()}
          </div>
          <table className="table">
            <thead>
              <tr>
                <td>Date</td>
                <td>Time</td>
                <td>Home Team</td>
                <td>Away Team</td>
                <td>Location</td>
                <td>Edit</td>
              </tr>
            </thead>
            <tbody>
              {Object.keys(this.props.games).map(this.renderGame)}
            </tbody>
          </table>
        </section>
      </div>
    );
  }
}


const mapStateToProps = state => state;
export default connect(mapStateToProps, {})(GamesList);
