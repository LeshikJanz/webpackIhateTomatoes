import * as React from 'react';
import '../styles/recognition-toolbar.scss';

export const RecognitionToolbar = ({ stopRecognition, startRecognition, isRunning, scrollTop, handlePlayer }) => (
  <div className="recognition-toolbar-container">
    <button className="recognition-button">
      {
        isRunning ? <img onClick={handlePlayer} src="assets/icons/draft-plugins/voice-recognition-animation.gif"
                         alt="Voice Recognition"/> :
          <img onClick={handlePlayer} src="assets/icons/draft-plugins/voice-recognition.svg"
               alt="Voice Recognition"/>
      }
    </button>
  </div>
);