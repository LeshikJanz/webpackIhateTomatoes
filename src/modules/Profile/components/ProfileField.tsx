import * as React from 'react';
import '../styles/field.scss';
import { Field } from "redux-form";
import { renderField } from "components/RenderField";

export const ProfileField = ({ name, value, disabled }) => (
  <div className="profile-field-container">
    <Field name={name}
           label={name}
           labelClassName="field-name"
           className="field-value"
           disabled={disabled}
           value={value}
           component={renderField}/>
  </div>
);