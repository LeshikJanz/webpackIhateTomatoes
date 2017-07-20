import * as React from "react";
import styles = require("../styles/main.css");
const classNames = require('classnames/bind');
const cx = classNames.bind(styles);
const moment = require('moment');

export const Header = (props) => {
  const getEmptyKnowledge = () => {
    return {
      name: "New knowledge",
      userId: "string",
      createDate: moment(),
      updateDate: moment(),
      text: {},
      cloudId: props.cloudId
    }
  };

  return (
    <div>
      <div className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a onClick={() => { props.addTag(getEmptyKnowledge())}} className="navbar-brand"
               href="javascript:void(0)"><i className="fa fa-bolt"></i></a>
          </div>
          <div id="hello">
            <div className="col-lg-8 col-lg-offset-2 centered">
              <h1>Ваши знания здесь</h1>
            </div>
          </div>
          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
              <li className="active"><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
      {props.children}
    </div>
  )
}
