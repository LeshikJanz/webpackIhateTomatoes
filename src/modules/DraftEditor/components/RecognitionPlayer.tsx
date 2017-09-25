import * as React from 'react';
import '../styles/recognition-toolbar.scss'

export const RecognitionPlayer = (props) => {

  return (
    <div className="player-container">
      <div className="play-button">
        <img src="assets/icons/recognition-play.svg" alt="Start recogniting"/>
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
        <div>
          <img className="cursor-position-button tertiary" src="assets/icons/i-beam-pointer.svg" alt="Go to cursor"/>
          <img src="assets/icons/minimize-icon.svg" alt="Go to cursor"/>
        </div>
      </div>
    </div>
  )
};