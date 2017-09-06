import * as React from "react";
import { MegadraftPlugin } from "megadraft";
const { BlockData, BlockInput } = MegadraftPlugin;
import { DraftJS, insertDataBlock } from "megadraft";
const styles = require('../styles/style.scss');
const classNames = require('classnames/bind');
const cx = classNames.bind(styles);
import { withState } from 'recompose';
import { NotificationManager } from 'react-notifications';
import { Spinner } from "../../../../../../components/Spinner/index";
const SVG = require('react-svg');

export const ImageBlock = ({ container: { updateData, remove }, data }) => {

  const handleCaptionChange = ({ target }) => updateData({ caption: target.value });

  const deleteCurBlock = () => remove(data);

  const handleImageError = () => {
    deleteCurBlock();
    NotificationManager.error('Selected image is not valid. System accepts only JPEG, PNG, GIF, SVG formats', 'Error!');
  };

  console.log('data');
  console.log(data);

  return (
    <div className="image-draft-container">
      <div className="delete-icon">
        <img src="assets/icons/delete-box.svg" onClick={deleteCurBlock}/>
      </div>
      <div className={cx([{ 'loading-filter': data.isLoading }])}>
        <Spinner loading={data.isLoading}/>
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