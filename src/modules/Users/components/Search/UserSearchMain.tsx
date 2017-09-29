import * as React from 'react';
import '../../styles/search.scss';
import UserSearchForm from "../../containers/UserSearchForm";

export const UserSearchMain = (props) => (
  <div className="user-search-main-container">
    <h1>User search main container</h1>
    <UserSearchForm/>
  </div>
);