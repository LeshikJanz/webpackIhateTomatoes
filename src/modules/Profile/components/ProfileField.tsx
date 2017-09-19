import * as React from 'react';
import '../styles/field.scss';
import { Field } from "redux-form";
import { renderField } from "components/ReduxFormFields/RenderField/index";

export const ProfileField = ({ name, value, disabled, icon, labelClassName, classNames, type, component, validate, placeholder }) => (
  <div className="profile-field-container">
    <Field name={name.toLowerCase()}
           label={icon || name}
           type={type}
           validate={validate}
           labelClassName={labelClassName || 'field-name'}
           className={classNames || 'field-value'}
           disabled={disabled}
           value={value}
           placeholder={placeholder}
           component={component || renderField}/>
  </div>
);