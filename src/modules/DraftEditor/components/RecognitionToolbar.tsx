import * as React from 'react';
import '../styles/recognition-toolbar.scss';
import { RecognitionPlayer } from "./RecognitionPlayer";

export const RecognitionToolbar = ({ stopRecognition, startRecognition, isRunning }) => {

  return (
    <div className="recognition-toolbar-container">
      <button>
        {
          isRunning ? <img onClick={stopRecognition} src="assets/icons/draft-plugins/voice-recognition-animation.gif"
                           alt="Voice Recognition"/> :
            <img onClick={startRecognition} src="assets/icons/draft-plugins/voice-recognition.svg"
                 alt="Voice Recognition"/>
        }
      </button>
    </div>
  )
}