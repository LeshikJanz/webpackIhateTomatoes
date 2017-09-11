import * as React from 'react';
import * as Modal from 'react-modal';
import customStyles from "../styles/style";
import MegaDraft from "modules/DraftEditor/containers";
import DraftEditor from "modules/DraftEditor/containers";
import { MODAL_TYPES } from "constants/index";

/**
 * Modal for knowledge editor
 */
export const PopUpModal = ({ closeEditor, modal }) => (
  <div className="draft-editor">
    <Modal
      isOpen={modal.isOpen && modal.type === MODAL_TYPES.editor}
      onRequestClose={closeEditor}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <DraftEditor/>
      {/*<MegaDraft/>*/}
    </Modal>
  </div>
);
