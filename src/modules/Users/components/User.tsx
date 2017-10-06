import * as React from "react";
import '../styles/style.scss';
import * as moment from 'moment';

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
        <div className="address">
          {user.address}
        </div>
        <div hidden={true} className="register-date">
          {user.birthday && moment(user.birthday).format('MMMM Do YYYY')}
        </div>
      </div>
      <button className="gray open-sky align-center nowrap"
              onClick={ () => goToUserBoard(user.id) }>
        View sky
      </button>
    </div>
  </div>
);