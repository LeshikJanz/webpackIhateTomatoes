import * as React from 'react';
import * as Modal from 'react-modal';
import LastDraft from '../../DraftEditor/containers';
import customStyles from "../styles/style";

export const PopUpModal = (props) => {
  const closeModal = () => {
    props.closeEditor();
    props.updateKnowledge();
  };

  const afterOpenModal = () => {
  };

  return (
    <div>
      <Modal
        isOpen={props.isEditorOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <LastDraft/>
      </Modal>
    </div>
  );
};
