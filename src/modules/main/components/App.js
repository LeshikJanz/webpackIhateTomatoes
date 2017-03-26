import React from 'react';
import {Hello} from '../../header/components/index';
import {JQueryTest} from '../../jqueryCloud/index';

export const App = (props) => {
  return (
    <div>
      <h1>HELLO, this is React</h1>
      <button onClick={props.onClick}>Click me</button>
      <h2>{props.trackNumber}</h2>
      <Hello compiler="TypeScript" framework="React"/>
      <JQueryTest contents={props.trackNumber}/>
    </div>
  )
}

const getRandomCombination = (prop) => {
  return prop;
}
