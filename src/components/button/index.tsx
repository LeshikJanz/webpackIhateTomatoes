import * as React from 'react';
const SVG = require('react-svg');
const styles = require('./style.scss');
const classNames = require('classnames/bind');
const cx = classNames.bind(styles);

export const Button = (props) => {
  const { title, className, onClick } = props;

  return (
    <button onClick={ onClick } className={cx(['primary', ...className])}>
      <SVG path="assets/icons/add-icon.svg"/>
      {title}
    </button>
  )
}