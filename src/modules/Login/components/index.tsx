import * as React from 'react';
import { Field, reduxForm } from "redux-form";
import { required } from "components/ReduxFormFields/RenderField/validators";
import ConfirmModal from "components/ConfirmModal/containers";
import { MODAL_TYPES } from "constants/index";
import { renderField } from "components/ReduxFormFields/RenderField/index";

const Login = ({ handleSubmit, invalid, handleModal, modal }) => (
  <form className="form-container" onSubmit={ handleSubmit }>
    <div className="registration-bar">
      <h1 style={{ color: '#62B006' }}>Sign In</h1>
    </div>
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
      <div className="registration-actions">
        <button className="primary big" disabled={invalid} type="submit">Sign In</button>
      </div>
    </div>
    <ConfirmModal
      hideCancelButton={true}
      confirmLabel='OK'
      handleConfirm={ handleModal }
      isModalOpen={modal.isOpen && modal.type === MODAL_TYPES.confirm}
    />
  </form>
);

export default reduxForm({
  form: 'AuthForm',
})(Login);
