import * as React from "react";
import styles = require("../styles/main.scss");
const classNames = require('classnames/bind');
const cx = classNames.bind(styles);
const moment = require('moment');

export const Header = (props) => {
  const getEmptyKnowledge = () => ({
    name: "New knowledge",
    userId: "string",
    createDate: moment(),
    updateDate: moment(),
    text: {},
    cloudId: props.cloudId
  });

  const blur = { filter: 'blur(2px)' };

  return (
    <div style={ props.isModalOpen ? blur : {} }>
      <div className="navbar navbar-default navbar-fixed-top">
        <div className="container">
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
          <div className="navbar-collapse collapse">
            <button style={{ width: '90px', margin: '10px' }}
              className="tertiary small add">
              Log In
            </button>
            <button style={{ width: '190px' }}
              className="secondary small add">
              Create new account
            </button>
            {/*<ul className="nav navbar-nav navbar-right">*/}
              {/*<li className="active"><a href="#contact">Contact</a></li>*/}
            {/*</ul>*/}
          </div>
        </div>
      </div>
      {props.children}
    </div>
  )
}
