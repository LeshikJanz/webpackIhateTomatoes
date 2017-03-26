import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as $ from "jquery";
import style from "../styles/style.css";
require("../../../assets/js/tagcanvas.min.js");
import { tagList } from '../../../../mocks/tagList.ts';
import { ReactIgnore } from "./ReactIgnore";

const tagCloudHtml = `
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
            <ul>`;

function tagCloudController() {
  window.onload = function () {
    try {
      TagCanvas.Start('myCanvas', 'tags', {
        // textColour: '#337ab7',
        // outlineColour: '#ff00ff',
        // reverse: true,
        // depth: 0.8,
        // maxSpeed: 0.04
        textFont: 'Trebuchet MS, Helvetica, sans-serif',
        textColour: '#337ab7',
        textHeight: 25,
        outlineMethod: 'block',
        outlineColour: '#acf',
        maxSpeed: 0.015,
        minBrightness: 0.2,
        depth: 0.92,
        pulsateTo: 0.6,
        initial: [0.2, -0.2],
        decel: 1,
        reverse: true,
        // hideTags: false,
        shadow: '#ccf',
        shadowBlur: 3,
        weight: false,
        imageScale: null,
        fadeIn: 1000,
        clickToFront: 600
      });
    } catch (e) {
      // something went wrong, hide the canvas container
      document.getElementById('myCanvasContainer').style.display = 'none';
    }
  };
}

function generateTags() {
  tagList.forEach((elem) => tagCloudHtml += `<li><a id="go" href="${elem.source}" target="_blank">${elem.value}</a></li>`);
  return tagCloudHtml + `</ul></div></div></div></div></div>`;
}

function tagCloudCreator(parent) {
  var $parent = $(parent);
  const $editor = $(generateTags());
  $parent.find('textarea').replaceWith($editor);
  tagCloudController();

  // /*...*/
  // return {
  //   setText: function (text) {
  //     $editor.html(text);
  //   },
  //   /*...*/
  // }
}

export class TagCloud extends React.Component {
  componentDidMount = () => {
    this.editor = tagCloudCreator(ReactDOM.findDOMNode(this));
    // this.editor.setText(this.props.contents);
  };

  componentDidUpdate = () => {
    // this.editor.setText(this.props.contents);
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
