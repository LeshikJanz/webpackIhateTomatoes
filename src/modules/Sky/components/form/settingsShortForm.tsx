import * as React from 'react';
import { reduxForm } from 'redux-form'
import { Toggle } from "components/Toggle";
import '../../styles/settings-form.scss';
import { Link } from 'react-router';

let SettingsShortForm = ({ handleModalAction, handleSubmit, invalid, resetForm, goToSettings }) => (
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
      <div className="all-settings-link" onClick={goToSettings}>
        <h4>Go to all settings&nbsp;</h4>
      </div>
    </div>
    <div className="modal-footer btn-actions">
      <button className="primary" type="submit" disabled={invalid}>Save</button>
      <button className="secondary" onClick={handleModalAction}>Cancel</button>
    </div>
  </form>
);

SettingsShortForm = reduxForm({
  form: 'SettingsShortForm',
  initialValues: localStorage.getItem('Account') && JSON.parse(localStorage.getItem('Account')).settings
})(SettingsShortForm);

export default SettingsShortForm;