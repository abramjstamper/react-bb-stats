import React from 'react';
import Link, { NavLink } from 'redux-first-router-link';

const SideMenu = props => {
  return (
    <aside className="menu">
      <h2 className="menu-label">
        Actions
      </h2>
      <ul className="menu-list">
        <li><NavLink to="/dashboard" activeClassName="is-active">Dashboard</NavLink></li>
        <li><NavLink to="/reports" activeClassName="is-active">Reports</NavLink></li>
        <li><NavLink to="/games" activeClassName="is-active">Games</NavLink></li>
        <li><NavLink to="/viewer" activeClassName="is-active">Media View</NavLink></li>
      </ul>
      <p className="menu-label">
        Team Administration
      </p>
      <ul className="menu-list">
        <li><NavLink to="/seasons" activeClassName="is-active">Seasons</NavLink></li>
        <li><NavLink to="/teams" activeClassName="is-active">Teams</NavLink></li>
        <li><NavLink to="/tournaments" activeClassName="is-active">Tournaments</NavLink></li>
        <p className="menu-label">
          Settings
        </p>
        <li><a>Users</a></li>
        <li><a>Officials</a></li>
        <li><a>Rules</a></li>
        <li><a>Settings</a></li>
      </ul>
    </aside>
  );
};

export default SideMenu;