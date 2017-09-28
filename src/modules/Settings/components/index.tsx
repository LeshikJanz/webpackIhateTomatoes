import * as React from 'react';
import '../styles/style.scss';
import SettingsFullForm from "./settingsFullForm";
import { Link, browserHistory } from 'react-router';

export const Settings = ({ handleSettingsSubmit }) => (
  <div className="settings-wrapper">
    <div className="settings-container">
      <Link className="hvr-icon-wobble-horizontal" onClick={browserHistory.goBack}>Back</Link>
      <h1 className="settings-header">Settings</h1>
      <SettingsFullForm onSubmit={handleSettingsSubmit}/>
    </div>
  </div>
);
