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
import { ImgPositioning } from "./tools/imagePositioning";
import { EditorState, SelectionStsate, Modifier } from "draft-js";

const doneTypingInterval = 1000;
let typingTimer;

export const ImageBlock = ({ container, data, updateKnowledge, knowledge }) => {
  const handleTimer = () => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(updateKnowledge, doneTypingInterval);
  };

  const handleChange = ({ target }) => {
    container.updateData({ [target.name]: target.value });
    handleTimer();
  };

  const isOwner = () => knowledge.accountId === localStorage.getItem('UserId');

  const deleteCurBlock = () => container.remove(data);

  const handleImageError = () => {
    deleteCurBlock();
    NotificationManager.error('Selected image is not valid. System accepts only JPEG, PNG, GIF formats', 'Error!');
  };

  return (
    <div className="image-draft-container">
      { isOwner() &&
      <div className="image-tools">
        <div className="image-zoom">
          <label htmlFor="width">Zoom: { data.width / 100 }</label>
          <input type="range" min='10' max='100' step='1' name="width"
                 defaultValue={data.width} onChange={handleChange}/>
        </div>
        <ImgPositioning imgPosition={data.imgPosition} handleChange={handleChange}/>
        <div className="delete-icon"
             placeholder="Delete Knowledge"
             onClick={deleteCurBlock}
        >
          <img src="assets/icons/deleteHat.svg" className="delete-hat"/>
          <img src="assets/icons/deleteBox.svg" className="delete-box"/>
        </div>
      </div>
      }
      <div className={cx(['img-block', { 'loading-filter': data.isLoading }])}
           style={{ textAlign: `${data.imgPosition}` }}>
        <Spinner loading={data.isLoading}>
          <h5>Uploading...</h5>
        </Spinner>
        <img src={data.src} onError={handleImageError} style={{ width: `${data.width}%` }}/>
      </div>

      { ((isOwner()) || (!isOwner() && data.caption)) &&
      <BlockData>
        <BlockInput placeholder="Enter an image caption"
                    disabled={!isOwner()}
                    value={data.caption}
                    name="caption"
                    onChange={handleChange}/>
      </BlockData>
      }
    </div>
  );
};