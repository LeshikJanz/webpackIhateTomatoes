import * as React from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';

/**
 * Google place autocomplete for Redux Form Field
 */
export const Places = ({ input, cssClasses, placeholder, ...props }) => {
  const placesCssClasses = cssClasses || {
      root: 'form-group',
      input: 'input-container input-modal',
      autocompleteContainer: 'my-autocomplete-container'
    };

  const inputProps = {
    value: input.value,
    onChange: input.onChange,
    placeholder: placeholder || 'Search Places...'
  };

  const handleSelect = (address) => {
    input.onChange(address);
    props.handleSelect();
  };

  return (
    <PlacesAutocomplete
      classNames={placesCssClasses}
      onSelect={handleSelect}
      inputProps={inputProps}/>
  )
};