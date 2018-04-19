import React, { Component } from 'react';
import { eventsLookup } from '../../../constants';

class BoxScore extends Component {
  constructor() {
    super();
    this.state = {}
  }

  componentWillMount() {
    this.createStatDataStructure();
  }

  createStatDataStructure = () => {
    const defaultData = {
      id: -1,
      number: -1,
      name: "not set",
      position: "not set",
      totalFieldGoalsMade: 0,
      totalFieldGoalsMissed: 0,
      twoPTFieldGoalsMade: 0,
      twoPTFieldGoalsMissed: 0,
      threePTFieldGoalsMade: 0,
      threePTFieldGoalsMissed: 0,
      freethrowsMade: 0,
      freethrowsMissed: 0,
      offensiveRebounds: 0,
      defensiveRebounds: 0,
      personalFouls: 0,
      foulsDrawn: 0,
      assists: 0,
      assistAttempts: 0,
      turnovers: 0,
      steals: 0,
      blocks: 0,
      timeInPlay: "0:00"
    }
    let tempState = {};
    Object.keys(this.props.team.players).map((player) => {
      tempState[player] = { ...defaultData, id: player, name: `${this.props.team.players[player].fname} ${this.props.team.players[player].lname}`, position: this.props.team.players[player].position || "", number: this.props.team.players[player].homeNumber };
      return tempState[player];
    });
    this.setState(tempState, () => this.generateGameStatsForDataStructure(this.state));
  }

  generateGameStatsForDataStructure = (tempState) => {
    Object.values(this.props.game.events).map((event) => { this.evaluateEvent(event, tempState); });
  }

  evaluateEvent = (event, state) => {
    const tempState = { ...state };
    console.log(event);
    console.log(tempState);
    console.log(tempState[event.playerId]);
    // switch (event.eventId) {
    //   case (eventsLookup["MISSED_FT"]):
    //     tempState[event.playerId].freethrowsMissed += 1;
    //     break;
    //   case (eventsLookup["MISSED_2PT_FG"]):
    //     tempState[event.playerId].twoPTFieldGoalsMissed += 1;
    //     break;
    //   case (eventsLookup["MISSED_3PT_FG"]):
    //     tempState[event.playerId].threePTFieldGoalsMissed += 1;
        // break;
    // }
    this.setState(tempState);
  };

  renderLineItem = (player) => {
    return (
      <tr key={player.id}>
        <td>{player.number}</td>
        <td>{player.name}</td>
        <td>{player.position}</td>
        <td></td>
        <td>{player.totalFieldGoalsMade}/{player.totalFieldGoalsMade + player.totalFieldGoalsMissed}</td>
        <td>{player.twoPTFieldGoalsMade}/{player.twoPTFieldGoalsMade + player.twoPTFieldGoalsMissed}</td>
        <td>{player.threePTFieldGoalsMade}/{player.threePTFieldGoalsMade + player.threePTFieldGoalsMissed}</td>
        <td>{player.freethrowsMade}/{player.freethrowsMade + player.freethrowsMissed}</td>
        <td>{player.totalFieldGoalsMade + player.twoPTFieldGoalsMade + player.threePTFieldGoalsMade + player.freethrowsMade}</td>
        <td>{player.offensiveRebounds}</td>
        <td>{player.defensiveRebounds}</td>
        <td>{player.offensiveRebounds + player.defensiveRebounds}</td>
        <td>{player.personalFouls}</td>
        <td>{player.foulsDrawn}</td>
        <td>{player.assists}</td>
        <td>{player.assistAttempts}</td>
        <td>{player.turnovers}</td>
        <td>{player.steals}</td>
        <td>{player.blocks}</td>
        <td>{player.timeInPlay}</td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th><abbr title="Number">###</abbr></th>
            <th>NAME</th>
            <th><abbr title="Position">POS</abbr></th>
            <th></th>
            <th><abbr title="Total Field Goals">TFG</abbr></th>
            <th><abbr title="2pt Field Goals">2FG</abbr></th>
            <th><abbr title="3pt Field Goals">3PT</abbr></th>
            <th><abbr title="Freethrows">FT</abbr></th>
            <th><abbr title="Total Points">PTS</abbr></th>
            <th><abbr title="Offensive Rebounds">ORB</abbr></th>
            <th><abbr title="Defensive Rebounds">DRB</abbr></th>
            <th><abbr title="Total Rebounds">TRB</abbr></th>
            <th><abbr title="Personal Fouls">PF</abbr></th>
            <th><abbr title="Fouls Drawn">FD</abbr></th>
            <th><abbr title="Assists">AST</abbr></th>
            <th><abbr title="Assist Attempts">AA</abbr></th>
            <th><abbr title="Turnovers">TO</abbr></th>
            <th><abbr title="Steals">ST</abbr></th>
            <th><abbr title="Blocks">B</abbr></th>
            <th><abbr title="Time Played In Game">MIN</abbr></th>
          </tr>
        </thead>
        <tbody>
          {Object.values(this.state).sort((a, b) => { if (a.number > b.number) return 1; if (a.number < b.number) return -1; return 0; }).map(this.renderLineItem)}
        </tbody>
      </table>
    );
  }
}

export default BoxScore;
