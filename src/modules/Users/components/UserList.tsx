import * as React from "react";
import { IUser } from "interfaces/index";
import User from "../containers/User";
import { UserSearchMain } from "./Search/UserSearchMain";

export const UserList = ({ users }) => (
  <div className="user-list-container">
    <UserSearchMain/>
    <div className="user-list">
      <div>
        {
          users.map((user: IUser) =>
            <User key={user.id} user={user}/>
          )
        }
      </div>
    </div>
  </div>
);