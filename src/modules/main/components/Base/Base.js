import React, { PropTypes } from 'react';

const propTypes = {
  children: PropTypes.element.isRequired
};


const BaseContainer = (props) => (
  <div>
    {props.children}
  </div>
);

BaseContainer.propTypes = propTypes;

export default BaseContainer;
