import * as React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "../styles/font-awesome.min.css";
import "../styles/main.css";
import TagCloud from './JqueryCloud/containers/index';
import PopUpModal from '../../DraftModal/containers/index';

export const Cloud = (props) => {
  const { isModalOpen, params } = props;

  return (
    <div>
      <TagCloud cloudId = {params.id} contents={props.trackNumber}/>
      <PopUpModal/>
    </div>
  )
};
