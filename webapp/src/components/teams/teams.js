import React, { Component } from 'react';
import { connect } from 'react-redux';

class Team extends Component {

  constructor() {
    super();
    this.renderPlayers = this.renderPlayers.bind(this);
    this.findObjectByKey = this.findObjectByKey.bind(this);
    this.renderHomeAwayNumber = this.renderHomeAwayNumber.bind(this);
  }

  findObjectByKey(array, key, value) {
    for (var i = 0; i < array.length; i++) {
      if (array[i][key] === value) {
        return array[i];
      }
    }
    return null;
  }

  componentWillMount() {
    this.team = this.findObjectByKey(this.props.teams, "id", this.props.location.payload.id);
  }

  renderHomeAwayNumber(player) {
    if (player.awayNumber != player.homeNumber) {
      return player.homeNumber + '/' + player.awayNumber
    }
    return player.homeNumber;
  }

  renderPlayers(key) {
    const player = this.team.players[key];
    return (
      <tr key={key}>
        <td><input type="checkbox" defaultChecked={player.isActive} /></td>
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
    console.log(this.team.players);
    return (
      <div className="container">
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">{this.team.teamName}</h1>
            </div>
            <h2 class="subtitle">
              {this.team.city + ", " + this.team.state}
            </h2>
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
              {Object.keys(this.team.players.sort(this.compare)).map(this.renderPlayers)}
            </tbody>
          </table>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => state;
export default connect(mapStateToProps, {})(Team);
