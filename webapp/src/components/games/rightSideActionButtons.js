import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerGameEvent } from '../../actions/actionCreators';
import { eventsLookup } from '../../constants';

class RightSideActionButtons extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <div className="buttons has-addons is-centered">
            <button className="button" onClick={() => this.props.registerGameEvent(this.props.game, eventsLookup["TURNOVER"])}>Turnover</button>
            <button className="button" onClick={() => this.props.registerGameEvent(this.props.game, eventsLookup["STEAL"])}>Steal</button>
            <button className="button" onClick={() => this.props.registerGameEvent(this.props.game, eventsLookup["JUMPBALL"])}>Jump Ball</button>
          </div>
          <div className="buttons has-addons is-centered">
            <button className="button" onClick={() => this.props.registerGameEvent(this.props.game, eventsLookup["BLOCK"])}>Block</button>
            <button className="button" onClick={() => this.props.registerGameEvent(this.props.game, eventsLookup["ASSIST_ATTEMPT"])}>Assist Attempt</button>
            <button className="button" onClick={() => this.props.registerGameEvent(this.props.game, eventsLookup["TIMEOUT"])}>Timeout</button>
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