import * as React from "react";
import { MegadraftPlugin } from "megadraft";
const { BlockData, BlockInput } = MegadraftPlugin;
import { DraftJS, insertDataBlock } from "megadraft";
import { withState } from 'recompose';
import { IMAGE_POSITIONS } from "../constants";
import '../styles/style.scss';
import ReactPlayer from 'react-player';
import { NotificationManager } from 'react-notifications';

export const VideoBlock = ({ container: { updateData, remove }, data }) => {

  const handleCaptionChange = ({ target }) => updateData({ caption: target.value });

  const deleteCurBlock = () => remove(data);

  const handlePlayerError = (error) => {
    deleteCurBlock();
    NotificationManager.error('Entered link is not valid', 'Error!');
  };

  return (
    <div className="video-draft-container">
      <div className="delete-icon">
        <img src="assets/icons/delete-box.svg" onClick={deleteCurBlock}/>
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