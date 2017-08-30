import * as React from 'react';
import { Link } from 'react-router';
import { urls } from "urls";
import '../styles/style.scss';
const SVG = require('react-svg');

export const Navigation = ({ goToUrl, goToBoard }) => (
  <div className="navigation-container">
    <Link to={urls.index}><SVG path="assets/icons/hamburger.svg" className="nav-hamburger"/></Link>
    <nav>
      <Link activeClassName="active" onClick={goToBoard}>Board</Link>
      <Link activeClassName="active" onClick={() => goToUrl(urls.users)}>Users</Link>
    </nav>
  </div>
);