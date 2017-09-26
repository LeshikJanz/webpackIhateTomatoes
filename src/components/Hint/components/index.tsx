import * as React from 'react';
const styles = require('./../styles/style.scss');
const classNames = require('classnames/bind');
const cx = classNames.bind(styles);

export const Hint = ({ children, highlight, name, text, style, disableAnimation }) => (
  <div className={cx(['hint-container', { 'disable-animation': disableAnimation },
    { 'highlight': (highlight.enabled && highlight.name == name) }])}>
    {children}
    <img className="hint-image" style={...style} src="assets/icons/hints/hint-yellow.png"/>
    <div className="hint-block">
      <div className="hint-text">{text.split("\n").map((t, i) => <div key={i}>{t}</div>)}</div>
    </div>
  </div>
);