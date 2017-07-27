import * as React from 'react';
import { GooeySvg } from "./GooeySvg";
require("../styles/styles.scss");

export const GooeyMenu = (props) => {
  let checkbox: HTMLInputElement;

  const handleSelect = (item) => {
    props.onSelect(item.callback, item.arg);
    checkbox.checked = false;
  };

  const options = {
    followCursor: true,
    shiftX: 20,
    shiftY: 0
  }

  return (
    <div className="gooey-container">
      <nav className="menu">
        <input type="checkbox" ref={( e: HTMLInputElement ) => { checkbox = e }} className="menu-open"
               name="menu-open"
               id="menu-open"/>
        <label className="menu-open-button" htmlFor="menu-open">
          <span className="hamburger hamburger-1"></span>
          <span className="hamburger hamburger-2"></span>
          <span className="hamburger hamburger-3"></span>
        </label>
        {
          props.menuItems.map((item, i) =>
            <a href="javascript:void(0)"
               title={item.placeholder}
               onClick={() => handleSelect(item)}
               className="menu-item">
              <i className={item.icon} aria-hidden="true"></i>
            </a>
          )
        }
      </nav>

      <GooeySvg/>
    </div>
  )
}