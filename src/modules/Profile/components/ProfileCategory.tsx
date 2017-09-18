import * as React from 'react';
import '../styles/category.scss';

export const ProfileCategory = ({ name, children }) => (
  <div className="profile-category-container">
    <div className="profile-category">
      <h4>{name}</h4>
    </div>
    <div>

    </div>
    {children}
  </div>
)