import * as React from "react";
import { MegadraftPlugin } from "megadraft";
const { BlockContent, BlockData, BlockInput, CommonBlock } = MegadraftPlugin;
import { DraftJS, insertDataBlock } from "megadraft";
import '../styles/style.scss';
import { withState } from 'recompose';

export const ImageBlock = ({ container: { updateData }, data, setImgPosition, imgPosition }) => {

  const handleCaptionChange = ({ target }) => updateData({ caption: target.value });

  return (
    <div className="image-draft-container">
      <div>
        <img src={data.src}/>
      </div>

      <BlockData>
        <BlockInput placeholder="Enter an image caption"
                    value={data.caption}
                    onChange={handleCaptionChange}/>
      </BlockData>
    </div>
  );
};