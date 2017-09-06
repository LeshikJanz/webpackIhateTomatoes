import * as React from "react";
import { MegadraftPlugin } from "megadraft";
const { BlockData, BlockInput } = MegadraftPlugin;
import { DraftJS, insertDataBlock } from "megadraft";
import '../styles/style.scss';
import { withState } from 'recompose';
import { NotificationManager } from 'react-notifications';

export const ImageBlock = ({ container: { updateData, remove }, data }) => {

  const handleCaptionChange = ({ target }) => updateData({ caption: target.value });

  const handleImageError = () => {
    remove(data);
    NotificationManager.error('Selected image is not valid. System accepts only JPEG, PNG, GIF, SVG formats', 'Error!');
  };

  return (
    <div className="image-draft-container">
      <div>
        <img src={data.src} onError={handleImageError}/>
      </div>

      <BlockData>
        <BlockInput placeholder="Enter an image caption"
                    value={data.caption}
                    onChange={handleCaptionChange}/>
      </BlockData>
    </div>
  );
};