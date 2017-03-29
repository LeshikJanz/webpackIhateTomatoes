import * as React from 'react';
import ReactDOM from 'react-dom';
import { EditorState, RichUtils, getDefaultKeyBinding, KeyBindingUtil } from 'draft-js';
import { Editor } from 'draft-js-plugins-editor';
import "../styles/style.css";
import createHashtagPlugin from 'draft-js-hashtag-plugin';
import createLinkifyPlugin from 'draft-js-linkify-plugin';
const hashtagPlugin = createHashtagPlugin();
const linkifyPlugin = createLinkifyPlugin();
const {hasCommandModifier} = KeyBindingUtil;


const plugins = [
  hashtagPlugin,
  linkifyPlugin,
];
/**
 * обработчик клавиш, здесь стоит написать switch, т.е. при наборе какого-то сочетания клавиш, он будте возвращать событие(имя команды)
 * которое будет обрабатываться функциями из handleKeyCommand
 * */
function myKeyBindingFn(e: SyntheticKeyboardEvent): string {
  if (e.keyCode === 83 /* `S` key */ && hasCommandModifier(e)) {
    return 'myeditor-save';
  }
  return getDefaultKeyBinding(e);
}

function myBlockStyleFn(contentBlock) {
  const type = contentBlock.getType();
  if (type === 'blockquote') {
    return 'superFancyBlockquote';
  }
}

export class DraftEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => this.setState({editorState});
  }

  _onBoldClick = () => this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));  //(то, что будем изменять, плагин)

  handleKeyCommand(command: string): DraftHandleValue {
    if (command === 'myeditor-save') {
      console.log("saving");
      // Perform a request to save your contents, set
      // a new `editorState`, etc.
      return 'handled';
    }
    return 'not-handled';
  }

  render() {
    return (
      <div>
        <button onClick={this._onBoldClick}>Bold</button>
        <Editor
          editorState={this.state.editorState}
          handleKeyCommand={this.handleKeyCommand}
          keyBindingFn={myKeyBindingFn}
          blockStyleFn={myBlockStyleFn}
          onChange={this.onChange}
          plugins={plugins}
        />
      </div>
    );
  }
}
