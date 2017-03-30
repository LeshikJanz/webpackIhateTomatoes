import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "../styles/font-awesome.min.css";
import "../styles/main.css";

import { Header } from '../../header/components/index';
import TagCloud from '../../jqueryCloud/containers/index';
import PopUpModal from '../../popUpModal/containers/index';

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
      <TagCloud contents={props.trackNumber}/>
      <PopUpModal/>
    </div>
  )
};
