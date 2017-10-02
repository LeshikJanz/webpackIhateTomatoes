import * as React from 'react';
import '../../styles/search.scss';
import UserSearchForm from "../../containers/UserSearchForm";

export const UserSearchMain = (props) => (
  <div className="user-search-main-container">
    <div className="search-header">
      <h1>Find people</h1>
    </div>
    <UserSearchForm/>
  </div>
);