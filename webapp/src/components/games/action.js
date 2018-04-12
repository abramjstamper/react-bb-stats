import React, { Component } from 'react';

class Action extends Component {

  render() {
    return (
        <div className="has-text-centered">
          <h1><b>{this.props.actionText}</b></h1>
        </div>
    );
  }
}

export default Action;
