import * as React from 'react';
import { withState } from 'recompose';
import { HEADER_HEIGHT } from "./plugins/imagePlugin/constants/index";
const styles = require('../styles/recognition-toolbar.scss');
const classNames = require('classnames/bind');
const cx = classNames.bind(styles);


export const RecognitionPlayer =
  ({ isActive, isCollapsed, handlePlayerCollapse, startRecognition, stopRecognition, scrollTop, isOpened, handlePlayer }) => (
    <div
      className={cx(['player-container', { 'opened': isOpened }, { 'collapsed': isCollapsed }, { 'uncollapsed': !isCollapsed }])}>
      {
        isCollapsed ?
          <img hidden={scrollTop < HEADER_HEIGHT || !isActive} className="recognition-progress-icon"
               src="assets/icons/draft-plugins/voice-recognition-animation.gif"
               onClick={() => handlePlayerCollapse(!isCollapsed)}
               alt="Recognition in progress"/> :
          <div style={{ display: 'flex' }}>
            <img className="minimize-icon" src="assets/icons/minimize-icon.svg"
                 onClick={() => isActive ? handlePlayerCollapse(!isCollapsed) : handlePlayer()}
                 alt="Go to cursor"/>
            <div className="play-button">
              {
                isActive ?
                  <img src="assets/icons/draft-plugins/stop-voice-recognition.svg"
                       onClick={stopRecognition}
                       alt="Stop recogniting"/> :
                  <img src="assets/icons/recognition-play.svg"
                       onClick={startRecognition}
                       alt="Start recogniting"/>
              }
            </div>
            <div className="player-actions">
              <div className="player-language-select">
                <label htmlFor="Language">Language</label>
                <select name="Language" defaultValue="Крокодил Гена">
                  <option value="Чебурашка">Чебурашка</option>
                  <option  value="Крокодил Гена">Крокодил Гена</option>
                  <option value="Шапокляк">Шапокляк</option>
                  <option value="Крыса Лариса">Крыса Лариса</option>
                </select>
              </div>
              <div className="cursor-actions">
                <label className="loading" hidden={!isActive}>Recognition in progress</label>
                <label hidden={isActive}>Recognition stopped</label>
                <img className="cursor-position-button tertiary" src="assets/icons/i-beam-pointer.svg"
                     alt="Go to cursor"/>
              </div>
            </div>
          </div>
      }
    </div>
  );