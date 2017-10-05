import * as React from "react";
import { IUser } from "interfaces/index";
import User from "../containers/User";
import { UserSearchMain } from "./Search/UserSearchMain";

export const UserList = ({ users, userSearchForm }) => (
  <div className="user-list-container">
    <UserSearchMain/>
    {
      !users.length ?  // No users found or not chose a filter
        <div className="no-found-label">
          <h1 hidden={userSearchForm}>Choose parameters to run search.</h1>
          <h1 hidden={!userSearchForm}>There is no one user found.</h1>
        </div> :
        <div className="user-list">
          <div>
            {
              users.map((user: IUser) =>
                <User key={user.id} user={user}/>
              )
            }
          </div>
        </div>
    }
  </div>
);