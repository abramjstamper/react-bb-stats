import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditGameForm from '../EditGameForm';

class Info extends Component {

  render() {
    return (
      <div className="container">
        <EditGameForm game={this.props.game} />
      </div>
    );
  }
}

const mapStateToProps = state => { return { games: state.games, teams: state.teams } };
export default connect(mapStateToProps)(Info);
