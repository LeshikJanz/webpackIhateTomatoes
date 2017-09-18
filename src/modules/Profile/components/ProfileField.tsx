import * as React from 'react';
import '../styles/field.scss';

export const ProfileField = ({ name, value, isEditable }) => (
  <div className="profile-field-container">
    <div className="field-name">{name}</div>
    <div className="field-value">{value}</div>
  </div>
)