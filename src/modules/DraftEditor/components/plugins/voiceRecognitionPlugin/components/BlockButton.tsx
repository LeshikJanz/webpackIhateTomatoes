import * as React from "react";
import { DraftJS, insertDataBlock } from "megadraft";
import { DEFAULT_WIDTH } from "../constants/index";
import { uploadImageAsync } from "../../../../../../api/upload";

export const BlockButton = ({ editorState, onChange, handleRecognition, isRunning }) => {

  return (
    <button className="draft-leftmenu-button">
      {
        isRunning ?
          <img src="assets/icons/draft-plugins/voice-recognition-animation.gif" onClick={handleRecognition} alt="Stop recognition"/> :
          <img src="assets/icons/draft-plugins/voice-recognition.svg" onClick={handleRecognition} alt="Start recognition"/>
      }
    </button>
  );
};