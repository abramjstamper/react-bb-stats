import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerGameEvent } from '../../actions/actionCreators';
import { eventsLookup } from '../../constants';

class LeftSideActionButtons extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <div className="buttons has-addons is-centered">
            <button className="button" onClick={() => this.props.registerGameEvent(this.props.game, eventsLookup["GOAL_TENDING"])}>Goal Tending</button>
            <button className="button" onClick={() => this.props.registerGameEvent(this.props.game, eventsLookup["PUTBACK"])}>Putback</button>
            <button className="button" onClick={() => this.props.registerGameEvent(this.props.game, eventsLookup["DEADBALL"])}>Deadball</button>
            <button className="button" onClick={() => this.props.registerGameEvent(this.props.game, eventsLookup["Freethrow"])}>Freethrow</button>
          </div>
          <div className="buttons has-addons is-centered">
            <button className="button" onClick={() => this.props.registerGameEvent(this.props.game, eventsLookup["TECHNICAL_FOUL"])}>T Foul</button>
            <button className="button" onClick={() => this.props.registerGameEvent(this.props.game, eventsLookup["OFFENSIVE_FOUL"])}>O Foul</button>
            <button className="button" onClick={() => this.props.registerGameEvent(this.props.game, eventsLookup["FOUL"])}>Foul</button>
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
)(LeftSideActionButtons);