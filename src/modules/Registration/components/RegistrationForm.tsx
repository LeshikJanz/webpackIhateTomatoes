import * as React from "react";
import { Field, reduxForm } from "redux-form";
const Dropzone = require('react-dropzone');
import PlacesAutocomplete from 'react-places-autocomplete'
const styles = require('../styles/style.scss');
const classNames = require('classnames/bind');
const cx = classNames.bind(styles);
import { Link, browserHistory } from 'react-router';
import {
  email, required, minValue18, minLength4, minLength8, asyncValidate
} from "components/RenderField/validators";
import { renderField } from "components/RenderField/index";

/**
 * Google place autocomplete for Redux Form Field
 */
const places = ({ input }) => {
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
  const dropzone = ({ avatar }) => {
    const onDrop = (acceptedFiles, rejectedFiles) => {
      props.handleImageUpload(acceptedFiles[0]);
    };

    console.log('avatar');
    console.log(avatar);

    return (
      <Dropzone onDrop={ onDrop } className="dropzone-area">
        {
          avatar ? <img src={avatar}/> :
            <p>Drag n drop a profile picture here or&nbsp;
              <ins>browse for one on your computer</ins>
            </p>
        }
      </Dropzone>
    )
  };

  return (
    <form className="form-container" onSubmit={ props.handleSubmit }>
      <div className="registration-bar">
        <Link className="hvr-icon-wobble-horizontal" onClick={browserHistory.goBack}>Back</Link>
        <h1 style={{ color: '#62B006' }}>Sign Up</h1>
      </div>
      <div className="modal-body">
        <div className={cx(['dropzone'])}>
          <Field
            name="avatar"
            component={dropzone}
            label="Dropzone"
            avatar={props.avatar}
          />
          {/*<img src={props.avatar}/>*/}
        </div>

        <div className="form-element">
          <div>
            <Field placeholder="Enter your user name..." name="username" className="input-container input-modal"
                   label="User name"
                   component={renderField}
                   validate={[required, minLength4]}
                   type="text"/>
          </div>
        </div>
        <div className="form-element">
          <div>
            <Field placeholder="Enter your email..." name="email" className="input-container input-modal"
                   label="Email"
                   component={renderField}
                   validate={[required, email]}
                   type="text"/>
          </div>
        </div>
        <div className="form-element">
          <div>
            <Field placeholder="Enter your password..." name="password" className="input-container input-modal"
                   label="Password"
                   component={renderField}
                   validate={[required, minLength8]}
                   type="password"/>
          </div>
        </div>
        <div className="form-element">
          <label htmlFor="address">Address</label>
          <div>
            <Field name="address"
                   component={places} label="address"/>
          </div>
        </div>
        <div className="registration-actions">
          <button className="primary big" disabled={props.invalid} type="submit">Sign Up</button>
        </div>
      </div>
    </form>
  )
};

RegistrationForm = reduxForm({
  form: 'RegistrationForm',
  asyncValidate,
  asyncBlurFields: ['username', 'email']
})(RegistrationForm);

export default RegistrationForm;