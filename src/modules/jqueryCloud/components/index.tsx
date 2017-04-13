import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as $ from "jquery";
import "assets/js/tagcanvas.min.js";
import "../style.css";
import { ReactIgnore } from "./ReactIgnore";
import { tagCloudInitial } from "../constants/index";

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
        onclick="{var myEvent = new CustomEvent('tagclick', {bubbles: true, detail: { tagId: '${elem.id}' }}); this.dispatchEvent(myEvent); return false;}">
        ${elem.Name}</a></li>`);

  return tagCloud + `</ul></div></div></div></div></div>`;
}

const setNewTag = (tag, number) => {
  $('#tags ul').append(`<li><a id="tag${number}"
                        onclick="{var myEvent = new CustomEvent('tagclick', {bubbles: true, detail: { tagId: '${tag.id}' }}); this.dispatchEvent(myEvent); return false;}">
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
    this.props.fetchCloudInit();
    document.addEventListener('tagclick', this.handleTagClick);
  };

  componentDidUpdate = () => {
    this.editor = tagCloudCreator(ReactDOM.findDOMNode(this), this.props.clouds);
    //setNewTag(this.props.clouds[this.props.clouds.length - 1], this.props.clouds.length - 1);
  }

  handleTagClick = (e: Event) => {
    this.props.openKnowledge(this.props.clouds.find((elem: any) => elem.id === e.detail.tagId));
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
