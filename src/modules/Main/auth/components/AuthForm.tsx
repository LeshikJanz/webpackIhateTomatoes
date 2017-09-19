import * as React from 'react';
import { Field, reduxForm } from 'redux-form'
import { renderField } from "../../../../components/ReduxFormFields/RenderField/index";
import { required } from "../../../../components/ReduxFormFields/RenderField/validators";

/**
 * Authorization form
 */
let AuthForm = props => (
  <form onSubmit={ props.handleSubmit }>
    <div className="modal-body">
      <div className="form-element">
        <div>
          <Field placeholder="Enter your user name..." name="username" className="input-container input-modal"
                 label="User name"
                 component={renderField}
                 validate={[required]}
                 type="text"/>
        </div>
      </div>
      <div>
        <div className="form-element">
          <div>
            <Field placeholder="Enter your password..."
                   name="password" className="input-container input-modal"
                   label="Password"
                   component={renderField}
                   validate={[required]}
                   type="password"/>
          </div>
        </div>
      </div>
      <div className="modal-footer btn-actions">
        <button className="primary" disabled={props.invalid} type="submit">Sign In</button>
        <button className="secondary" onClick={ props.handleModal }>Cancel</button>
      </div>
    </div>
  </form>
)

AuthForm = reduxForm({
  form: 'AuthForm'
})(AuthForm)

export default AuthForm;