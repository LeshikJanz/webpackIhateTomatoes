import * as React from 'react';
import { render } from 'react-dom';
import * as Modal from 'react-modal';
import LastDraft from '../../DraftEditor/LastDraft';
import customStyles from '../styles/style';

export const PopUpModal = (props) => (
  <div>
    <button onClick={props.changeModalStatus}>Open Modal</button>
    <Modal
      isOpen={props.isModalOpen}
      onAfterOpen={this.afterOpenModal}
      onRequestClose={props.changeModalStatus}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <LastDraft/>
    </Modal>
  </div>
);
