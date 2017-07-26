import * as React from "react";
const styles = require('../styles/style.scss');

export const User = (props) => {
  const { user } = props;

  return (
    <div className="user-container">
      <div className="user">
        <div className="user-avatar-small">
          <img src={user.avatar || `https://randomuser.me/api/portraits/med/men/1.jpg`} alt=""/>
        </div>
        <div>
          <div className="user-name">
            { user.username }
          </div>
          <div className="register-date">
            1 Feb, 2017
          </div>
        </div>
        <button className="gray small add">
          View user
        </button>
      </div>
    </div>
  )
}