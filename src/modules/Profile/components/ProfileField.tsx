import * as React from 'react';
import '../styles/field.scss';

export const ProfileField = ({ name, value, disabled }) => (
  <div className="profile-field-container">
    <label htmlFor={name} className="field-name">{name}</label>
    <input name={name} className="field-value" disabled={disabled} value={value}/>
  </div>
);