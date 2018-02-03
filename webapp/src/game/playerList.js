import React, { Component } from 'react';

class PlayerList extends Component {
  render() {
    return (
      <div>
        <nav className="panel">
          <label class="panel-block">
            <input type="checkbox"/>
              Player 1
          </label>
          <label class="panel-block">
            <input type="checkbox"/>
              Player 2
          </label>
          <label class="panel-block">
            <input type="checkbox"/>
              Player 3
          </label>
          <label class="panel-block">
            <input type="checkbox"/>
              Player 4
          </label>
          <label class="panel-block">
            <input type="checkbox"/>
              Player 5
          </label>
          <label class="panel-block">
            <input type="checkbox"/>
              Player 6
          </label>
          <label class="panel-block">
            <input type="checkbox"/>
              Player 7
          </label>
        </nav>
      </div>
    );
  }
}

export default PlayerList;
