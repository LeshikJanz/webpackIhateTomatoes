import * as React from "react";
import '../styles/style.scss';

export const User = ({ user, handleProfileSidebar, goToUserBoard }) => (
  <div className="user-container">
    <div className="user">
      <div className="user-avatar-small"
           onClick={() => handleProfileSidebar(user.id)}
      >
        <img src={user.avatar || `https://randomuser.me/api/portraits/med/men/1.jpg`}/>
      </div>
      <div className="user-data">
        <div className="user-name">
          { user.username }
        </div>
        <div className="register-date">
          1 Feb, 2017
        </div>
      </div>
      <button className="gray small add"
              onClick={ () => goToUserBoard(user.id) }>
        View sky
      </button>
    </div>
  </div>
);