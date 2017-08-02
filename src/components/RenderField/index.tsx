import * as React from "react";

export const renderField = ({
  input,
  placeholder,
  label,
  type,
  className,
  meta: { asyncValidating, touched, error, warning }
}) => (
  <div>
    <label style={ touched && ( error || warning) ? { color: '#ff0000'} : {} }>{label}</label>
    <div className={asyncValidating ? 'async-validating' : ''}>
      <input {...input}
        placeholder={placeholder}
        type={type}
        className={className}
        style={ touched && ( error || warning) ? { border: '1px solid #ff0000'} : {} }
      /><br/>
      {touched &&
      ((error &&
      <span>
            {error}
          </span>) ||
      (warning &&
      <span>
              {warning}
            </span>))}
    </div>
  </div>);