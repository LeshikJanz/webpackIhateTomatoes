import * as React from 'react';
import { Link } from 'react-router';
const styles = require('../styles/style.scss');

export const Navigation = () => {

  return (
    <div className="navigation-container">
      <div>
        <img src="assets/icons/hamburger.svg" className="nav-hamburger"/>
      </div>
      <nav>
        <Link>Main</Link>
        <Link>Board</Link>
        <Link>Users</Link>
      </nav>
    </div>
  )
}