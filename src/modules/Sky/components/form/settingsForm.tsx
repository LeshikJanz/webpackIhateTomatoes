import * as React from 'react';
import { reduxForm } from 'redux-form'
import { Toggle } from "components/Toggle";
import '../../styles/settings-form.scss';

let SettingsForm = ({ handleModalAction, handleSubmit, invalid, resetForm }) => (
  <form className="settings-form" onSubmit={ handleSubmit }>
    <div className="settings-group">
      <h3>General</h3>
      <div className="form-element-horizontal">
        <label>Hints: </label>
        <Toggle name="hintsEnabled"/>
      </div>
    </div>
    <div className="settings-group">
      <h3>Sky</h3>
      <div className="form-element-horizontal">
        <label>Sky vertical compact: </label>
        <Toggle name="verticalCompactEnabled"/>
      </div>
      <div className="form-element-horizontal">
        <label>Private: </label>
        <Toggle name="privateSky"/>
      </div>
    </div>
    <div className="modal-footer btn-actions">
      <button className="primary" type="submit" disabled={invalid}>Save</button>
      <button className="secondary" onClick={handleModalAction}>Cancel</button>
    </div>
  </form>
);

SettingsForm = reduxForm({
  form: 'SettingsForm',
  initialValues: localStorage.getItem('Account') && JSON.parse(localStorage.getItem('Account')).settings
})(SettingsForm);

export default SettingsForm;