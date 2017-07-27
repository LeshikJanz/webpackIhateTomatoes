import * as React from 'react';
const styles = require('./style.scss');

export const Search = (props) => (
  <div className="search-bar">
    <input type="text" name={props.name} onChange={ props.onChange }/>
  </div>
);