import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "../styles/font-awesome.min.css";
import "../styles/main.css";

import { Header } from '../../header/components/index';
import TagCloud from '../../jqueryCloud/containers/index';
import DraftEditor from '../../draftEditor/containers/index';

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
      <Header/>
      {/*<Hello compiler="TypeScript" framework="React"/>*/}
      <TagCloud contents={props.trackNumber}/>
      {/*<button onClick={addNewTag}>Add new tag</button>*/}

      <DraftEditor/>
    </div>
  )
};
