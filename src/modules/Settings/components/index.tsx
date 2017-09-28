import * as React from 'react';
import '../styles/style.scss';
import { reduxForm } from "redux-form";
import { Toggle } from "components/Toggle";

let Settings = (props) => (
  <div className="settings-wrapper">
    <div className="settings-container">
      <h1 className="settings-header">Settings</h1>
      <form className="settings-prop-container settings-form">
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
      </form>
    </div>
  </div>
);

Settings = reduxForm({
  form: 'SettingsFullForm',
  initialValues: localStorage.getItem('Account') && JSON.parse(localStorage.getItem('Account')).settings
})(Settings);

export default Settings;