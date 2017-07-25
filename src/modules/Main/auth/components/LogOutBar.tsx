import * as React from "react";

export const LogOutBar = (props) => (
  <div className="navbar-collapse collapse">
    <button style={{ width: '100px', margin: '10px' }}
            onClick={ props.logOut }
            className="tertiary small add">
      Log out
    </button>
  </div>
)