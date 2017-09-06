"use strict";

/**
 * Custom styles for Draft Editor
 */
const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#2f2f30'
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: '100%',
    overflow: 'scroll',
    width: '85%',
    maxWidth: '85%'
  }
};

export default customStyles;