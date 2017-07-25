import * as React from "react";

/**
 * Header's log out bar
 */
export const LogOutBar = ( props ) => (
  <div className="navbar-collapse collapse">
    <button style={{ width: '100px', margin: '10px' }}
            onClick={ props.logOut }
            className="tertiary small add">
      Log out
    </button>
  </div>
)