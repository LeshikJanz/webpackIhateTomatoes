import * as React from 'react';
import '../styles/style.scss';
import { ProfileField } from "./ProfileField";
import { ProfileCategory } from "./ProfileCategory";

export const Profile = ({ user }) => {

  return (
    <div className="profile-container">
      <div className="short-info">
        <div className="user-avatar">
          <img src={user.avatar || `https://randomuser.me/api/portraits/med/men/1.jpg`}/>
        </div>
        <ProfileCategory name="PERSONAL">
          <ProfileField name="Name" value="Petya asdg asdgaw egaw gasdgawe gasdg"/>
          <ProfileField name="Birthday" value="Petya"/>
          <ProfileField name="Relationship" value="Petya"/>
          <ProfileField name="Nationality" value="Petya"/>
          <ProfileField name="Language" value="Petya"/>
        </ProfileCategory>
      </div>
      <div className="long-info">

      </div>
    </div>
  )
}