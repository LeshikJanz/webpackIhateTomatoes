import * as React from 'react';
import PlacesAutocomplete from 'react-places-autocomplete'

/**
 * Google place autocomplete for Redux Form Field
 */
export const Places = ({ input }) => {
  const placesCssClasses = {
    root: 'form-group',
    input: 'input-container input-modal',
    autocompleteContainer: 'my-autocomplete-container'
  };

  const inputProps = {
    value: input.value,
    onChange: input.onChange,
    placeholder: 'Search Places...'
  };

  return (
    <div>
      <PlacesAutocomplete
        classNames={placesCssClasses}
        inputProps={inputProps}/>
    </div>
  )
};