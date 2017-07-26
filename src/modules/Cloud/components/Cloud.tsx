import * as React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "../styles/font-awesome.min.css";
import "../styles/main.css";
import TagCloud from './JqueryCloud/containers/index';
import PopUpModal from '../../DraftModal/containers/index';

/**
 * Cloud wrapper component
 */
export const Cloud = (props) => (
  <div>
    <TagCloud cloudId={props.params && props.params.id} contents={props.trackNumber}/>
    <PopUpModal/>
  </div>
);
