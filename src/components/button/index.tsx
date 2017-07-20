import * as React from 'react';
const styles = require('./style.scss');
const classNames = require('classnames/bind');
const cx = classNames.bind(styles);

export const Button = (props) => {
  const { title, design, icon } = props;

  return (
    <button className={cx(['primary'])}>{title}</button>
  )
}