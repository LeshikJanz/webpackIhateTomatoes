import * as React from 'react';
import '../styles/style.scss';
import { ProfileField } from "./ProfileField";
import { ProfileCategory } from "./ProfileCategory";
import { reduxForm } from "redux-form";
import { ProfileAutocomplete } from "components/ReduxFormFields/ProfileAutocomplete";

const Profile = ({ user, style, handleProfileSidebar, dirty, invalid, handleSubmit }) => {
  const isOwner = () => user.id === localStorage.getItem('UserId');

  return (
    <form className="profile-container" style={style} onSubmit={handleSubmit}>
      <div className="short-info">
        <div className="user-avatar">
          <button type="button"
                  onClick={handleProfileSidebar}
                  className="close" aria-label="Close">
            <img src="assets/icons/swipe-right.svg"/>
          </button>
          <img src={user.avatar || `https://randomuser.me/api/portraits/med/men/1.jpg`}/>
        </div>
        <ProfileCategory name="PERSONAL">
          <ProfileField name="Name" disabled={!isOwner()}/>
          <ProfileField name="Username" disabled={true}/>
          <ProfileField name="Birthday" type="date" disabled={!isOwner()}/>
          <ProfileField name="Relationship" disabled={!isOwner()}/>
          <ProfileField name="Nationality" disabled={!isOwner()}/>
          <ProfileField name="Language" disabled={!isOwner()}/>
        </ProfileCategory>
        <ProfileCategory name="Contact">
          <ProfileField name="Mobile" disabled={!isOwner()}/>
          <ProfileField name="Home" disabled={!isOwner()}/>
          <ProfileField name="Email" disabled={true} placeholder=""/>
          <ProfileField name="Skype" disabled={!isOwner()}/>
          <ProfileField name="Address" component={ProfileAutocomplete} disabled={!isOwner()}/>
        </ProfileCategory>
        <ProfileCategory name="Links">
          <ProfileField name="Facebook"
                        disabled={!isOwner()}
                        labelClassName="field-name link-name"
                        classNames="field-value link-value"
                        icon={<img src="assets/icons/social/facebook.svg"/>}/>
          <ProfileField name="VK"
                        disabled={!isOwner()}
                        labelClassName="field-name link-name"
                        classNames="field-value link-value"
                        icon={<img src="assets/icons/social/vk.svg"/>}/>
          <ProfileField name="Twitter"
                        disabled={!isOwner()}
                        labelClassName="field-name link-name"
                        classNames="field-value link-value"
                        icon={<img src="assets/icons/social/twitter.svg"/>}/>
        </ProfileCategory>
        <div className="modal-footer btn-actions">
          <button className="primary" hidden={!isOwner()} type="submit" disabled={!dirty || invalid}>Save</button>
        </div>
      </div>
    </form>
  )
};

export default reduxForm({
  enableReinitialize: true,
  form: 'ProfileForm'
})(Profile);

