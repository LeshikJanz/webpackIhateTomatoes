import * as React from 'react';
import { reduxForm } from 'redux-form'
import { Toggle } from "components/Toggle";
import '../../styles/settings-form.scss';

let SettingsForm = props => {
  const { handleModalAction, handleSubmit } = props;

  const handleSubmit = () => {
    console.log('handleSubmit')
  };

  const handleToggle = () => {
    console.log('handleToggle')
  };
  const handleModalAction = () => {
    console.log('handleModalAction')
  };

  return (
    <form className="settings-form" onSubmit={ handleSubmit }>
      <div className="settings-group">
        <h3>General</h3>
        <div className="form-element-horizontal">
          <label>Hints: </label>
          <Toggle name="hints" onChange={handleToggle}/>
        </div>
      </div>
      <div className="settings-group">
        <h3>Sky</h3>
        <div className="form-element-horizontal">
          <label>Sky vertical compact: </label>
          <Toggle name="verticalCompact" onChange={handleToggle}/>
        </div>
        <div className="form-element-horizontal">
          <label>Private: </label>
          <Toggle name="private" onChange={handleToggle}/>
        </div>
      </div>
      <div className="modal-footer btn-actions">
        <button className="primary" type="submit" disabled={props.invalid}>Save</button>
        <button className="secondary" onClick={handleModalAction}>Cancel</button>
      </div>
    </form>
  )
};

SettingsForm = reduxForm({
  form: 'settingsForm'
})(SettingsForm);

export default SettingsForm;