import React from 'react';
import "bootstrap/dist/css/bootstrap.css";

import {Hello} from '../../header/components/index';
import { JQueryCloud, Cloud } from '../../jqueryCloud/components/index';

export const App = (props) => {
  return (
    <div>
      <h1>HELLO, this is React</h1>
      <button onClick={props.onClick}>Click me</button>
      <h2>{props.trackNumber}</h2>
      <Hello compiler="TypeScript" framework="React"/>
      <JQueryCloud contents={props.trackNumber}/>
      <Cloud contents={props.trackNumber}/>
    </div>
  )
};
