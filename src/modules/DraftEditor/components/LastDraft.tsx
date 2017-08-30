import * as React from 'react'
import '../styles/style.scss';
import { uploadImage } from "api/user";
import Editor, { composeDecorators } from 'draft-js-plugins-editor'
import { Entity, EditorState, convertFromRaw, convertToRaw } from 'draft-js'
import { IKnowledge } from "interfaces/index";
import { Subscription } from "./Subscription";
import { CustomModal } from "../../../components/CustomModal/components/index";
import { Link } from 'react-router-redux';
import KnowledgeCreateForm from "../../Cloud/components/KnowledgeCreateForm";

/* Emoji plugin */
import createEmojiPlugin from 'draft-js-emoji-plugin'
import 'draft-js-emoji-plugin/lib/plugin.css'
const emojiPlugin = createEmojiPlugin()
const { EmojiSuggestions } = emojiPlugin

/* Hashtag plugin */
import createHashtagPlugin from 'draft-js-hashtag-plugin'
import 'draft-js-hashtag-plugin/lib/plugin.css'
const hashtagPlugin = createHashtagPlugin()

/* Image with Alignment, dnd, focus, resize plugin */
import createImagePlugin from 'draft-js-image-plugin'
import createAlignmentPlugin from 'draft-js-alignment-plugin'
import createFocusPlugin from 'draft-js-focus-plugin'
import createResizeablePlugin from 'draft-js-resizeable-plugin'
import createDndPlugin from 'draft-js-drag-n-drop-plugin'

import 'draft-js-alignment-plugin/lib/plugin.css'
import 'draft-js-focus-plugin/lib/plugin.css'

const focusPlugin = createFocusPlugin()
const resizeablePlugin = createResizeablePlugin()
const dndPlugin = createDndPlugin()
const alignmentPlugin = createAlignmentPlugin()
const { AlignmentTool } = alignmentPlugin

const decorator = composeDecorators(
  resizeablePlugin.decorator,
  alignmentPlugin.decorator,
  focusPlugin.decorator,
  dndPlugin.decorator
)
const imagePlugin = createImagePlugin({ decorator });

/* Linkify */
import createLinkifyPlugin from 'draft-js-linkify-plugin'
import 'draft-js-linkify-plugin/lib/plugin.css'
const linkifyPlugin = createLinkifyPlugin()

/* Mentions */

import createMentionPlugin, { defaultSuggestionsFilter } from 'draft-js-mention-plugin'
const mentionPlugin = createMentionPlugin();
const { MentionSuggestions } = mentionPlugin;
import mentions from './Mentions';
import 'draft-js-mention-plugin/lib/plugin.css'

/* ld plugins */

/* Toolbar */
import createToolbarPlugin from 'last-draft-js-toolbar-plugin'
import 'last-draft-js-toolbar-plugin/lib/plugin.css'
const toolbarPlugin = createToolbarPlugin()
const { Toolbar } = toolbarPlugin

/* Side Toolbar */
import createSidebarPlugin from 'last-draft-js-sidebar-plugin'
import 'last-draft-js-sidebar-plugin/lib/plugin.css'
const sidebarPlugin = createSidebarPlugin()
const { Sidebar } = sidebarPlugin

/* Embed plugin */
import createEmbedPlugin from 'draft-js-embed-plugin'
import 'draft-js-embed-plugin/lib/plugin.css'
const embedPlugin = createEmbedPlugin()

/* Link plugin */
import createLinkPlugin from 'draft-js-link-plugin'
import 'draft-js-link-plugin/lib/plugin.css'
const linkPlugin = createLinkPlugin()

/* Color */
import { colorStyleMap } from 'draft-js-color-picker-plugin'

/* init the plugins */
const plugins = [
  dndPlugin, focusPlugin, alignmentPlugin, resizeablePlugin, imagePlugin,
  emojiPlugin, hashtagPlugin, linkifyPlugin, mentionPlugin,
  toolbarPlugin, sidebarPlugin, embedPlugin, linkPlugin
]

/* init the state, either from raw, html or text */
import { raw } from './initialState/raw'
import { fromJS } from "immutable";

/* from raw */
const content = convertFromRaw(raw)
let STATE = EditorState.createWithContent(content)

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

  state = {
    editorState: EditorState.createWithContent(convertFromRaw(this.props.knowledge.text)),
    suggestions: mentions
  }

  onChange = (editorState) => {
    this.setState({ editorState })

    let raw = convertToRaw(editorState.getCurrentContent())
    this.props.editKnowledge(raw);
  };

  focus = () => {
    this.editor.focus()
  }

  onSearchChange = ({ value }) => {
    this.setState({
      suggestions: defaultSuggestionsFilter(value, mentions),
    });
  };

  onAddMention = () => {
  }


  /**
   * On change editor text
   *
   * @param {string} editorState - editor state
   * @returns {void}
   */
  change(editorState: string) {
    this.setState({ value: editorState });
    this.props.editKnowledge(convertToRaw(editorState));
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
    this.setState({ isRenewingModalOpen: !this.state.isRenewingModalOpen });
  }

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


  blockRenderer(block) {
    if ( block.getType() === 'atomic' ) {
      const entity = Entity.get(block.getEntityAt(0));

      if ( entity.getType() === 'image' ) {
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
            <button onClick={this.handleRenewingModal.bind(this)}
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
          <Editor
            editorState={this.state.editorState}
            placeholder='Text'
            plugins={plugins}
            customStyleMap={colorStyleMap}
            uploadImageAsync={this.uploadImageAsync}
            onChange={this.onChange}
            blockRendererFn={this.blockRenderer.bind(this)}
          />
          <AlignmentTool />
          <Toolbar />
          <Sidebar />
          <EmojiSuggestions />
          <MentionSuggestions
            onSearchChange={this.onSearchChange}
            suggestions={this.state.suggestions}
            onAddMention={this.onAddMention}
            onClose={() => this.setState({suggestions: fromJS([])})}
          />
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
