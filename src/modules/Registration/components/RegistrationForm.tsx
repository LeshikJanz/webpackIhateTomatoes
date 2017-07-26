import * as React from "react";
import { Field, reduxForm } from "redux-form";
const Dropzone = require('react-dropzone');

/**
 * Registration form
 */
const RegistrationForm = props => {
  let avatar: string = '';

  const dropzone = ({
    input,
    label,
    meta: { touched, error },
    ...custom
  }) => {
    const onDrop = ( acceptedFiles, rejectedFiles ) => {
      console.log("onDrop");
      console.log("acceptedFiles");

      props.handleImageUpload(acceptedFiles[0]);

      // console.log(acceptedFiles);
      // input.onChange(acceptedFiles[0].preview);
    }

    return (
      <div className="dropzone">
        <Dropzone onDrop={ onDrop }>
          <p>Try dropping some files here, or click to select files to upload.</p>
        </Dropzone>
        <img src={avatar} alt=""/>
      </div>
    )
  }


  return (
    <form onSubmit={ props.handleSubmit }>
      <div className="modal-body">

        <Field
          name="dropzone"
          component={dropzone}
          label="Dropzone"
        />

        {/*<div className="dropzone">*/}
          {/*<Dropzone onDrop={ onDrop }>*/}
            {/*<p>Try dropping some files here, or click to select files to upload.</p>*/}
          {/*</Dropzone>*/}
          {/*<img src={avatar} alt=""/>*/}
        {/*</div>*/}
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
            <Field placeholder="Enter your address..." name="address" className="input-container input-modal"
                   component="input"
                   type="text"/>
          </div>
        </div>
        <div className="modal-footer btn-actions">
          <button className="primary" type="submit">Confirm</button>
          <button className="secondary">Cancel</button>
        </div>
      </div>
    </form>
  )
}

RegistrationForm = reduxForm({
  form: 'RegistrationForm'
})(RegistrationForm)

export default RegistrationForm;