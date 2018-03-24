import React, { Component } from 'react';
import HsCourt from './hsCourt.js';
// import court from './court.png'

class Court extends Component {

  render() {
    return (
      <HsCourt {...this.props}/>
    );
  }
}

export default Court;
