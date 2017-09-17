import * as React from 'react';
import { connect } from "react-redux";
const SVG = require('react-svg');

export const Spinner = ({ loading, children }) => (
  <div className="spinner">
    {
      loading &&
      <div>
        <SVG path="assets/icons/spinner.svg"/>
        {children}
      </div>
    }
  </div>
)

const mapStateToProps = (state) => ({
  loading: state.Loading
});

export default connect(
  mapStateToProps,
  null,
  null
)(Spinner);