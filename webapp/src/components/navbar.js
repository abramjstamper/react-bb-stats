import React, { Component } from 'react';
import Link from 'redux-first-router-link';

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar is-primary">
          <div className="navbar-brand">
            <Link to="/">react-bb-stats</Link>
          </div>
          <div className="navbar-menu">
            <div className="navbar-end">
              <Link className="navbar-item" to="/games">Games</Link>
              <Link className="navbar-item" to="/teams">Teams</Link>
              <Link className="navbar-item" to="/seasons">Seasons</Link>
              <Link className="navbar-item" to="/admin">Admin</Link>
              <Link className="navbar-item" to="/">LogIn/Out</Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
