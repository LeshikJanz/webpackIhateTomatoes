import * as React from 'react';
import { withState } from 'recompose';
import './style.scss';

const enhance = withState('searchValue', 'setSearchValue');

export const Search = enhance(({ name, onChange, searchValue, setSearchValue, numberFounded }) => {

  const handleSearch = (e: Event) => {
    onChange(e);
    setSearchValue(e.target.value);
  };

  return (
    <div className="search-bar">
      <input type="text" name={name} onChange={ handleSearch }/>
      {
        !numberFounded && searchValue &&
        <div className="search-hint-text">not found</div>
      }
    </div>
  )
});