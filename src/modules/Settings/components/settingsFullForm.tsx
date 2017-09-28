import * as React from 'react';
import { reduxForm } from "redux-form";
import { Toggle } from "components/Toggle";

const SettingsFullForm = ({ handleSubmit, dirty, invalid }) => (
  <form className="settings-prop-container settings-form" onSubmit={handleSubmit}>
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
    <div className="settings-group">
      <h3>Cloud</h3>
      <div className="form-element-horizontal">
        <label>Cloud repeating system: </label>
        <Toggle name="cloudRepeatingSystem"/>
      </div>
    </div>
    <div className="settings-actions">
      <button className="primary big" type="submit" disabled={!dirty}>Save</button>
    </div>
  </form>
);

SettingsFullForm = reduxForm({
  form: 'SettingsFullForm',
  initialValues: localStorage.getItem('Account') && JSON.parse(localStorage.getItem('Account')).settings
})(SettingsFullForm);

export default SettingsFullForm;