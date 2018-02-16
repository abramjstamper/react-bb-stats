import React, { Component } from 'react';

class Team extends Component {
  render() {
    return (
      <div>
        <div className="columns">
          <div className="column"></div>
          <div className="column">
            <table className="table">
              <thead>
                <tr>
                  <td>Number</td>
                  <td>Name</td>
                </tr>
              </thead>
            </table>
          </div>
          <div className="column"></div>
        </div>
      </div>
    );
  }
}

export default Team;
