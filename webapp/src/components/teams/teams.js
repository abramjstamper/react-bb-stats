import React, { Component } from 'react';
import { connect } from 'react-redux';

class Team extends Component {

  constructor(){
    super();
    this.renderPlayers = this.renderPlayers.bind(this);
  }

  componentWillMount(){
    this.team = this.props.teams[this.props.location.payload.id];
    console.log(this.team);
  }

  renderPlayers(key){
    const player = this.team.players[key];
    return (
      <tr key={key}>
        <td>{player.isActive.toString()}</td>
        <td>{player.number}</td>
        <td>{player.fname}</td>
        <td>{player.lname}</td>
        <td><a className="button is-link">View</a></td>
      </tr>
    );
  }

  render() {
    return (
      <div>
        <h2>{this.team.name}</h2>

        <div className="columns">
          <div className="column"></div>
          <div className="column">
            <table className="table">
              <thead>
                <tr>
                  <td>isActive</td>
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
          </div>
          <div className="column"></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;
export default connect(mapStateToProps, {})(Team);
