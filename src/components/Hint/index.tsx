import * as React from 'react';
import './styles/style.scss'

export const Hint = ({ children, name, text, style }) => (
  <div className="hint-container">
    {children}
    <img className="hint-image" style={...style} src="assets/icons/hints/hint-yellow.png"/>
    <div className="hint-block">
      <div className="hint-text">{text.split("\n").map((t, i) => <div key={i}>{t}</div> )}</div>
    </div>
  </div>
)