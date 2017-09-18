import * as React from "react";
import { MegadraftPlugin } from "megadraft";
import { EditorState } from "draft-js";
const { BlockData, BlockInput } = MegadraftPlugin;
import { DraftJS, insertDataBlock } from "megadraft";
import { withState } from 'recompose';
import { IMAGE_POSITIONS } from "../constants";
import '../styles/style.scss';
import ReactPlayer from 'react-player';
import { NotificationManager } from 'react-notifications';
const SVG = require('react-svg');

const doneTypingInterval = 1000;
let typingTimer;

export const VideoBlock = ({ container: { updateData, remove }, data, updateKnowledge, knowledge }) => {
  const handleTimer = () => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(updateKnowledge, doneTypingInterval);
  };

  const handleCaptionChange = ({ target }) => {
    updateData({ caption: target.value });
    handleTimer();
  };

  const deleteCurBlock = () => remove(data);

  const isOwner = () => knowledge.accountId === localStorage.getItem('UserId');

  const handlePlayerError = (error) => {
    deleteCurBlock();
    NotificationManager.error('Entered link is not valid', 'Error!');
  };

  return (
    <div className="video-draft-container">
      { isOwner() &&
      <div className="delete-icon"
           placeholder="Delete Knowledge"
           onClick={deleteCurBlock}
      >
        <SVG path="assets/icons/deleteHat.svg" className="delete-hat"/>
        <SVG path="assets/icons/deleteBox.svg" className="delete-box"/>
      </div>
      }
      <ReactPlayer
        url={data.src}
        onError={handlePlayerError}
      />

      { ((isOwner()) || (!isOwner() && data.caption)) &&
      <BlockData>
        <BlockInput placeholder="Enter an video caption"
                    disabled={!isOwner()}
                    value={data.caption}
                    onChange={handleCaptionChange}/>
      </BlockData>
      }
    </div>
  );
};