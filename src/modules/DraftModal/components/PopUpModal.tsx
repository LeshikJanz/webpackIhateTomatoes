import * as React from 'react';
import * as Modal from 'react-modal';
import customStyles from "../styles/style";
import MegaDraft from "modules/DraftEditor/containers";
import { MODAL_TYPES } from "constants/index";

/**
 * Modal for knowledge editor
 */
export const PopUpModal = (props) => {
  const closeModal = () => {
    props.closeEditor();
    props.knowledge.accountId === localStorage.getItem('UserId') && props.updateKnowledge();
  };

  return (
    <div className="draft-editor">
      <Modal
        isOpen={props.modal.isOpen && props.modal.type === MODAL_TYPES.editor}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <MegaDraft/>
      </Modal>
    </div>
  );
};
