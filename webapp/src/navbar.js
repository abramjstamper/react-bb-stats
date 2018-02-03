import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar is-primary">
          <div class="navbar-brand">
            react-bb-stats
          </div>
          <div class="navbar-menu">
            <div class="navbar-end">
              <a class="navbar-item">
                Games
              </a>
              <a class="navbar-item">
                Teams
              </a>
              <a class="navbar-item">
                Seasons
              </a>
              <a class="navbar-item">
                Admin
              </a>
              <a class="navbar-item">
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
