import * as React from 'react';
import { urls } from "modules/urls";
import { Link } from 'react-router';

export const SkyItem = ({ cloud, isActive, handleActive }) => {


  return (
    <div className='sky-item-container'>
      <div className="item-header">
        <span className="name">{cloud.name}</span>
        <div className="open-cloud">
          <Link to={ urls.cloud + '/' + cloud.id }>
            <button className="tertiary small add">
              Open Cloud
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
};