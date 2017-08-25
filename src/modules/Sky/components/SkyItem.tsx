import * as React from 'react';

export const SkyItem = ({ cloud, isActive, handleActive }) => (
  <div className='sky-item-container'>
    <span className="text">{cloud.name}</span>
  </div>
);