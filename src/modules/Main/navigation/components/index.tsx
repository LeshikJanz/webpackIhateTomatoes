import * as React from 'react';
import { Link } from 'react-router';
import { urls } from "urls";
import '../styles/style.scss';
const SVG = require('react-svg');

export const Navigation = ({ goToUrl, goToBoard }) => (
  <div className="navigation-container">
    <Link to={urls.index}><SVG path="assets/icons/hamburger.svg" className="nav-hamburger"/></Link>
    <nav>
      <Link to={urls.research} activeClassName="active">Find&nbsp;new</Link><br/>
      <Link to={urls.board} activeClassName="active" onClick={goToBoard}>Board</Link>
      <Link to={urls.users} activeClassName="active">Users</Link><br/>
      <Link to={urls.settings} activeClassName="active">Settings</Link>
    </nav>
  </div>
);