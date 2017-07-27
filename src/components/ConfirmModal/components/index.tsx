import * as React from 'react';
import * as Modal from 'react-modal';
import Styles from "../style";

export const ConfirmModal = (props) => {
  const { handleModal, handleConfirm, modal, isModalOpen } = props;

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
      isOpen={ isModalOpen }
      onRequestClose={ closeModal }
      style={Styles}
      contentLabel="Example Modal"
    >
      <div>
        <div className="modal-header">
          <h1 className="modal-title">
            { modal.title }
          </h1>
          <button type="button" className="close" onClick={ handleModal } aria-label="Close">
            <img src="assets/icons/close.svg"/>
          </button>
        </div>
        <div className="modal-body">
          <p dangerouslySetInnerHTML = {{ __html: modal.text  }}></p>
        </div>
        <div className="modal-footer btn-actions">
          <button className="primary" type="submit" onClick={ () => handleConfirm(modal.itemId) }>Confirm</button>
          <button className="secondary" onClick={ handleModal }>Cancel</button>
        </div>
      </div>
    </Modal>
  )
};
