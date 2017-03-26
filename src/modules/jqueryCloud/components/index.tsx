import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as $ from "jquery";
import style from "../styles/style.css";

function textarea2editor(parent) {
  console.log("parent");
  console.log(parent);
  var $parent = $(parent);
  var $editor = $('<div contenteditable/>');
  $editor.css('background', "#333");
  $editor.css("color", "#efefef");
  $parent.find('textarea').replaceWith($editor);
  /*...*/
  return {
    setText: function (text) {
      $editor.html(text);
    },
    /*...*/
  }
}

export class Cloud extends React.Component {


  componentDidUpdate = () => {

  }

  render() {
    return (
    <div id="cloud">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2 centered center-tag-cloud">
            <div id="myCanvasContainer">
              <canvas width="600" height="600" id="myCanvas">
                <p>Anything in here will be replaced on browsers that support the canvas element</p>
              </canvas>
            </div>
            <div id="tags">
              <ul>
                <li><a id="go" href="http://www.google.com" target="_blank">Google</a></li>
                <li><a id="go" href="/fish">Fish</a></li>
                <li><a id="go" href="/chips">Lorem ipsum </a></li>
                <li><a id="go" href="http://www.google.com" target="_blank">Google</a></li>
                <li><a id="go" href="/fish">Fish</a></li>
                <li><a id="go" href="/chips">Lorem ipsum </a></li>
                <li><a id="go" href="http://www.google.com" target="_blank">Google</a></li>
                <li><a id="go" href="/fish">Fish</a></li>
                <li><a id="go" href="/chips">Lorem ipsum </a></li>
                <li><a id="go" href="http://www.google.com" target="_blank">Google</a></li>
                <li><a id="go" href="/fish">Fish</a></li>
                <li><a id="go" href="/chips">Lorem ipsum </a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <button type="button" className="btn btn-success">Success</button>

    </div>
    )
  }
}

class ReactIgnore extends React.Component {
  shouldComponentUpdate = () =>{
    return false;
  };

  render = () => React.Children.only(this.props.children);
}

export class JQueryCloud extends React.Component {

  componentDidMount = () => {
    this.editor = textarea2editor(ReactDOM.findDOMNode(this));
    this.editor.setText(this.props.contents);
  };

  componentDidUpdate = () => {
    this.editor.setText(this.props.contents);
  };

  render = () => {
    return (
      <div>
        <ReactIgnore>
          <textarea value={this.props.contents}/>
    </ReactIgnore>
    </div>
    )
  }
};
