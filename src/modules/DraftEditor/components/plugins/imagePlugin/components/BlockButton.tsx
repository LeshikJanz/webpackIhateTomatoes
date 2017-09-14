import * as React from "react";
import { DraftJS, insertDataBlock } from "megadraft";
import { DEFAULT_WIDTH } from "../constants/index";
import { uploadImageAsync } from "api/upload";

export const BlockButton = ({ editorState, onChange }) => {

  const onImageOpen = ({ target }) =>
    uploadImageAsync(target.files[0], editorState, onChange)
      .then(({ src }) => {
        const data = { "type": "image", "src": src, "caption": "", imgPosition: 'center', width: DEFAULT_WIDTH, isLoading: false };
        onChange(insertDataBlock(editorState, data));
      });

  return (
    <button className="draft-leftmenu-button">
      <img src="assets/icons/picture-icon.svg"/>
      <input type="file" id="imgupload" onChange={onImageOpen} accept="image/jpeg,image/png,image/gif"/>
    </button>
  );
};