import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { eventsLookupById } from '../../../constants';

class Edit extends Component {

  render() {
    const columns = [{
      Header: '',
      accessor: 'id',
      sortMethod: (a, b) => {
        if (a > b) return a;
        if (b > a) return b;
        return a;
      },
      maxWidth: 100
    }, {
      Header: 'Player',
      accessor: 'playerId'
    }, {
      Header: 'Event',
      id: 'eventId',      
      accessor: d =>  eventsLookupById[d.eventId]
    }, {
      Header: 'Period',
      accessor: 'period',
      maxWidth: 100
    }, {
      Header: 'Time',
      accessor: 'time',
      maxWidth: 200
    }];

    return (
      <div className="container">
        <ReactTable
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
