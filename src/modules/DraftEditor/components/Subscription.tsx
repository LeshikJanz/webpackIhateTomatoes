import * as React from 'react'
import { DEFAULT_PROFILE_IMG } from "constants/index";

export const Subscription = (props) => {
  const { user, knowledge, goToUser } = props;

  return (
    <div className="profile">
      <img onClick={() => goToUser(user.id)}
           className="user-img"
           src={ user && user.avatar || DEFAULT_PROFILE_IMG }
           alt={user.realm || user.username}
      />
      <div className="user-labels">
        <div className="user-name" onClick={() => goToUser(user.id)}>{ user && (user.realm || user.username)}</div>
        <div className="user-type">{knowledge.founderId ? 'Renewer' : 'Founder'}</div>
      </div>
      <img className="tree-view"
           title="Open renewing tree"
           src="assets/icons/tree-map-icon.svg"/>
    </div>
  )
};