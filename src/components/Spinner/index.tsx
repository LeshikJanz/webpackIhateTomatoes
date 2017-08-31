import * as React from 'react';
import { connect } from "react-redux";
const SVG = require('react-svg');

export const Spinner = ({ loading }) => (
  <div className="spinner">
    {
      loading &&
      <SVG path="assets/icons/spinner.svg"/>
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