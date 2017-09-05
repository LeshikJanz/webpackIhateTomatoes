import * as React from "react";
import {DraftJS, insertDataBlock} from "megadraft";
const SVG = require('react-svg');

export default class BlockButton extends React.Component {

  onClick = (e) => {
    e.preventDefault();
    const src = window.prompt("Enter a URL");
    const data = {"type": "image", "src": src};
    // Calls the onChange method with the new state.
    this.props.onChange(insertDataBlock(this.props.editorState, data));
  }

  render() {
    return (
      <button onClick={this.onClick} className="draft-leftmenu-button">
        <SVG path="assets/icons/picture-icon.svg"/>
      </button>
    );
  }
}