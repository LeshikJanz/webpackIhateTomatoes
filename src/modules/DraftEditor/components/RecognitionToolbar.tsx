import * as React from 'react';
import '../styles/recognition-toolbar.scss';
import Hint from "components/Hint/containers";

export const RecognitionToolbar = ({ isRunning, scrollTop, ...props }) => {
  const handlePlayer = () => {
    // Open player in full mode always on clicking this recognition icon
    if ( props.isPlayerCollapsed ) {
      props.handlePlayerCollapse();
      props.handlePlayer();
    }
    props.handlePlayer();
  };

  return (
    <Hint text="Voice recognition" disableAnimation={true}>
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
    </Hint>
  )
};