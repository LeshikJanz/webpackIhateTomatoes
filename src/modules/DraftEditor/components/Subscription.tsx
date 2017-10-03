import * as React from 'react'
import { DEFAULT_PROFILE_IMG } from "constants/index";

export const Subscription = ({ user, knowledge, goToUser }) => (
  <div className="profile">
    <img onClick={() => goToUser(user.id)}
         className="draft-editor-profile-img"
         src={ user && user.avatar || DEFAULT_PROFILE_IMG }
         alt={(user && (user.realm || user.username)) || 'No Name'}
    />
    <div className="user-labels">
      <div className="user-name" onClick={() => goToUser(user.id)}>{ (user && (user.realm || user.username)) || 'No Name'}</div>
      <div className="user-type">{knowledge.founderId ? 'Renewer' : 'Founder'}</div>
    </div>
  </div>
);