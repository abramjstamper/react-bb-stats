import React, { Component } from 'react';
import HSCourt from './HSCourt.js';

class Court extends Component {

  render() {
    return (
      <HSCourt {...this.props}/>
    );
  }
}

export default Court;