import * as React from 'react';
import "assets/js/tagcanvas.min.js";
const styles = require("../styles/style.scss");
const classNames = require('classnames/bind');
const cx = classNames.bind(styles);
import { ReactIgnore } from "./ReactIgnore";

export const FlyingTags = ({ contents, disabledAnimation, tags }) => (
  <div>
    <ReactIgnore style={!tags.length ? { opacity: 0 } : {}}>
      <div className={cx({ 'cloud-animation': !disabledAnimation })}>
        <textarea style={{ opacity: 0 }} value={contents}/>
      </div>
    </ReactIgnore>
  </div>
);