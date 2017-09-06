import * as React from 'react'
import '../styles/style.scss';
import Editor, { composeDecorators } from 'draft-js-plugins-editor'
import { Entity, EditorState, convertFromRaw, convertToRaw } from 'draft-js'
import { Subscription } from "./Subscription";
import { CustomModal } from "components/CustomModal/components/index";
import { Link } from 'react-router-redux';
import KnowledgeCreateForm from "../../Cloud/components/KnowledgeCreateForm";
import { MegadraftEditor, editorStateFromRaw, editorStateToJSON } from "megadraft";
const SVG = require('react-svg');

import ImagePlugin from './plugins/imagePlugin/components/index';
import VideoPlugin from './plugins/videoPlugin/components/index';
import { ConfirmModal } from "components/ConfirmModal/components";
import { Hint } from "../../../components/Hint/index";

const plugins = [
  ImagePlugin,
  VideoPlugin
];

export default class MegaDraft extends React.Component<any, any> {

  constructor(props) {
    super(props);
    this.state = { editorState: editorStateFromRaw(this.props.knowledge.text) };
  }

  /**
   * On change editor text
   *
   * @param {string} editorState - editor state
   * @returns {void}
   */
  onChange = (editorState) => {
    this.setState({ editorState });
    const content = editorStateToJSON(editorState);
    this.props.editKnowledge(JSON.parse(content));
  };

  handleRenewingModal = () =>
    this.setState({ isRenewingModalOpen: !this.state.isRenewingModalOpen });

  toDataURL(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.onload = () => {
      const reader = new FileReader();
      reader.onloadend = function () {
        callback(reader.result);
      };
      reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
  };


  blockRenderer = (block) => {
    console.log('blockRenderer');
    if ( block.getType() === 'atomic' ) {
      const entity = Entity.get(block.getEntityAt(0));
      if ( entity.getType() === 'image' && entity.data.src.indexOf('blob') === 0 ) {
        this.toDataURL(entity.data.src, (dataUrl) => {
          this.uploadImageAsync(dataUrl)
            .then(result => {
              entity.data.src = result.src;
              Entity.mergeData(block.getEntityAt(0), entity);
            })
        });
      }
    }
  };

  handleDeleteModal = () => {
    this.setState({ isDeleteModalOpen: !this.state.isDeleteModalOpen });
  }

  handleDeleteKnowledge = () => {
    this.handleDeleteModal();
    this.props.deleteKnowledge(this.props.knowledge);
  }

  /**
   * Renders the component.
   *
   * @memberof LastDraft
   * @return {string} - HTML markup for the component
   */
  render() {
    const { handleRenewing, user, knowledge, handleNameChange, closeEditor, clouds, goToUser, deleteKnowledge, modal } = this.props;

    const relations = knowledge.relations || [];

    return (
      <div>
        <div className="modal-header draft-editor-container">
          <Subscription user={user} knowledge={knowledge} goToUser={goToUser}/>
          <div className="knowledge-name-container">
            <Hint text="This is current knowledge name">
              <input disabled={knowledge.accountId !== localStorage.getItem('UserId')}
                     style={{ marginRight: 'auto', marginLeft: '5%' }}
                     className="input-container"
                     placeholder="Enter the name..."
                     title="Knowledge name"
                     value={knowledge.name}
                     onChange={handleNameChange}/>

              <div className="delete-icon"
                   placeholder="Delete Knowledge"
                   onClick={this.handleDeleteModal}
              >
                <SVG path="assets/icons/deleteHat.svg" className="delete-hat"/>
                <SVG path="assets/icons/deleteBox.svg" className="delete-box"/>
              </div>
            </Hint>
          </div>
          <div className="renew-actions">
            { (knowledge.accountId !== localStorage.getItem('UserId')
            && !relations.find(r => r.accountId === localStorage.getItem('UserId')
            )) &&
            <button onClick={this.handleRenewingModal}
                    className="tertiary small get-knowledge-button">
              Renew
            </button>
            }
            <div className="group-renewers">
              <div className="group-label">There are { relations.length } Renewers</div>
              <div className="group_renewers_images">
                {
                  relations.map((item, i) =>
                    <img key={i}
                         onClick={ () => goToUser(item.accountId) }
                         src={item.account.avatar}
                         title={item.account.realm || item.account.username}
                         alt={item.account.realm || item.account.username}
                    />
                  )
                }
              </div>
            </div>
          </div>
          <button type="button" className="close" onClick={ closeEditor } aria-label="Close">
            <img src="assets/icons/close.svg"/>
          </button>
        </div>

        <div>
          <MegadraftEditor
            editorState={this.state.editorState}
            onChange={this.onChange}
            plugins={plugins}
            blockRendererFn={this.blockRenderer}
          />
        </div>

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
        />
      </div>
    )
  }
}
