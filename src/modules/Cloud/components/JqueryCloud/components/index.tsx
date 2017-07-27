import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as $ from "jquery";
import "assets/js/tagcanvas.min.js";
import "../style.scss";
import { ReactIgnore } from "./ReactIgnore";
import { tagCloudInitial } from "../constants/index";
import { Link } from 'react-router';
import { urls }  from 'modules/urls';
import { DEFAULT_CLOUD_ID } from "../../../../../constants/index";
import { Search } from "../../../../../components/Search/Search";
import { IKnowledge } from "../../../../../interfaces/index";

function tagCloudController() {
  try {
    TagCanvas.Start('Canvas', 'tags', {
      textFont: 'Trebuchet MS, Helvetica, sans-serif',
      textColour: '#337ab7',
      textHeight: 25,
      outlineMethod: 'block',
      outlineColour: '#acf',
      maxSpeed: 0.015,
      minBrightness: 0.2,
      depth: 0.92,
      pulsateTo: 0.6,
      initial: [ 0.2, -0.2 ],
      decel: 1,
      reverse: true,
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
};

//TODO: release this function instead of long li tag inputs
// const getHtmlTag = (elem, number = '') => `<li><a id="tag${number}"
//     onclick="{
//               this.dispatchEvent(new CustomEvent('tagclick',
//                {bubbles: true, detail: { tagId: '${elem.id}' }});)
//                return false;
//             }"
//      >${elem.name}</a></li>`;


const generateTags = (tags: Array) => {
  let tagCloud = `${tagCloudInitial}`;
  tags.forEach((elem, index) => tagCloud += `<li><a id="tag" 
        onclick="{var myEvent = new CustomEvent('tagclick', {bubbles: true, detail: { tagId: '${elem.id}' }}); this.dispatchEvent(myEvent); return false;}">${elem.name}</a></li>`);

  return tagCloud + `</ul></div></div></div></div></div>`;
}

const removeTagCloud = () => {
  TagCanvas.Delete('Canvas', `tags`);
  $('#cloud').replaceWith('<textarea value={this.props.contents}/>');
}

const setNewTag = (tag, number) => {
  if ( tag ) {
    $('#tags ul').append(`<li><a id="tag${number}"
                        onclick="{var myEvent = new CustomEvent('tagclick', {bubbles: true, detail: { tagId: '${tag.id}' }}); this.dispatchEvent(myEvent); return false;}">${tag.name}</a></li>`);
    removeTagCloud();
  }
};

const startCloud = () => TagCanvas.Resume('Canvas', `tags`);
const stopCloud = () => TagCanvas.Pause('Canvas', `tags`);

const tagCloudCreator = (parent, tags) => {
  let $parent = $(parent);
  let $editor = $(generateTags(tags));
  $parent.find('textarea').replaceWith($editor);
  tagCloudController();
}

export class TagCloud extends React.Component {
  static tagNumber = 0;

  componentDidMount = () => {
    this.props.fetchCloudInit(this.props.cloudId || DEFAULT_CLOUD_ID);
    document.addEventListener('tagclick', this.handleTagClick);
  };

  componentDidUpdate = () => {
    if ( TagCloud.tagNumber != this.props.tags.length ) {
      if ( TagCloud.tagNumber ) setNewTag(this.props.tags[ this.props.tags.length - 1 ], this.props.tags.length - 1);
      TagCloud.tagNumber = this.props.tags.length;
    }
    removeTagCloud();
    this.editor = tagCloudCreator(ReactDOM.findDOMNode(this), this.props.tags);
  }

  handleTagClick = (e: Event) => {
    this.props.openKnowledge(this.props.tags.find((elem: any) => elem.id === e.detail.tagId));
    this.props.openEditor();
  };

  handleSearch = ({ target }) => {
    this.props.tags.filter((t: IKnowledge) => t.name.indexOf(target.value) >= 0);
  }

  render() {
    const { isEditorOpen, contents, handleSearch } = this.props;

    if ( !isEditorOpen ) startCloud();
    else stopCloud();
    return (
      <div className="main-container">
        <Search style={{ position: 'absolute' }} onChange={ handleSearch } name="name"/>
        <ReactIgnore>
          <textarea style={{ opacity: 0 }} value={contents}/>
        </ReactIgnore>
      </div>
    )
  }
}
