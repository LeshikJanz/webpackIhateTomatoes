import * as React from 'react';
import { withState } from 'recompose';
import { HEADER_HEIGHT } from "./plugins/imagePlugin/constants/index";
const styles = require('../styles/recognition-toolbar.scss');
const classNames = require('classnames/bind');
const cx = classNames.bind(styles);

const enhance = withState('isCollapsed', 'handleCollapse', false);

export const RecognitionPlayer =
  enhance(({ isActive, isCollapsed, handleCollapse, startRecognition, stopRecognition, scrollTop, isOpened }) => (
      isOpened &&
      <div className={cx(['player-container', { 'collapsed': isCollapsed }, { 'uncollapsed': !isCollapsed }])}>
        {
          isCollapsed ?
            <img hidden={scrollTop < HEADER_HEIGHT} className="recognition-progress-icon"
                 src="assets/icons/draft-plugins/voice-recognition-animation.gif"
                 onClick={() => handleCollapse(!isCollapsed)}
                 alt="Recognition in progress"/> :
            <div style={{ display: 'flex' }}>
              <img className="minimize-icon" src="assets/icons/minimize-icon.svg"
                   onClick={() => handleCollapse(!isCollapsed)}
                   alt="Go to cursor"/>
              <div className="play-button">
                {
                  isActive ?
                    <img src="assets/icons/draft-plugins/voice-recognition-loading.svg"
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
                  <select name="Language">
                    <option value="Чебурашка">Чебурашка</option>
                    <option selected value="Крокодил Гена">Крокодил Гена</option>
                    <option value="Шапокляк">Шапокляк</option>
                    <option value="Крыса Лариса">Крыса Лариса</option>
                  </select>
                </div>
                <div className="cursor-actions">
                  <label hidden={!isActive}>Recognition in progress</label>
                  <label hidden={isActive}>Recognition stopped</label>
                  <img className="cursor-position-button tertiary" src="assets/icons/i-beam-pointer.svg"
                       alt="Go to cursor"/>
                </div>
              </div>
            </div>
        }
      </div>
    )
  )
;