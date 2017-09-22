import * as React from "react";
import { DraftJS, insertDataBlock } from "megadraft";
import { DEFAULT_WIDTH } from "../constants/index";
import { uploadImageAsync } from "../../../../../../api/upload";

export const BlockButton = ({ editorState, onChange }) => {

  return (
    <button className="draft-leftmenu-button">
      <img src="assets/icons/draft-plugins/voice-recognition.svg"/>
    </button>
  );
};