import * as React from "react";
import { DraftJS, insertDataBlock } from "megadraft";
import { DEFAULT_WIDTH } from "../constants/index";
import { uploadImageAsync } from "../../../../../../api/upload";

export const BlockButton = ({ editorState, onChange }) => {

  const handleVoiceRecognition = () => {
    const data = { "type": "voiceRecognition" };
    onChange(insertDataBlock(editorState, data));
  }

  return (
    <button className="draft-leftmenu-button">
      <img src="assets/icons/draft-plugins/voice-recognition.svg" onClick={handleVoiceRecognition}/>
    </button>
  );
};