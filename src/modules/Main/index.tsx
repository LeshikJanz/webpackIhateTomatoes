import * as React from "react";
import { Cloud } from "../Cloud/components/Cloud";
import { Link } from 'react-router';
import { urls } from "urls";
import Link from "../DraftEditor/components/LinkPicker";
require('./styles/style.scss');

export const Base = (props) => (
  <div className="main-container">
    {props.children}
  </div>
);
/**
 * Main page
 */
export const Main = (props) => (
  <div className="main-block">
    <div className="centered-container welcome-text">
      <h2>Big Head is a perfect tool for preservation
        your own experience and exchange of
        knowledge with people from all over the world</h2>
      <div>
        <Link to={ urls.registration }>
          <button className="primary get-started-button">
            Get Started!
          </button>
        </Link>
      </div>
    </div>
    <div className="blur" style={{ pointerEvents: 'none' }}>
      <Cloud/>
    </div>
  </div>
)