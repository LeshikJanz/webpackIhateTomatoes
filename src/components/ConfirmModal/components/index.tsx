import * as React from 'react';
import * as Modal from 'react-modal';
import Styles from "../style";

export const ConfirmModal = (props) => {
  const { title, text, handleModal, handleConfirm } = props;

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
          <button type="button" className="close" onClick={ handleModal } aria-label="Close">
            <img src="assets/icons/close.svg"/>
          </button>
        </div>
        <div className="modal-body">
          <h2>{ text }</h2>
        </div>
        <div className="modal-footer btn-actions">
          <button className="primary" type="submit" onClick={ handleConfirm }>Confirm</button>
          <button className="secondary" onClick={ handleModal }>Cancel</button>
        </div>
      </div>
    </Modal>
  )
};
