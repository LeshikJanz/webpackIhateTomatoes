import * as React from 'react';
import { Link } from 'react-router';
import { urls } from "modules/urls";
import '../styles/style.scss';
const SVG = require('react-svg');

export const Navigation = () => (
  <div className="navigation-container">
    <Link to={urls.index}><SVG path="assets/icons/hamburger.svg" className="nav-hamburger"/></Link>
    <nav>
      <Link to={urls.board} activeClassName="active">Board</Link>
      <Link to={urls.users} activeClassName="active">Users</Link>
    </nav>
  </div>
)