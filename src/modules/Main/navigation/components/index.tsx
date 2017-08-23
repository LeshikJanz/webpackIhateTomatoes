import * as React from 'react';
import { Link } from 'react-router';
import { urls } from "modules/urls";
const styles = require('../styles/style.scss');

export const Navigation = () => {

  return (
    <div className="navigation-container">
      <div>
        <img src="assets/icons/hamburger.svg" className="nav-hamburger"/>
      </div>
      <nav>
        <Link to={urls.index}>Main</Link>
        <Link to={urls.board}>Board</Link>
        <Link to={urls.users}>Users</Link>
      </nav>
    </div>
  )
}