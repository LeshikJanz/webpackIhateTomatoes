import * as React from 'react';
import { Link } from 'react-router';
import { urls } from "modules/urls";
const styles = require('../styles/style.scss');
const SVG = require('react-svg');

export const Navigation = () => {

  return (
    <div className="navigation-container">
        <Link to={urls.index}><SVG path="assets/icons/hamburger.svg" className="nav-hamburger"/></Link>
        {/*<img src="assets/icons/hamburger.svg" className="nav-hamburger"/>*/}
      <nav>
        {/*<Link to={urls.index} activeClassName="active">Main</Link>*/}
        <Link to={urls.board} activeClassName="active">Board</Link>
        <Link to={urls.users} activeClassName="active">Users</Link>
      </nav>
    </div>
  )
}