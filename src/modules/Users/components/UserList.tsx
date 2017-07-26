import * as React from "react";
import { IUser } from "interfaces/index";
import { User } from "./User";
import { Search } from "components/Search/Search";

export const UserList = (props) => (
  <div className="user-list">
    <Search onChange={props.getUsers}/>
    <div>
      {
        props.users.map((user: IUser) =>
          <User key={user.id} user={user}/>
        )
      }
    </div>
  </div>
)