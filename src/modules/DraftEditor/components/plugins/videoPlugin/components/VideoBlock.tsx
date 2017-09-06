import * as React from "react";
import { MegadraftPlugin } from "megadraft";
const { BlockContent, BlockData, BlockInput, CommonBlock } = MegadraftPlugin;
import { DraftJS, insertDataBlock } from "megadraft";
import { withState } from 'recompose';
import { IMAGE_POSITIONS } from "../constants";
import '../styles/style.scss';
import ReactPlayer from 'react-player'

export const VideoBlock = ({ container: { updateData }, data }) => {

  const handleCaptionChange = ({ target }) => updateData({ caption: target.value });

  return (
    <div className="video-draft-container">
      <ReactPlayer
        url={data.src}
      />

      <BlockData>
        <BlockInput placeholder="Enter an video caption"
                    value={data.caption}
                    onChange={handleCaptionChange}/>
      </BlockData>
    </div>
  );
};