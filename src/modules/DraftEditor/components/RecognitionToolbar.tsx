import * as React from 'react';
import '../styles/recognition-toolbar.scss';

export const RecognitionToolbar = ({ stopRecognition, startRecognition, isRunning }) => (
  <div className="recognition-toolbar-container">
    <button className="recognition-button">
      {
        isRunning ? <img onClick={stopRecognition} src="assets/icons/draft-plugins/voice-recognition-animation.gif"
                         alt="Voice Recognition"/> :
          <img onClick={startRecognition} src="assets/icons/draft-plugins/voice-recognition.svg"
               alt="Voice Recognition"/>
      }
    </button>
  </div>
);