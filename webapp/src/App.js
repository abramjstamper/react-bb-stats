import React, { Component } from 'react';
import NavBar from './navbar'
import Game from './game/game'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Game />
      </div>
    );
  }
}

export default App;
