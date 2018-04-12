import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerGameEvent } from '../../actions/actionCreators';

class RightSideActionButtons extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <div className="buttons has-addons is-centered">
            <button className="button" onClick={() => this.props.registerGameEvent(this.props.game, "TURNOVER")}>Turnover</button>
            <button className="button" onClick={() => this.props.registerGameEvent(this.props.game, "STEAL")}>Steal</button>
            <button className="button" onClick={() => this.props.registerGameEvent(this.props.game, "JUMPBALL")}>Jump Ball</button>
          </div>
          <div className="buttons has-addons is-centered">
            <button className="button" onClick={() => this.props.registerGameEvent(this.props.game, "BLOCK")}>Block</button>
            <button className="button" onClick={() => this.props.registerGameEvent(this.props.game, "ASSIST_ATTEMPT")}>Assist Attempt</button>
            <button className="button" onClick={() => this.props.registerGameEvent(this.props.game, "TIMEOUT")}>Timeout</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => { return { games: state.games, teams: state.teams } };

export default connect(
  mapStateToProps,
  {
    registerGameEvent
  }
)(RightSideActionButtons);