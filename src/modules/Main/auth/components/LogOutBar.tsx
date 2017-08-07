import * as React from "react";
import { DEFAULT_PROFILE_IMG } from "constants/index";
require('../styles/style.scss');
import { DropdownMenu, MenuItem } from 'react-bootstrap-dropdown-menu';

/**
 * Header's log out bar
 */
export const LogOutBar = (props) => {
  const user = JSON.parse(localStorage.getItem('Account'));
  console.log('user');
  console.log(user);

  return (
    <div>
      <div className="profile">
        <img className="user-img profile-img"
             src={ user.avatar || DEFAULT_PROFILE_IMG }
             alt={user.realm || user.username}
        />
        <div className="user-labels">
          <button className="user-name user-name-dropdown">{ user && (user.realm || user.username)}</button>

          <button style={{ width: '100px' }}
                  onClick={ props.logOut }
                  className="tertiary small add">
            Log out
          </button>
          {/*<DropdownMenu triggerType='text' trigger={ user.realm || user.username}>*/}
            {/*<MenuItem text='Home' location='/texttrigger'/>*/}
            {/*<MenuItem text='Edit Profile' location='/texttrigger'/>*/}
            {/*<MenuItem text='Logout' location='/texttrigger'/>*/}
          {/*</DropdownMenu>*/}
        </div>

      </div>



    </div>
  )
};