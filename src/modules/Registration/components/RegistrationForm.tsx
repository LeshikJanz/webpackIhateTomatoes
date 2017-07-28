import * as React from "react";
import { Field, reduxForm } from "redux-form";
const Dropzone = require('react-dropzone');
import PlacesAutocomplete from 'react-places-autocomplete'
const styles = require('../styles/style.scss');
const classNames = require('classnames/bind');
const cx = classNames.bind(styles);

/**
 * Google place autocomplete for Redux Form Field
 */
const places = ( { input } ) => {
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

/**
 * Registration form
 */
let RegistrationForm = props => {

  /**
   * Dropzone input for Redux Form Field
   */
  const dropzone = () => {
    const onDrop = ( acceptedFiles, rejectedFiles ) => {
      props.handleImageUpload(acceptedFiles[ 0 ]);
    };

    return (
      <Dropzone onDrop={ onDrop }>
        <p>Drag n drop a profile picture here or&nbsp;
          <ins>browse for one on your computer</ins>
        </p>
      </Dropzone>
    )
  };

  return (
    <form className="form-container" onSubmit={ props.handleSubmit }>
      <div className="modal-body">
        <div className={cx(['dropzone'])}>
          <Field
            name="avatar"
            component={dropzone}
            label="Dropzone"
          />
          <img src={props.avatar}/>
        </div>

        <div className="form-element">
          <label htmlFor="username">User name</label>
          <div>
            <Field placeholder="Enter your user name..." name="username" className="input-container input-modal"
                   component="input"
                   type="text"/>
          </div>
        </div>
        <div className="form-element">
          <label htmlFor="email">Email</label>
          <div>
            <Field placeholder="Enter your email..." name="email" className="input-container input-modal"
                   component="input"
                   type="text"/>
          </div>
        </div>
        <div className="form-element">
          <label htmlFor="password">Password</label>
          <div>
            <Field placeholder="Enter your password..." name="password" className="input-container input-modal"
                   component="input" type="password"/>
          </div>
        </div>
        <div className="form-element">
          <label htmlFor="address">Address</label>
          <div>
            <Field name="address"
                   component={places} label="address"/>
          </div>
        </div>
        <div className="modal-footer btn-actions">
          <button className="primary" type="submit">Confirm</button>
          <button className="secondary">Cancel</button>
        </div>
      </div>
    </form>
  )
};

RegistrationForm = reduxForm({
  form: 'RegistrationForm'
})(RegistrationForm);

export default RegistrationForm;