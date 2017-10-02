import * as React from 'react';

export const CollapsingLabel = ({ title, htmlFor, isOpened, handleOpen }) => (
  <label htmlFor={htmlFor} onClick={() => handleOpen(!isOpened)}>
    {title}
    <img hidden={!isOpened}
         className="expandIcon" src="assets/icons/expand-icon.svg"/>
    <img hidden={isOpened}
         className="collapseIcon" src="assets/icons/expand-icon.svg"/>
  </label>
);