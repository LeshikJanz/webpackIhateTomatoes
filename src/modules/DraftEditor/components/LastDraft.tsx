import * as React from 'react'
import {
  Editor,
  editorStateFromHtml,
  editorStateToHtml,
  editorStateFromRaw,
  editorStateToJSON,
  editorStateFromText
} from 'last-draft';
import video from 'ld-video';
import color from 'ld-color-picker';
import emoji from 'ld-emoji';
import gif from 'ld-gif';
import mention from 'ld-mention';
import audio from 'ld-audio';
import sticker from 'ld-sticker';
import html from 'ld-html';
import todo from 'ld-todo';
import '../styles/style.scss';
import { uploadImage } from "api/user";
import { Editor } from "draft-js";
import { IKnowledge } from "interfaces/index";
import { Subscription } from "./Subscription";
import { CustomModal } from "../../../components/CustomModal/components/index";
import { Link } from 'react-router-redux';
import KnowledgeCreateForm from "../../Cloud/components/KnowledgeCreateForm";
import { urls } from "../../urls";

/**
 * Last draft props interface
 */
declare interface ILastDraftProps {
  knowledge: IKnowledge,
  handleNameChange: Object,
  closeEditor: Object
}

/**
 * Last draft state interface
 */
declare interface ILastDraftState {
  value: string
}

export default class LastDraft extends React.Component<ILastDraftProps, ILastDraftState> {
  /**
   * Last Draft plugins
   *
   * @type {any[]}
   */
  plugins: any[] = [ video, color, emoji, gif, mention, sticker, todo ];

  /**
   * Constructor
   *
   * @param {props} props - external props
   * @returns {void}
   */
  constructor(props) {
    super(props);
    this.state = {
      value: editorStateFromRaw(this.props.knowledge.text),
      isRenewingModalOpen: false
    }
  }

  /**
   * On change editor text
   *
   * @param {string} editorState - editor state
   * @returns {void}
   */
  change(editorState: string) {
    this.setState({ value: editorState });
    this.props.editKnowledge(editorStateToJSON(editorState));
  }

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

  handleRenewingModal() {
    this.props.getCloudGroups();
    this.setState({ isRenewingModalOpen: !this.state.isRenewingModalOpen });
  }

  /**
   * Renders the component.
   *
   * @memberof LastDraft
   * @return {string} - HTML markup for the component
   */
  render() {
    const { handleRenewing, user, knowledge, handleNameChange, closeEditor, clouds, goToUser } = this.props;

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
              && !knowledge.relations.find(r => r.accountId === localStorage.getItem('UserId')
            )) &&
            <button onClick={this.handleRenewingModal.bind(this)}
                    className="tertiary small get-knowledge-button">
              Renew
            </button>
            }
            <div className="group-renewers">
              <div className="group-label">There are { knowledge.relations.length } Renewers</div>
              <div className="group_renewers_images">
                {
                  knowledge.relations.map((item, i) =>
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
          <Editor
            readOnly={knowledge.accountId !== localStorage.getItem('UserId')}
            plugins={this.plugins}
            sidebarVisibleOn='newline'
            inline={['bold', 'italic', 'dropcap']}
            blocks={['h3', 'quote']}
            autofocus={true}
            separators={false}
            editorState={this.state.value}
            placeholder='Text'
            uploadImageAsync={this.uploadImageAsync}
            onChange={this.change.bind(this)}/>
        </div>

        <CustomModal
          title={ `Renewing ${knowledge.name}` }
          handleModal={this.handleRenewingModal.bind(this)}
          isModalOpen={this.state.isRenewingModalOpen}
        >
          <KnowledgeCreateForm
            clouds={clouds.map(
                        o => ({
                              ...o,
                              label: o.name,
                              value: o.id,
                              }))}
            handleModal={this.handleRenewingModal.bind(this)}
            onSubmit={handleRenewing}
          />
        </CustomModal>
      </div>
    )
  }
}
