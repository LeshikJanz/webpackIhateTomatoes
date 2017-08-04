import * as React from 'react'

export const Subscription = (props) => {
  const { user, knowledge } = props;

  const defaultProfileImg = 'assets/img/default-user-icon.png';

  return (
    <div className="profile">
      <img className="user-img" src={ user && user.avatar || defaultProfileImg }/>
      <div className="user-labels">
        <div className="user-name">{ user && (user.realm || user.username)}</div>
        <div className="user-type">{knowledge.founderId ? 'Renewer' : 'Founder'}</div>
      </div>
    </div>
  )
};