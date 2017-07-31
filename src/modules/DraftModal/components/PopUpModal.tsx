import * as React from 'react';
import * as Modal from 'react-modal';
import LastDraft from 'modules/DraftEditor/containers';
import customStyles from "../styles/style";

/**
 * Modal for knowledge editor
 */
export const PopUpModal = (props) => {
  const closeModal = () => {
    props.closeEditor();
    props.knowledge.accountId === localStorage.getItem('UserId') && props.updateKnowledge();
  };

  return (
    <div>
      <Modal
        isOpen={props.modal.isOpen && props.modal.type === 'Editor'}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <LastDraft/>
      </Modal>
    </div>
  );
};
