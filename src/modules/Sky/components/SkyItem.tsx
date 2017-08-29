import * as React from 'react';
import { urls } from "modules/urls";
import { Link } from 'react-router';
const SVG = require('react-svg');

export const SkyItem = ({ cloud, isActive, handleActive }) => (
  <div className='sky-item-container'>
    <div className="item-header">
      <span className="name">{cloud.name}</span>
      <div className="open-cloud">
        <SVG path="assets/icons/open-cloud-collapsed.svg" className="open-cloud-collapsed"/>
        <Link to={ urls.cloud + '/' + cloud.id }>
          <button className="tertiary small add">
            Open Cloud
          </button>
        </Link>
      </div>
    </div>
    <div className="goal thin-label">
      {cloud.goal}
    </div>
    <div className="item-footer">
      <div className="views-counter">
        <SVG path="assets/icons/views.svg" className="counter-icon"/>
        <div className="thin-label">123</div>
      </div>
      <div className="reviews-counter">
        <SVG path="assets/icons/review.svg" className="counter-icon"/>
        <div className="thin-label">10</div>
      </div>
    </div>
  </div>
);