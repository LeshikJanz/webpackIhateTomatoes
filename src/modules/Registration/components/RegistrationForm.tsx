import * as React from "react";
import { Field, reduxForm } from "redux-form";

/**
 * Registration form
 */
let RegistrationForm = props => (
  <form onSubmit={ props.handleSubmit }>
    <div className="modal-body">
      {/*<div className="form-element">*/}
      {/*<label htmlFor="avatar">Avatar</label>*/}
      {/*<div>*/}
      {/*<Field placeholder="Upload your avatar image" name="avatar" className="input-container input-modal"*/}
      {/*component="input"*/}
      {/*type="file"/>*/}
      {/*</div>*/}
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

RegistrationForm = reduxForm({
  form: 'RegistrationForm'
})(RegistrationForm)

export default RegistrationForm;