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
import '../styles/style.css';
import { CLOUDINARY_UPLOAD_PRESET, CLOUDINARY_URL } from "../constants/index";
import { uploadImage } from "../../../api/user";

export default class LastDraft extends React.Component<any, any> {

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
  constructor( props ) {
    super(props);
    this.state = { value: editorStateFromRaw(this.props.knowledge.text) }
  }

  /**
   * On change editor text
   *
   * @param {string} editorState - editor state
   * @returns {void}
   */
  change( editorState: string ) {
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
  uploadImageAsync( file: File ): Promise<any> {
    return new Promise(
      ( resolve, reject ) =>
        uploadImage(file)
          .then(( res ) => resolve({ src: res.data.secure_url }))
          .catch(( err ) => reject(err))
    )
  }

  /**
   * Renders the component.
   *
   * @memberof LastDraft
   * @return {string} - HTML markup for the component
   */
  render() {
    return (
      <div>
        <div className="modal-header" style={{ display: 'flex', justifyContent: 'center' }}>
          <input className="input-container"
                 style={{ width: '200px', textAlign: 'center' }}
                 placeholder="Enter the name..."
                 title="Knowledge name"
                 value={this.props.knowledge.name}
                 onChange={this.props.handleNameChange}/>
          <button type="button" className="close" onClick={this.props.closeEditor} aria-label="Close">
            <img src="assets/icons/close.svg"/>
          </button>
        </div>
        <div style={{ margin: '20px 50px' }}>
          <Editor
            theme={this.props.theme}
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
      </div>
    )
  }
}
