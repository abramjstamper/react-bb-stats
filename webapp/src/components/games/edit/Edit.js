import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { eventsLookupById } from '../../../constants';

class Edit extends Component {

  numericalSort = (a, b) => {
    if (a > b) return a;
    if (b > a) return b;
    return a;
  }

  render() {
    const columns = [{
      Header: 'ID',
      accessor: 'id',
      sortMethod: this.numericalSort,
      maxWidth: 100
    }, {
      Header: 'Team',
      id: 'teamId',
      accessor: d => { return this.props.teams[d.teamId].teamName}
    }, {
      Header: 'Player',
      id: 'playerId',
      accessor: d => `${this.props.teams[d.teamId].players[d.playerId].homeNumber} - ${this.props.teams[d.teamId].players[d.playerId].fname} ${this.props.teams[d.teamId].players[d.playerId].lname}`
    }, {
      Header: 'Event',
      id: 'eventId',
      accessor: d => eventsLookupById[d.eventId]
    }, {
      Header: 'Period',
      accessor: 'period',
      sortMethod: this.numericalSort,
      maxWidth: 100
    }, {
      Header: 'Time',
      accessor: 'time',
      maxWidth: 200
    }];

    return (
      <div className="container">
        <ReactTable
          className="table"
          data={Object.keys(this.props.game.events).map(
            (key) => {
              return { ...this.props.game.events[key], id: key }
            })}
          columns={columns}
          defaultPageSize={50}
        />
      </div>
    );
  }
}

const mapStateToProps = state => { return { games: state.games, teams: state.teams } };
export default connect(mapStateToProps)(Edit);
