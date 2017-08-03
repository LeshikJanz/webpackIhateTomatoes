import * as React from 'react'

export const Subscription = (props) => {
  const { user } = props;

  return (
    <div className="profile">
      <img className="user-img" src={ user && user.avatar }/>
      <div className="user-labels">
        <div className="user-name">{ user && (user.realm || user.username)}</div>
        <div className="user-type">Founder</div>
      </div>
    </div>
  )
};