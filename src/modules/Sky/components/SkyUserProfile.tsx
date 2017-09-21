import * as React from 'react';
import '../styles/profile.scss';

export const SkyUserProfile = ({ user, handleProfileSidebar }) => (
  <div className="sky-user-profile"
       onClick={() => handleProfileSidebar(user.id)}
  >
    <img src={user.avatar || `assets/icons/spinner.svg`}/>
    <label className="name">{user.name || user.username}</label>
  </div>
);