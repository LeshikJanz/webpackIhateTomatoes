import * as React from "react";
import { DraftJS, insertDataBlock } from "megadraft";

export const BlockButton = ({ editorState, onChange }) => {
  const onMovieOpen = () => {
    const src = window.prompt("Enter a URL");
    const data = { "type": "video", "src": src };
    onChange(insertDataBlock(editorState, data));
  };

  return (
    <button className="draft-leftmenu-button">
      <img src="assets/icons/picture-icon.svg" onClick={onMovieOpen}/>
    </button>
  );
};