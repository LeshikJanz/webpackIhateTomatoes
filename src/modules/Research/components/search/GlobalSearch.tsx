import * as React from 'react';
import { Field } from "redux-form";
import '../../styles/global-search.scss';
import '../../styles/transition.scss';

export const GlobalSearch = ({ name, placeholder, numberFounded, searchValue }) => (
  <div className="global-search-container">
    <Field component="input" type="text" name={name} placeholder={placeholder}/>
    {
      !numberFounded && searchValue &&
      <div className="search-hint-text">not found</div>
    }
  </div>
);