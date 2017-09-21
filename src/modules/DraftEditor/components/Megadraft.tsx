import * as React from 'react'
import '../styles/style.scss';
import { DefaultDraftBlockRenderMap, Entity, EditorState, convertFromRaw, convertToRaw } from 'draft-js'
import { Subscription } from "./Subscription";
import { CustomModal } from "components/CustomModal/components/index";
import { Link } from 'react-router-redux';
import KnowledgeCreateForm from "../../Cloud/components/KnowledgeCreateForm";
import { MegadraftEditor, editorStateFromRaw, editorStateToJSON } from "megadraft";
const Dropzone = require('react-dropzone');
import { DraftJS, insertDataBlock, container } from "megadraft";
import { NotificationManager } from 'react-notifications';
import ImagePlugin from './plugins/imagePlugin/components/index';
import VideoPlugin from './plugins/videoPlugin/components/index';
import { ConfirmModal } from "components/ConfirmModal/components";
import { uploadImageAsync } from "api/upload";
import { DEFAULT_WIDTH } from "./plugins/imagePlugin/constants/index";
import Toolbar from "./Toolbar";
import { blockRenderMap, styleMap } from "../constants/index";
import RenewBlock from "../containers/renewBlock";

const plugins = [
  ImagePlugin,
  VideoPlugin
];

let typingTimer;
const doneTypingInterval = 1000;

export default class MegaDraft extends React.Component<any, any> {

  constructor(props) {
    super(props);
    this.state = { editorState: editorStateFromRaw(this.props.knowledge.text) };
  }

  isContentChanged = (newState) => {
    const currentContentState = this.state.editorState.getCurrentContent();
    const newContentState = newState.getCurrentContent();

    return currentContentState !== newContentState;
  };

  /**
   * On change editor text
   *
   * @param {string} editorState - editor state
   * @returns {void}
   */
  onChange = (editorState) => {
    this.setState({ editorState });
    // Save to the server only if content was changed
    if ( this.isContentChanged(editorState) && this.props.modal.isOpen ) {
      this.handleSaveTimer();
    }
    const content = editorStateToJSON(editorState);
    this.props.editKnowledge(JSON.parse(content));
  };

  handleSaveTimer = (isFocused: boolean = true) => {
    clearTimeout(typingTimer);
    if ( isFocused ) {
      typingTimer = setTimeout(this.props.updateKnowledge, doneTypingInterval);
    }
  };

  onDropAccepted = (e) => this.isOwner() &&
  uploadImageAsync(e[0], this.state.editorState, this.onChange)
    .then(({ src }) => {
      const data = {
        "type": "image",
        "src": src,
        "caption": "",
        imgPosition: 'center',
        width: DEFAULT_WIDTH,
        isLoading: false
      };
      this.onChange(insertDataBlock(this.state.editorState, data));
    });

  handleRenewingModal = () =>
    this.setState({ isRenewingModalOpen: !this.state.isRenewingModalOpen });

  handleDeleteModal = () =>
    this.setState({ isDeleteModalOpen: !this.state.isDeleteModalOpen });

  handleDeleteKnowledge = () => {
    this.handleDeleteModal();
    this.props.deleteKnowledge(this.props.knowledge);
  };

  handleDropRejectred = (e) => {
    if ( e[0].kind !== 'string' ) {
      NotificationManager.error('Selected image is not valid. System accepts only JPEG, PNG, GIF formats', 'Error!');
    }
  }

  getBlockStyle(block) {
    switch ( block.getType() ) {
      case 'section-left':
        return 'section-left';
      case 'section-center':
        return 'section-center';
      case 'section-right':
        return 'section-right';
      case 'unstyled':
        return 'unstyled-text';
      default:
        return null;
    }
  }

  onKnowledgeNameChange = (e) => {
    this.handleTimer();
    this.props.handleNameChange(e);
  };

  isOwner = () => this.props.knowledge.accountId === localStorage.getItem('UserId')

  /**
   * Renders the component.
   *
   * @memberof LastDraft
   * @return {string} - HTML markup for the component
   */
  render() {
    const { handleRenewing, user, knowledge, closeEditor, clouds, goToUser } = this.props;
    const extendedBlockRenderMap = DefaultDraftBlockRenderMap.merge(blockRenderMap);

    const relations = knowledge.relations || [];

    return (
      <div>
        <div className="modal-header draft-editor-container">
          <Subscription user={user} knowledge={knowledge} goToUser={goToUser}/>
          <div className="knowledge-name-container">
            <input disabled={!this.isOwner()}
                   style={{ marginRight: 'auto', marginLeft: '5%' }}
                   className="name-input"
                   placeholder="Enter the name..."
                   title="Knowledge name"
                   value={knowledge.name}
                   onChange={this.onKnowledgeNameChange}/>
            <div className="delete-icon"
                 hidden={!this.isOwner()}
                 placeholder="Delete Knowledge"
                 onClick={this.handleDeleteModal}
            >
              <img src="assets/icons/deleteHat.svg" className="delete-hat"/>
              <img src="assets/icons/deleteBox.svg" className="delete-box"/>
            </div>
          </div>
          <RenewBlock relations={relations} handleModal={this.handleRenewingModal}/>
          <button type="button" className="close" onClick={ closeEditor } aria-label="Close">
            <img src="assets/icons/close.svg"/>
          </button>
        </div>
        <Dropzone onDropAccepted={ this.onDropAccepted }
                  onDropRejected={ this.handleDropRejectred }
                  disableClick={true}
                  accept="image/jpeg, image/jpg, image/png, image/gif"
                  className="dropzone-area"
                  activeClassName="dropzone-area-active"
                  rejectClassName="dropzone-area-reject">
          <div className="megadraft-container">
            <MegadraftEditor
              editorState={this.state.editorState}
              resetStyleNewLine={true}
              readOnly={!this.isOwner()}
              onChange={this.onChange}
              plugins={plugins}
              Toolbar={Toolbar}
              blockStyleFn={this.getBlockStyle}
              blockRenderMap={extendedBlockRenderMap}
              customStyleMap={styleMap}
            />
            {this.isOwner() &&
            <div className="accepted-upload">
              <h1>Drag file</h1>
              <h3>to add it to the current cursor position</h3>
            </div>
            }
          </div>
        </Dropzone>

        <CustomModal
          title={ `Renewing ${knowledge.name}` }
          handleModal={this.handleRenewingModal}
          isModalOpen={this.state.isRenewingModalOpen}
        >
          <KnowledgeCreateForm
            clouds={clouds.map(
              o => ({
                ...o,
                label: o.name,
                value: o.id,
              }))}
            handleModal={this.handleRenewingModal}
            onSubmit={handleRenewing}
          />
        </CustomModal>

        <ConfirmModal
          handleConfirm={ this.handleDeleteKnowledge }
          isModalOpen={this.state.isDeleteModalOpen}
          modal={{
            title: "Confirm?",
            text: `Are you sure you want to delete <b>${knowledge.name}?</b> This cloud will be archive and you will not see it on the Cloud.`,
            itemId: knowledge.id
          }}
          handleModal={this.handleDeleteModal}
        />
      </div>
    )
  }
}
