import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Nav() {
  return (
    <ul className="nav">
      <li>
        <NavLink exact className="nav-link" activeClassName="active" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-link" activeClassName="active" to="/about">
          About
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-link" activeClassName="active" to="/contact">
          Contact
        </NavLink>
      </li>
    </ul>
  );
}

export default Nav;