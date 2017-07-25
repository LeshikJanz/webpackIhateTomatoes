import * as React from 'react';
import * as Modal from 'react-modal';
import Styles from "../style";
require('../../../styles/modal.scss');

export const CustomModal = (props) => {
  const { title, handleModal, customStyles } = props;

  /**
   * Close Confirm Modal
   *
   * @returns {void}
   * */
  const closeModal = () => handleModal();

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
          <button type="button" className="close" onClick={handleModal} aria-label="Close">
            <img src="assets/icons/close.svg"/>
          </button>
        </div>
        {props.children}
      </div>
    </Modal>  )
}