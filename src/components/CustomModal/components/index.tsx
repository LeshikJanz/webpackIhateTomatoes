import * as React from 'react';
import * as Modal from 'react-modal';
import Styles from "../style";
require('../../../styles/modal.scss');

export const CustomModal = (props) => {
  const { title, changeModalStatus, customStyles } = props;

  /**
   * Close Confirm Modal
   *
   * @returns {void}
   * */
  const closeModal = () => changeModalStatus();

  /**
   * Renders the component.
   *
   * @memberof LastDraft
   * @return {string} - HTML markup for the component
   */
  return (
    <Modal
      isOpen={props.isModalOpen}
      onRequestClose={closeModal}
      style={Styles}
      contentLabel="Example Modal"
    >
    <div>
      <div className="modal-header">
        <h1 className="modal-title">
          { title }
        </h1>
        <button type="button" className="close" onClick={changeModalStatus} aria-label="Close">
          <img src="assets/icons/close.svg"/>
        </button>
      </div>
      <div className="modal-body">
        {props.children}
      </div>
      <div className="modal-footer">
        {/*<div className="btn-actions">*/}
          {/*<button className="primary" type="submit">Confirm</button>*/}
          {/*<button className="secondary" onClick={changeModalStatus}>Cancel</button>*/}
        {/*</div>*/}
      </div>
    </div>
    </Modal>  )
}