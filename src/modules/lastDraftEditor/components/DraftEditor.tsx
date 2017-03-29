import * as React from 'react';
import { render } from 'react-dom';
import { Editor, editorStateFromHtml, editorStateToHtml, editorStateFromRaw, editorStateToJSON } from 'last-draft';

/* init the state, either from raw or html */
import raw from './initialState/raw'

export default class ExampleEditor extends React.Component {
  i:number = 0;
  constructor(props) {
    super(props)
    const INITIAL_STATE = editorStateFromRaw(raw)
    this.state = {value: INITIAL_STATE}
  }

  onChange = (editorState) => {
    this.setState({value: editorState})
    console.log(editorStateToHtml(editorState))
    console.log(editorStateToJSON(editorState))
  }

  render() {
    return (
      <Editor
        editorState={this.state.value}
        placeholder='Enter text...'
        blocks={['blockquote', 'code']}
        onChange={this.onChange}
      />
    )
  }
}
