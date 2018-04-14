import React, { Component } from 'react';
import { connect } from 'react-redux';

class Reports extends Component {

  render() {
    return (
      <div>
        <h1>Reports</h1>
      </div>
    );
  }
}

const mapStateToProps = state => { return { games: state.games, teams: state.teams } };
export default connect(mapStateToProps)(Reports);
