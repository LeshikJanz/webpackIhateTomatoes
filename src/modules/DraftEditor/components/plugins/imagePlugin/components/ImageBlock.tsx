import * as React from "react";
import { MegadraftPlugin } from "megadraft";
const { BlockData, BlockInput } = MegadraftPlugin;
import { DraftJS, insertDataBlock } from "megadraft";
const styles = require('../styles/style.scss');
const classNames = require('classnames/bind');
const cx = classNames.bind(styles);
import { withState } from 'recompose';
import { NotificationManager } from 'react-notifications';
import { Spinner } from "components/Spinner/index";
import { HEADER_HEIGHT, PARAGRAPH_HEIGHT } from "../constants/index";
const SVG = require('react-svg');

export const ImageBlock = ({ container: { updateData, remove }, data }) => {
  const handleChange = ({ target }) => updateData({ [target.name]: target.value });

  const deleteCurBlock = () => remove(data);

  const handleImageError = () => {
    deleteCurBlock();
    NotificationManager.error('Selected image is not valid. System accepts only JPEG, PNG, GIF', 'Error!');
  };

  const detectRow = (x, y = 0) => x - HEADER_HEIGHT / PARAGRAPH_HEIGHT;


  const handleDragEnd = ({ nativeEvent: { clientY } }) => {
    console.log('clientY');
    console.log(clientY);
    console.log(detectRow(clientY))
  };

  return (
    <div onDragEnd={handleDragEnd}
      className="image-draft-container">
      <div className="image-tools">
        <div className="image-zoom">
          <label htmlFor="width">Zoom: { data.width / 100 }</label>
          <input type="range" min='10' max='100' step='1' name="width"
                 defaultValue={data.width} onChange={handleChange}/>
        </div>
        <div className="image-position">
          <button name="imgPosition" value='left' className={cx([{ 'active': data.imgPosition === 'left' }])}
                  onClick={handleChange}>L
          </button>
          <button name="imgPosition" value='center' className={cx([{ 'active': data.imgPosition === 'center' }])}
                  onClick={handleChange}>C
          </button>
          <button name="imgPosition" value='right' className={cx([{ 'active': data.imgPosition === 'right' }])}
                  onClick={handleChange}>R
          </button>
        </div>
        <div className="delete-icon"
             placeholder="Delete Knowledge"
             onClick={deleteCurBlock}
        >
          <SVG path="assets/icons/deleteHat.svg" className="delete-hat"/>
          <SVG path="assets/icons/deleteBox.svg" className="delete-box"/>
        </div>
      </div>
      <div className={cx(['img-block', { 'loading-filter': data.isLoading }])}
           style={{ textAlign: `${data.imgPosition}` }}>
        <Spinner loading={data.isLoading}/>
        <img src={data.src} onError={handleImageError} style={{ width: `${data.width}%` }}/>
      </div>
      <BlockData>
        <BlockInput placeholder="Enter an image caption"
                    value={data.caption}
                    name="caption"
                    onChange={handleChange}/>
      </BlockData>
    </div>
  );
};