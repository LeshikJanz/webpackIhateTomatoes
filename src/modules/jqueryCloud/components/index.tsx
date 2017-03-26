import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as $ from "jquery";
import "assets/js/tagcanvas.min.js";
import { ReactIgnore } from "./ReactIgnore";
import { tagCloudInitial } from "../constants/index";

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
      document.getElementById('myCanvasContainer').style.display = 'none';
    }
  };
}

function generateTags(tags: Array) {
  let tagCloud = `${tagCloudInitial}`;
  tags.forEach((elem, index) => tagCloud += `<li><a id="tag${index}" href="${elem.source}" target="_blank">${elem.value}</a></li>`);
  return tagCloud + `</ul></div></div></div></div></div>`;
}

function setNewTag(tag, number) {
  $('#tags ul').append(`<li><a id="tag${number}" href="${tag.source}" target="_blank">${tag.value}${number}</a></li>`);
  TagCanvas.Reload('myCanvas', `tags`);
}

function setCloudStyles($parent) {
  $parent.css('text-align', 'center');
  // $('#myCanvas').css('width', '1000px');
  // $('#myCanvas').css('width', '1000px');
  var e = document.getElementById('myCanvas')
  e.width = "1000px";
  e.height = "1000px";
}

function tagCloudCreator(parent, tags) {
  var $parent = $(parent);
  let $editor = $(generateTags(tags));
  $parent.find('textarea').replaceWith($editor);
  //setCloudStyles($parent);
  tagCloudController();
}

export class TagCloud extends React.Component {
  componentDidMount = () => this.editor = tagCloudCreator(ReactDOM.findDOMNode(this), this.props.clouds);
  componentDidUpdate = () => setNewTag(this.props.clouds[this.props.clouds.length-1], this.props.clouds.length-1);

  render() {
    return (
      <div>
        <ReactIgnore>
          <textarea value={this.props.contents}/>
        </ReactIgnore>
      </div>
    )
  }
};
