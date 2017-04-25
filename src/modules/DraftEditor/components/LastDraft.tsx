import * as React from 'react'
import {render} from 'react-dom'
import {
  Editor,
  editorStateFromHtml,
  editorStateToHtml,
  editorStateFromRaw,
  editorStateToJSON,
  editorStateFromText
} from 'last-draft';
import '../styles/style.css';

/* init the state, either from raw or html */
import RAW from '../initialState/raw'
import HTML from '../initialState/html'

import video from 'ld-video'
import color from 'ld-color-picker'
import emoji from 'ld-emoji'
import gif from 'ld-gif'
import mention from 'ld-mention'
import audio from 'ld-audio'
import sticker from 'ld-sticker'
import html from 'ld-html'
import todo from 'ld-todo'
let plugins = [video, color, emoji, gif, mention, sticker, todo];

export default class LastDraft extends React.Component {
  constructor(props) {
    super(props)
    const INITIAL_STATE = editorStateFromRaw(this.props.knowledge.Text)
    this.state = {value: INITIAL_STATE}
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
  return new Promise(
    (resolve, reject) => {
      setTimeout(() => {
        /* the image src would be a url from an S3 or database resouse */
        const src = window.URL.createObjectURL(file)
        //const src = 'http://imgur.com/yrwFoXT.jpg'
        resolve({src: src});
      }, 2000)
    }
  )
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

/* mentionUsersAsync example using github search api */

/*
 const mentionUsersAsync = function (searchValue, cb) {
 return new Promise(
 (resolve, reject) => {
 let url = `https://api.github.com/search/users?q=${searchValue}`
 fetch(url)
 .then( (response) => { return response.json() })
 .then((data) => {
 let users = data.items.map( (u, i) => { return { name: u.login, link: u.html_url, avatar: u.avatar_url } })
 resolve({ mentionUsers: users })
 })
 }
 )
 }
 */
