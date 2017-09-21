"use strict";
const Styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.1)'
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    overflow: 'hidden',
    maxWidth: '573px',
    borderRadius: '20px',
    boxShadow: '0 3px 14px 0 rgba(122, 134, 147, 0.17)',
    border: 'solid 2px #d8dce1'
  }
};

export default Styles;