import * as React from 'react';
const styles = require('./style.scss');

export const Search = (props) => (
  <div className="search-bar">
    <input type="text" onChange={ props.onChange }/>
  </div>
);