import React, { Component } from 'react';
import court from './court.png'

class Court extends Component {
  render() {
    return (
      <div>
        <img src={court} alt="Logo" />
      </div>
    );
  }
}

export default Court;
