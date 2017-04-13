import * as React from 'react';
import { render } from 'react-dom';
import * as Modal from 'react-modal';
import LastDraft from '../../DraftEditor/containers';
import { customStyles } from '../styles/style';

export const PopUpModal = (props) => {
  const closeModal = () => {
    props.changeModalStatus();
    props.updateKnowledge();
  }
  const afterOpenModal = () => {}

  return (
    <div>
      <button onClick={props.changeModalStatus}>Open Modal</button>
      <Modal
        isOpen={props.isModalOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <LastDraft/>
      </Modal>
    </div>
  );
}
