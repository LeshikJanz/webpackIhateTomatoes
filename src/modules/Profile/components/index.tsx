import * as React from 'react';
import '../styles/style.scss';
import { ProfileField } from "./ProfileField";
import { ProfileCategory } from "./ProfileCategory";
import { reduxForm } from "redux-form";

const Profile = ({ user }) => {

  const handleSubmit = (e) => {
    console.log('handleSubmit');
    console.log(e);
  }

  return (
    <form className="profile-container" onSubmit={handleSubmit}>
      <div className="short-info">
        <div className="user-avatar">
          <img src={user.avatar || `https://randomuser.me/api/portraits/med/men/1.jpg`}/>
        </div>
        <ProfileCategory name="PERSONAL">
          <ProfileField name="Name" value="Petya asdg asdgaw egaw gasdgawe gasdg"/>
          <ProfileField name="Birthday" value="Petya" disabled={true}/>
          <ProfileField name="Relationship" value="Petya"/>
          <ProfileField name="Nationality" value="Petya"/>
          <ProfileField name="Language" value="Petya"/>
        </ProfileCategory>
      </div>
      <div className="long-info">

      </div>
    </form>
  )
};

export default reduxForm({
  form: 'ProfileForm'
})(Profile);

