import * as React from "react";
import * as moment from "moment";

export const renderField =
  ({
     input,
     placeholder,
     labelClassName,
     label,
     disabled,
     type,
     className,
     meta: { asyncValidating, touched, error, warning }
   }) => {
    const getAccordingToType = (value) => {
      switch ( type ) {
        case 'date':
          return moment(value).format('YYYY-MM-DD');
          break;
        default:
          return value
      }
    };

    return (
      <div>
        <label style={ touched && ( error || warning) ? { color: '#ff0000' } : {} }
               className={labelClassName || "input-label" }>{label}</label><br/>
        <div className={asyncValidating ? 'async-validating' : ''}>
          <input {...input}
                 placeholder={placeholder}
                 disabled={disabled}
                 type={type}
                 value={getAccordingToType(input.value)}
                 className={className}
                 style={ touched && ( error || warning) ? { border: '1px solid #ff0000' } : {} }
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
      </div>)
  }