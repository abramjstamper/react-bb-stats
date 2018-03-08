import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatePlayerActiveStatus } from '../../actions/actionCreators';
import CreatePlayerForm from './createPlayerForm';
import EditTeamForm from './editTeamForm';

class Team extends Component {

  constructor() {
    super();
    this.renderPlayers = this.renderPlayers.bind(this);
    this.renderHomeAwayNumber = this.renderHomeAwayNumber.bind(this);
    this.renderHeader = this.renderHeader.bind(this);
  }

  componentWillMount() {
    this.team = this.props.teams[this.props.location.payload.id];
  }

  componentWillUpdate(){
    this.team = this.props.teams[this.props.location.payload.id];
  }

  renderHomeAwayNumber(player) {
    if (player.awayNumber !== player.homeNumber) {
      return player.homeNumber + '/' + player.awayNumber
    }
    return player.homeNumber;
  }

  updatePlayerStatus(e, team, player) {
    this.props.updatePlayerActiveStatus(team, player);
  }

  renderHeader() {
    return (
      <div className="hero-body">
        <div className="container">
          <h1 className="title">{this.props.seasons[this.team.seasonId].year} {this.team.teamName} ({this.team.abbreviation})</h1>
        </div>
        <h2 className="subtitle">
          {this.team.city + ", " + this.team.state}
        </h2>
        <p>Head Coach: {this.team.headCoach}</p>
        <p>Assistant Coach: {this.team.assistiantCoach}</p>
        <EditTeamForm/>
      </div >
    )
  }

  renderPlayers(key) {
    const player = this.team.players[key];
    return (
      <tr key={key}>
        <td><input type="checkbox" defaultChecked={player.isActive} onChange={(e) => this.updatePlayerStatus(e, this.team, player)} /></td>
        <td>{this.renderHomeAwayNumber(player)}</td>
        <td>{player.fname}</td>
        <td>{player.lname}</td>
        <td><a className="button is-link">View</a></td>
      </tr>
    );
  }

  render() {
    return (
      <div className="container">
        <section className="hero">
          {this.renderHeader()}
          <table className="table">
            <thead>
              <tr>
                <td>Active</td>
                <td>Number</td>
                <td>First Name</td>
                <td>Last Name</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              {Object.keys(this.team.players).map(this.renderPlayers)}
            </tbody>
          </table>
        </section>
        <CreatePlayerForm />
      </div>
    );
  }
}

const mapStateToProps = state => state;
Team = connect(
  mapStateToProps,
  {
    updatePlayerActiveStatus
  }
)(Team);
export default connect(mapStateToProps, {})(Team);
