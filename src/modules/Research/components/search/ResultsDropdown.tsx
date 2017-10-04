import * as React from 'react';
import '../../styles/results-dropdown.scss';

export const ResultsDropdown = ({ loading }) => (
  <div className="results-dropdown-container">
    <img hidden={loading} src="assets/icons/cloud-spinner.gif"/>
  </div>
);