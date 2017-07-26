import * as React from "react";
import { IUser } from "interfaces/index";
import { User } from "./User";

export const UserList = (props) => (
  <div>
    {
      props.users.map((user: IUser) =>
        <User key={user.id} user={user}/>
      )
    }
  </div>
)