import * as React from 'react';
import { withState } from 'recompose';
import './style.scss';
import { Field } from "redux-form";

export const SearchFormField = ({ name, onChange, searchValue, setSearchValue, numberFounded, styles }) => (
  <div className="search-bar">
    <Field component="input" type="text" name={name}/>
    {
      !numberFounded && searchValue &&
      <div className="search-hint-text">not found</div>
    }
  </div>
);