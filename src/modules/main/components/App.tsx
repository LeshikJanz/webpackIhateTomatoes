import * as React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "../styles/font-awesome.min.css";
import "../styles/main.css";

import Header from '../../header/containers/index';
import TagCloud from '../../jqueryCloud/containers/index';
import PopUpModal from '../../popUpModal/containers/index';

export const App = (props) => {
  const { isModalOpen } = props;

  function addNewTag(){
    const tag = {
      source: "12345",
      value: "Tag №"
    }
    props.addTag(tag);
  }

  return (
    <div>
      { !isModalOpen && <Header/> }
      <TagCloud contents={props.trackNumber}/>
      <PopUpModal/>
    </div>
  )
};