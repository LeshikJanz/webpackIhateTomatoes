import * as React from 'react';
import '../styles/style.scss';
import { ProfileField } from "./ProfileField";
import { ProfileCategory } from "./ProfileCategory";
import { reduxForm } from "redux-form";

const Profile = ({ user, style, handleProfileSidebar }) => {

  const handleSubmit = (e) => {
    console.log('handleSubmit');
    console.log(e);
  }

  return (
    <form className="profile-container" style={style} onSubmit={handleSubmit}>
      <div className="short-info">
        <div className="user-avatar">
          <img src={user.avatar || `https://randomuser.me/api/portraits/med/men/1.jpg`}/>
        </div>
        <ProfileCategory name="PERSONAL">
          <ProfileField name="Name"/>
          <ProfileField name="Birthday" disabled={true}/>
          <ProfileField name="Relationship"/>
          <ProfileField name="Nationality"/>
          <ProfileField name="Language"/>
        </ProfileCategory>
        <ProfileCategory name="Contact">
          <ProfileField name="Mobile"/>
          <ProfileField name="Home"/>
          <ProfileField name="Email"/>
          <ProfileField name="Skype"/>
          <ProfileField name="Address"/>
        </ProfileCategory>
        <ProfileCategory name="Links">
          <ProfileField name="Facebook"
                        labelClassName="field-name link-name"
                        classNames="field-value link-value"
                        icon={<img src="assets/icons/social/facebook.svg"/>}/>
          <ProfileField name="VK"
                        labelClassName="field-name link-name"
                        classNames="field-value link-value"
                        icon={<img src="assets/icons/social/vk.svg"/>}/>
          <ProfileField name="Twitter"
                        labelClassName="field-name link-name"
                        classNames="field-value link-value"
                        icon={<img src="assets/icons/social/twitter.svg"/>}/>
        </ProfileCategory>
      </div>
      <button type="button"
              onClick={handleProfileSidebar}
              className="close" aria-label="Close">
        <img src="assets/icons/close.svg"/>
      </button>
    </form>
  )
};

export default reduxForm({
  form: 'ProfileForm'
})(Profile);

