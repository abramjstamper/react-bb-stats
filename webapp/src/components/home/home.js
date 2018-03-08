import React, { Component } from 'react';
import CreateAccount from './createAccount';
import Login from './login';

class Home extends Component {

  render() {
    return (
      <div className="container">
        <div className="section">
          <h1 className="title is-3">You need to login first!</h1>
          <div className="columns">
            <div className="column"><Login /></div>
            <div className="column"><CreateAccount /></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
