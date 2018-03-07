import React, { Component } from 'react';
import Link, { NavLink } from 'redux-first-router-link';

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
              <NavLink activeClassName='is-active' className="navbar-item"
                       to="/games">Games</NavLink>
              <NavLink activeClassName='is-active' className="navbar-item"
                       to="/teams">Teams</NavLink>
              <NavLink activeClassName='is-active' className="navbar-item" to="/seasons">Seasons</NavLink>
              <NavLink activeClassName='is-active' className="navbar-item" to="/admin">Admin</NavLink>
              <NavLink exact activeClassName='is-active' className="navbar-item" to="/">LogIn/Out</NavLink>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
