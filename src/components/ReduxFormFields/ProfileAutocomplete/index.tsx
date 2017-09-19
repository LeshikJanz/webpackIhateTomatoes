import * as React from "react";
import PlacesAutocomplete from 'react-places-autocomplete'

/**
 * Google place autocomplete for Redux Form Field
 */
export const ProfileAutocomplete =
  ({
     input,
     placeholder,
     labelClassName,
     label,
     disabled,
     className,
     meta: { touched, error, warning }
   }) => {

    const placesCssClasses = {
      root: 'form-group',
      input: className,
      autocompleteContainer: 'my-autocomplete-container'
    };

    const inputProps = {
      value: input.value,
      onChange: input.onChange,
      placeholder: 'Search Places...'
    };

    return (
      <div>
        <label style={ touched && ( error || warning) ? { color: '#ff0000' } : {} }
               className={labelClassName}>{label}</label>
        <PlacesAutocomplete classNames={placesCssClasses}
                            placeholder={placeholder}
                            inputProps={inputProps}
                            disabled={disabled}
                            style={ touched && ( error || warning) ? { border: '1px solid #ff0000' } : {} }/>
        <br/>
        {touched &&
        ((error &&
        <span>
            {error}
          </span>) ||
        (warning &&
        <span>
              {warning}
            </span>))}
      </div>);
  }