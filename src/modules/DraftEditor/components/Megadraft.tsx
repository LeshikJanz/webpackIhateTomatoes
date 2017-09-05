import * as React from 'react'
import '../styles/style.scss';
import { uploadImage } from "api/user";
import Editor, { composeDecorators } from 'draft-js-plugins-editor'
import { Entity, EditorState, convertFromRaw, convertToRaw } from 'draft-js'
import { Subscription } from "./Subscription";
import { CustomModal } from "components/CustomModal/components/index";
import { Link } from 'react-router-redux';
import KnowledgeCreateForm from "../../Cloud/components/KnowledgeCreateForm";
import { MegadraftEditor, editorStateFromRaw, editorStateToJSON } from "megadraft";

import ImagePlugin from './plugins/imagePlugin';

const plugins = [
  ImagePlugin
]

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

  /**
   * Async uploading images to Cloudinary
   *
   * See: https://www.youtube.com/watch?v=6uHfIv4981U
   *
   * @param {File} file - uploading file
   * @returns {Promise}
   */
  uploadImageAsync(file: File): Promise<any> {
    return new Promise(
      (resolve, reject) =>
        uploadImage(file)
          .then((res) => resolve({ src: res.data.secure_url }))
          .catch((err) => reject(err))
    )
  }

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
  }

  /**
   * Renders the component.
   *
   * @memberof LastDraft
   * @return {string} - HTML markup for the component
   */
  render() {
    const { handleRenewing, user, knowledge, handleNameChange, closeEditor, clouds, goToUser } = this.props;

    const relations = knowledge.relations || [];

    return (
      <div>
        <div className="modal-header draft-editor-container">
          <Subscription user={user} knowledge={knowledge} goToUser={goToUser}/>

          <input disabled={knowledge.accountId !== localStorage.getItem('UserId')}
                 className="input-container"
                 style={{ marginRight: 'auto', marginLeft: '5%' }}
                 placeholder="Enter the name..."
                 title="Knowledge name"
                 value={knowledge.name}
                 onChange={handleNameChange}/>
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
      </div>
    )
  }
}
