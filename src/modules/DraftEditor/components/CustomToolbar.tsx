import * as React from 'react';
import { Editor, EditorState, RichUtils, convertToRaw } from "draft-js";

export const CustomToolbar = (props) => {

  const handleKeyCommand = (command) => {
    const { editorState } = props;
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if ( newState ) {
      props.onChange(newState);
      return true;
    }
    return false;
  }

  const toggleBlockType = (blockType) => {
    props.onChange(
      RichUtils.toggleBlockType(
        props.editorState,
        blockType
      )
    );
  }

  const toggleInlineStyle = (inlineStyle) => {
    props.onChange(
      RichUtils.toggleInlineStyle(
        props.editorState,
        inlineStyle
      )
    );
  }

  return (
    <div className="toolbar toolbar--open">
      <div>
        <div className="toolbar__wrapper">
          <BlockStyleControls
            editorState={props.editorState}
            onToggle={toggleBlockType}
          />
          <InlineStyleControls
            editorState={props.editorState}
            onToggle={toggleInlineStyle}
          />
        </div>
      </div>
    </div>
  )
}

class StyleButton extends React.Component {
  constructor() {
    super();
    this.onToggle = (e) => {
      e.preventDefault();
      this.props.onToggle(this.props.style);
    };
  }

  render() {
    let classNameName = 'toolbar__button';
    if ( this.props.active ) {
      classNameName = 'toolbar__item--active';
    }

    return (
      <li className="toolbar__item">
        <button type="button" className={classNameName} onMouseDown={this.onToggle}>
          <h4>{this.props.label}</h4>
        </button>
      </li>
    );
  }
}

const BLOCK_TYPES = [
  { label: 'H1', style: 'header-one' },
  { label: 'H2', style: 'header-two' },
  { label: 'H3', style: 'header-three' },
  { label: 'H4', style: 'header-four' },
  { label: 'H5', style: 'header-five' },
  { label: 'H6', style: 'header-six' },
  { label: 'Blockquote', style: 'blockquote' },
  { label: 'UL', style: 'unordered-list-item' },
  { label: 'OL', style: 'ordered-list-item' },
  { label: 'Code Block', style: 'code-block' },
];

const BlockStyleControls = (props) => {
  const { editorState } = props;
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  return (
    <ul className="toolbar__list">
      {BLOCK_TYPES.map((type) =>
        <StyleButton
          key={type.label}
          active={type.style === blockType}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      )}
    </ul>
  );
};

const INLINE_STYLES = [
  { label: 'Bold', style: 'BOLD' },
  { label: 'Italic', style: 'ITALIC' },
  { label: 'Underline', style: 'UNDERLINE' },
  { label: 'Monospace', style: 'CODE' },
];

const InlineStyleControls = (props) => {
  const currentStyle = props.editorState.getCurrentInlineStyle();
  return (
    <ul className="toolbar__list">
      {INLINE_STYLES.map(type =>
        <StyleButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      )}
    </ul>
  );
};