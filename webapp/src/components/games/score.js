import React, { Component } from 'react';

class Score extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content has-text-centered">
          <h1>{this.props.teamName}</h1>
          <h2>{this.props.score || 0}</h2>
        </div>
      </div>
    );
  }
}

export default Score;