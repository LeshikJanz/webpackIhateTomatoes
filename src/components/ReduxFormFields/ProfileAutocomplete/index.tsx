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
      <div style={disabled ? { pointerEvents: 'none' } : {}}>
        <label style={ touched && ( error || warning) ? { color: '#ff0000' } : {} }
               className={labelClassName}>{label}</label>
        <PlacesAutocomplete classNames={placesCssClasses}
                            placeholder={placeholder}
                            inputProps={inputProps}
        />
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