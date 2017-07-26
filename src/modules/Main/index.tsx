import * as React from "react";
import { Cloud } from "../Cloud/components/Cloud";
require('./styles/style.scss');

/**
 * Main page
 */
export const Main = ( props ) => (
  <div>
    <div className="centered-container welcome-text">
      <h2>Big Head is a perfect tool for preservation
       your own experience and exchange of
       knowledge with people from all over the world</h2>
      <div>
        <button className="primary get-started-button">
          Get Started
        </button>
      </div>
    </div>
    <div className="blur" style={{ pointerEvents: 'none' }}>
      <Cloud/>
    </div>
  </div>
)