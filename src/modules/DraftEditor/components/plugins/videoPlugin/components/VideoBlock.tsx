import * as React from "react";
import { MegadraftPlugin } from "megadraft";
const { BlockData, BlockInput } = MegadraftPlugin;
import { DraftJS, insertDataBlock } from "megadraft";
import { withState } from 'recompose';
import { IMAGE_POSITIONS } from "../constants";
import '../styles/style.scss';
import ReactPlayer from 'react-player';
import { NotificationManager } from 'react-notifications';
const SVG = require('react-svg');

export const VideoBlock = ({ container: { updateData, remove }, data }) => {

  const handleCaptionChange = ({ target }) => updateData({ caption: target.value });

  const deleteCurBlock = () => remove(data);

  const handlePlayerError = (error) => {
    deleteCurBlock();
    NotificationManager.error('Entered link is not valid', 'Error!');
  };

  return (
    <div className="video-draft-container">
      <div className="delete-icon"
           placeholder="Delete Knowledge"
           onClick={deleteCurBlock}
      >
        <SVG path="assets/icons/deleteHat.svg" className="delete-hat"/>
        <SVG path="assets/icons/deleteBox.svg" className="delete-box"/>
      </div>
      <ReactPlayer
        url={data.src}
        onError={handlePlayerError}
      />

      <BlockData>
        <BlockInput placeholder="Enter an video caption"
                    value={data.caption}
                    onChange={handleCaptionChange}/>
      </BlockData>
    </div>
  );
};