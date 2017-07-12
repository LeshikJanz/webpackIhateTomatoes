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

// import cloudinary from 'cloudinary';

let plugins = [video, color, emoji, gif, mention, sticker, todo];

// cloudinary.config({
//   cloud_name: 'dqw7mxpr9',
//   api_key: '999933393793165',
//   api_secret: 'Ts8soyG7XeyXsp3x47XYjQm2GbY'
// });

export default class LastDraft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: editorStateFromRaw(this.props.knowledge.Text)}
  }

  change(editorState) {
    this.setState({value: editorState});
    this.props.editKnowledge(editorStateToJSON(editorState));
  }

  render() {
    return (
      <div style={{margin: '50px', marginTop: '10px', maxWidth: '90%'}}>
        <div className="name-input">
          <input className="name" type="text" placeholder="Enter the knowledge name"
                 value={this.props.knowledge.Name} onChange={this.props.handleNameChange}/>
        </div>
        <Editor
          theme={this.props.theme}
          plugins={plugins}
          sidebarVisibleOn='newline'
          inline={['bold', 'italic', 'dropcap']}
          blocks={['h3', 'quote']}
          mentionUsers={mentionUsers}
          autofocus={true}
          separators={false}
          editorState={this.state.value}
          placeholder='Text'
          uploadImageAsync={uploadImageAsync}
          onChange={this.change.bind(this)}/>
      </div>
    )
  }
}

function uploadImageAsync(file) {
  const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dqw7mxpr9/upload';
  const CLOUDINARY_UPLOAD_PRESET = 'oo5ejtrk';

  var formData = new FormData();

  formData.append('file', file);
  formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

  return new Promise(
    (resolve, reject) => {
      axios({
        url: CLOUDINARY_URL,
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: formData
      }).then(function(res) {
        resolve({src: res.data.secure_url});
      }).catch(function (err) {
        console.error(err);
      })
    })
  // )
}

const mentionUsers = [
  {
    name: 'Max Stoiber',
    link: 'https://github.com/mxstbr',
    avatar: 'https://avatars0.githubusercontent.com/u/7525670?v=3&s=400',
  },
  {
    name: 'Nik Graf',
    link: 'https://github.com/nikgraf',
    avatar: 'https://avatars2.githubusercontent.com/u/223045?v=3&s=400',
  },
  {
    name: 'Steven Iseki',
    link: 'https://github.com/steveniseki',
    avatar: 'https://avatars1.githubusercontent.com/u/6695114?v=3&s=400',
  },
]