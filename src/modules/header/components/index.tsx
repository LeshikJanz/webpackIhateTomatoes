import * as React from "react";
import "../styles/main.css";

export const Header = (props) => (
  <div className="navbar navbar-default navbar-fixed-top">
    <div className="container">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a onClick={() => { props.addTag("111")}}  className="navbar-brand" href="#"><i className="fa fa-bolt"></i></a>
      </div>
      <div id="hello">
        <div className="col-lg-8 col-lg-offset-2 centered">
          <h1>Ваши знания в одном месте</h1>
        </div>
      </div>
      <div className="navbar-collapse collapse">
        <ul className="nav navbar-nav navbar-right">
          <li className="active"><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  </div>
)
