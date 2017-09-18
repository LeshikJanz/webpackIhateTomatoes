import * as React from "react";
import { DEFAULT_PROFILE_IMG } from "constants/index";
require('../styles/style.scss');

/**
 * Header's log out bar
 */
export const LogOutBar = ({ logOut, goToUserProfile }) => {
  const user = JSON.parse(localStorage.getItem('Account'));

  return (
    <div className="profile">
      <img className="user-img profile-img"
           onClick={() => goToUserProfile(user.id)}
           src={ user && (user.avatar || DEFAULT_PROFILE_IMG) }
           alt={user && (user.realm || user.username)}
      />
      <div className="user-labels">
        <button className="user-name user-name-dropdown">{ user && (user.realm || user.username)}</button>

        <button style={{ width: '100px' }}
                onClick={ logOut }
                className="tertiary small add">
          Log out
        </button>
      </div>
    </div>
  )
};