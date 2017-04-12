import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as $ from "jquery";
import "assets/js/tagcanvas.min.js";
import "../style.css";
import { ReactIgnore } from "./ReactIgnore";
import { tagCloudInitial } from "../constants/index";
import { fetchClouds, fetchKnowledges } from "../../../api/cloud";

function tagCloudController() {
    try {
      TagCanvas.Start('Canvas', 'tags', {
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
      document.getElementById('CanvasContainer').style.display = 'none';
    }
}

const generateTags = (tags: Array) => {
  let tagCloud = `${tagCloudInitial}`;
  tags.forEach((elem, index) => tagCloud += `<li><a id="tag" 
        onclick="{var myEvent = new CustomEvent('tagclick', {bubbles: true, detail: { tagName: '${elem.Name}' }}); this.dispatchEvent(myEvent); return false;}">
        ${elem.Name}</a></li>`);

  return tagCloud + `</ul></div></div></div></div></div>`;
}

const setNewTag = (tag, number) => {
  $('#tags ul').append(`<li><a id="tag${number}"
                        onclick="{var myEvent = new CustomEvent('tagclick', {bubbles: true, detail: { tagName: '${tag.Name}' }}); this.dispatchEvent(myEvent); return false;}">
                        ${tag.Name}${number}</a></li>`);
  TagCanvas.Reload('Canvas', `tags`);
}

const startCloud = () => TagCanvas.Resume('Canvas', `tags`);
const stopCloud = () => TagCanvas.Pause('Canvas', `tags`);

const tagCloudCreator = (parent, tags) => {
  var $parent = $(parent);
  let $editor = $(generateTags(tags));
  $parent.find('textarea').replaceWith($editor);
  tagCloudController();
}

export class TagCloud extends React.Component {
  componentDidMount = () => {
    this.fetchData()
      .then((elem: any) => {
        console.log("this.props.clouds");
        console.log(this.props.clouds);
        this.editor = tagCloudCreator(ReactDOM.findDOMNode(this), this.props.clouds);
    });
    document.addEventListener('tagclick', this.handleTagClick);
  }
  componentDidUpdate = () => {

    //setNewTag(this.props.clouds[this.props.clouds.length - 1], this.props.clouds.length - 1);
  }

  fetchData = () => fetchKnowledges()
    .then((knowledges: any) => {
      console.log("knowledges");
      console.log(knowledges);

      this.props.fetchCloud(knowledges);
    });


  handleTagClick = (e: Event) => {
    console.log("e.detail");
    console.log(e.detail);
    this.props.changeModalStatus();
  }

  render() {
    if (!this.props.isModalOpen) startCloud();
    else stopCloud();
    return (
      <div>
        <ReactIgnore>
          <textarea value={this.props.contents}/>
        </ReactIgnore>
      </div>
    )
  }
}
;
