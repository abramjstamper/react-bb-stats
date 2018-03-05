import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatePlayerActiveStatus } from '../../actions/actionCreators';

class Team extends Component {

  constructor() {
    super();
    this.renderPlayers = this.renderPlayers.bind(this);
    this.renderHomeAwayNumber = this.renderHomeAwayNumber.bind(this);
  }

  componentWillMount() {
    this.team = this.props.teams[this.props.location.payload.id]
  }

  renderHomeAwayNumber(player) {
    if (player.awayNumber != player.homeNumber) {
      return player.homeNumber + '/' + player.awayNumber
    }
    return player.homeNumber;
  }

  updatePlayerStatus(e, team, player){
    this.props.updatePlayerActiveStatus(team, player);
    console.log(e);
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

  compare = (a,b) => {
    if (a.homeNumber < b.homeNumber)
      return -1;
    if (a.homeNumber > b.homeNumber)
      return 1;
    return 0;
  }
  

  render() {
    return (
      <div className="container">
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">{this.team.teamName} ({this.team.abbreviation})</h1>
            </div>
            <h2 className="subtitle">
              {this.team.city + ", " + this.team.state}
            </h2>
            <p>Head Coach: {this.team.headCoach}</p>
            <p>Assistant Coach: {this.team.assistiantCoach}</p>
          </div>
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
