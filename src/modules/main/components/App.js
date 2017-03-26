import React from 'react';
import "bootstrap/dist/css/bootstrap.css";

import {Hello} from '../../header/components/index';
import TagCloud from '../../jqueryCloud/containers/index';

export const App = (props) => {
  function addNewTag(){
    const tag = {
      source: "12345",
      value: "Tag №"
    }
    props.addTag(tag);
  }

  return (
    <div>
      <h1>HELLO, this is React</h1>
      <button onClick={props.onClick}>Click me</button>
      <h2>{props.trackNumber}</h2>
      <Hello compiler="TypeScript" framework="React"/>
      <TagCloud contents={props.trackNumber}/>
      <button onClick={addNewTag}>Add new tag</button>
    </div>
  )
};
