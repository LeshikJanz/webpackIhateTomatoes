import * as React from "react";
import { Field, reduxForm } from "redux-form";
const Dropzone = require('react-dropzone');
const styles = require('../styles/style.scss');
const classNames = require('classnames/bind');
const cx = classNames.bind(styles);
import { Link, browserHistory } from 'react-router';
import Link from "../../DraftEditor/components/LinkPicker";
import { renderField } from "components/ReduxFormFields/RenderField/index";
import {
  asyncValidate, email, minLength4, minLength8,
  required
} from "components/ReduxFormFields/RenderField/validators";
import { Places } from "components/ReduxFormFields/Places";
import { DropzoneField } from "components/ReduxFormFields/Dropzone";

/**
 * Registration form
 */
let RegistrationForm = ({ handleImageUpload, handleSubmit, avatar, loading, invalid }) => (
  <form className="form-container" onSubmit={ handleSubmit }>
    <div className="registration-bar">
      <Link className="hvr-icon-wobble-horizontal" onClick={browserHistory.goBack}>Back</Link>
      <h1 style={{ color: '#62B006' }}>Sign Up</h1>
    </div>
    <div className="modal-body">
      <div className={cx(['dropzone'])}>
        <Field
          name="avatar"
          component={DropzoneField}
          handleImageUpload={handleImageUpload}
          label="Dropzone"
          avatar={avatar}
          loading={loading}
        />
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
          <Field name="address" component={Places} label="address"/>
        </div>
      </div>
      <div className="registration-actions">
        <button className="primary big" disabled={invalid} type="submit">Sign Up</button>
      </div>
    </div>
  </form>
);

RegistrationForm = reduxForm({
  form: 'RegistrationForm',
  asyncValidate,
  asyncBlurFields: ['username', 'email']
})(RegistrationForm);

export default RegistrationForm;