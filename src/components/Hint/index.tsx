import * as React from 'react';
import './styles/style.scss'

export const Hint = ({ children, name, text }) => (
  <div className="hint-container">
    {children}
    <img className="hint-image" src="assets/icons/hints/hint-yellow.png"/>
    <div className="hint-block">
      <div className="hint-text">{text}</div>
    </div>
  </div>
)