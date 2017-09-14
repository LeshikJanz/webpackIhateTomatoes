import * as React from 'react';
const styles = require('../../styles/style.scss');
const classNames = require('classnames/bind');
const cx = classNames.bind(styles);

export const ImgPositioning = ({ handleChange, imgPosition }) => (
  <div className="image-position">
    <button name="imgPosition" value='left' className={cx([{ 'active': imgPosition === 'left' }])}
            onClick={handleChange}>L
    </button>
    <button name="imgPosition" value='center' className={cx([{ 'active': imgPosition === 'center' }])}
            onClick={handleChange}>C
    </button>
    <button name="imgPosition" value='right' className={cx([{ 'active': imgPosition === 'right' }])}
            onClick={handleChange}>R
    </button>
  </div>
)