import * as React from 'react';
import { Link } from 'react-router';
import { urls } from "urls";
import '../styles/style.scss';
const SVG = require('react-svg');

export const Navigation = ({ goToUrl, goToBoard }) => (
  <div className="navigation-container">
    <SVG path="assets/icons/hamburger.svg" className="nav-hamburger"/>
    <nav>
      <Link to={urls.research} activeClassName="active">Find&nbsp;new</Link>
      <Link to={urls.board} activeClassName="active" onClick={goToBoard}>Board</Link>
      <Link to={urls.users} activeClassName="active">Users</Link>
      <Link to={urls.settings} activeClassName="active">Settings</Link>
    </nav>
  </div>
);