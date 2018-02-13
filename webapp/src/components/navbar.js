import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar is-primary">
          <div className="navbar-brand">
            react-bb-stats
          </div>
          <div className="navbar-menu">
            <div className="navbar-end">
              <a className="navbar-item">
                Games
              </a>
              <a className="navbar-item">
                Teams
              </a>
              <a className="navbar-item">
                Seasons
              </a>
              <a className="navbar-item">
                Admin
              </a>
              <a className="navbar-item">
                Login/Logout
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
