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

export default class LastDraft extends React.Component<any, any> {

  /**
   * Last Draft plugins
   *
   * @type {any[]}
   */
  plugins: any[] = [video, color, emoji, gif, mention, sticker, todo];

  /**
   * Constructor
   *
   * @param {props} props - external props
   * @returns {void}
   */
  constructor(props) {
    super(props);
    this.state = { value: editorStateFromRaw(this.props.knowledge.Text) }
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
    const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dqw7mxpr9/upload';
    const CLOUDINARY_UPLOAD_PRESET = 'oo5ejtrk';

    const formData = new FormData();

    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    return new Promise(
      (resolve, reject) =>
        axios({
          url: CLOUDINARY_URL,
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          data: formData
        }).then((res) => resolve({ src: res.data.secure_url }))
          .catch((err) => reject(err))
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
      <div style={{margin: '50px', marginTop: '10px', maxWidth: '90%'}}>
        <div className="name-input">
          <input className="name" type="text" placeholder="Enter the knowledge name"
                 value={this.props.knowledge.Name} onChange={this.props.handleNameChange}/>
        </div>
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
    )
  }
}
