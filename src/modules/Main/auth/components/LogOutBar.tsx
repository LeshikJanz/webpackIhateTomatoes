import * as React from "react";

/**
 * Header's log out bar
 */
export const LogOutBar = ( props ) => (
  <div>
    <button style={{ width: '100px' }}
            onClick={ props.logOut }
            className="tertiary small add">
      Log out
    </button>
  </div>
)