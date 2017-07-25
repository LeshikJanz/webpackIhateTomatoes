import * as React from "react";
import AuthBar from "../../auth/containers/AuthBar";
import LogOutBar from "../../auth/containers/LogOutBar";
import { IKnowledge } from "interfaces/index";
require('../styles/main.scss');
const moment = require('moment');

/**
 * Main page's header
 */
export const Header = ( props ) => {

  /**
   * Get empty(default) knowledge
   *
   * @returns {IKnowledge} knowledge - default knowledge
   */
  const getEmptyKnowledge = (): IKnowledge => ({
    name: "New knowledge",
    createDate: moment(),
    updateDate: moment(),
    text: {},
    cloudId: props.cloudId
  });

  /**
   * Blur css filter
   */
  const blur = { filter: 'blur(2px)' };

  return (
    <div style={ props.isModalOpen ? blur : {} }>
      <div className="navbar navbar-default navbar-fixed-top">
        <div className="header-container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a onClick={() => { props.addTag(getEmptyKnowledge()) }}
               className="navbar-brand"
               href="javascript:void(0)"><i className="fa fa-bolt"></i></a>
          </div>
          <div id="hello">
            <div className="col-lg-8 centered">
              <h2>Hurry up to fill your Big Head up. <br/>
                World's knowledge is here!</h2>
            </div>
          </div>
          {
            !localStorage.getItem('Token') ?
              <AuthBar/> : <LogOutBar/>

          }
        </div>
      </div>
      {props.children}
    </div>
  )
}
