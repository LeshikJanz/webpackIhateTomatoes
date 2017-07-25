import * as React from 'react';

import { Field, reduxForm } from 'redux-form'

/**
 * Authorization form
 */
let AuthForm = props => (
  <form onSubmit={ props.handleSubmit }>
    <div className="modal-body">
      <div className="form-element">
        <label htmlFor="username">User name</label>
        <div>
          <Field placeholder="Enter your user name..." name="username" className="input-container input-modal"
                 component="input"
                 type="text"/>
        </div>
      </div>
      <div>
        <div className="form-element">
          <label htmlFor="password">Password</label>
          <div>
            <Field placeholder="Enter your password..." name="password" className="input-container input-modal"
                   component="input" type="password"/>
          </div>
        </div>
      </div>
      <div className="modal-footer btn-actions">
        <button className="primary" type="submit">Confirm</button>
        <button className="secondary" onClick={ props.handleModal }>Cancel</button>
      </div>
    </div>
  </form>
)

AuthForm = reduxForm({
  form: 'AuthForm'
})(AuthForm)

export default AuthForm;