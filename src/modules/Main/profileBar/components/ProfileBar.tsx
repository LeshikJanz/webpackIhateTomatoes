import * as React from 'react';
import { DEFAULT_PROFILE_IMG } from "constants/index";

export const ProfileBar = (props) => {
  const { user } = props;

  return (
    <div className="profile">
      <img className="user-img" src={ user && user.avatar || DEFAULT_PROFILE_IMG }/>
      <div className="user-labels">
        <div className="user-name">{ user && (user.realm || user.username)}</div>
      </div>
    </div>
  )
};