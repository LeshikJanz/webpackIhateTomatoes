import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as $ from "jquery";
import "assets/js/tagcanvas.min.js";
import "../style.scss";
import { ReactIgnore } from "./ReactIgnore";
import { TAG_CLOUD_INIT, TAG_CLOUD_END } from "../constants/index";
import { DEFAULT_CLOUD_ID } from "constants/index";
import { urls } from "urls";
import { CloudLoading } from "./CloudLoading";
import CloudActions from "../containers/cloudActions";

function tagCloudController() {
  try {
    TagCanvas.Start('Canvas', 'tags', {
      textFont: 'Raleway-Medium, Raleway, Cooper',
      textColour: '#337ab7',
      textHeight: 25,
      outlineMethod: 'block',
      outlineColour: '#acf',
      maxSpeed: 0.02,
      minBrightness: 0.2,
      depth: 0,
      pulsateTo: 0.6,
      initial: [0.2, -0.2],
      decel: 1,
      reverse: true,
      shadow: '#ccf',
      weight: false,
      imageScale: null,
      fadeIn: 200,
      clickToFront: 600,
      noTagsMessage: false,
      minSpeed: 0.015
    });
  } catch (e) {
    const canvasContainer = document.getElementById('CanvasContainer');
    if ( canvasContainer ) {
      canvasContainer.style.display = 'none';
    }
  }
}

const getHtmlTag = (elem, number = '') =>
  `<li><a id="tag${number}" 
          onclick="{ this.dispatchEvent(new CustomEvent('tagclick', {bubbles: true, detail: { tagId: '${elem.id}' }})); return false; }"
          >${elem.name}</a>
  </li>`;

const generateTags = (tags: Array) => {
  let tagCloud = `${TAG_CLOUD_INIT}`;
  tags.forEach((elem, index) => tagCloud += getHtmlTag(elem))

  return tagCloud + TAG_CLOUD_END;
}

const setNewTag = (tag, number) => {
  if ( tag ) {
    $('#tags ul').append(getHtmlTag(tag, number));
    removeTagCloud();
  }
};

const removeTagCloud = () => {
  TagCanvas.Delete('Canvas', `tags`);
  $('#cloud').replaceWith('<textarea value={this.props.contents}/>');
};

const startCloud = () => TagCanvas.Resume('Canvas', `tags`);
const stopCloud = () => TagCanvas.Pause('Canvas', `tags`);

const tagCloudCreator = (parent, tags) => {
  let $parent = $(parent);
  let $editor = $(generateTags(tags));
  $parent.find('textarea').replaceWith($editor);

  tagCloudController();
};

export class TagCloud extends React.Component {
  static tagNumber = 0;

  componentDidMount = () => {
    this.props.fetchCloudInit(this.props.cloudId || DEFAULT_CLOUD_ID);
    document.addEventListener('tagclick', this.handleTagClick);
    startCloud();
  };

  shouldComponentUpdate(nextProps, nextState) {
    return !nextProps.isModalOpen;
  }

  componentDidUpdate = () => {
    if ( TagCloud.tagNumber != (this.props.tags && this.props.tags.length) ) {
      if ( TagCloud.tagNumber ) setNewTag(this.props.tags[this.props.tags.length - 1], this.props.tags.length - 1);
      TagCloud.tagNumber = this.props.tags.length;
    }
    this.handleKnowledgeCreateButtonHighlight();
    removeTagCloud();
    this.editor = tagCloudCreator(ReactDOM.findDOMNode(this), this.props.tags);
  };

  componentWillUnmount = () => {
    removeTagCloud();
    if ( this.props.highlight.enabled ) {
      this.props.disableHighlight('createKnowledge');
    }
    document.removeEventListener('tagclick', this.handleTagClick);
  };

  handleTagClick = (e: Event) => {
    this.props.openKnowledge(this.props.tags.find((elem: any) => elem.id === e.detail.tagId));
    this.props.openEditor();
    stopCloud();
  };

  handleKnowledgeCreateButtonHighlight = () => {
    if ( !this.props.cloud.knowledge.length && this.props.locationPath.indexOf('/cloud') === 0 ) {
      !this.props.highlight.enabled && this.props.enableHighlight('createKnowledge')
    } else {
      this.props.highlight.enabled && this.props.disableHighlight('createKnowledge')
    }
  };

  handleKeyPress = ({ key }) => {
    if ( key === 'Enter' ) {
      this.props.updateCloud();
      this.cloudNameInput.blur();
    }
  };

  render() {
    const {
      contents, locationPath, cloud, loading
    } = this.props;

    return (
      <div>
        {
          locationPath !== urls.index &&
          <CloudActions cloudNameInput={this.cloudNameInput}
                        handleKeyPress={this.handleKeyPress}/>
        }
        {
          (!cloud.knowledge.length && this.props.locationPath.indexOf('/cloud') === 0 && !loading) &&
          <div className="no-knowledge-label">
            <h1>There is no one knowledge right now! </h1>
            <h3>Click on the Lightning Bolt in the top left corner for creating
              first one.</h3>
          </div>
        }
        {
          loading ? <CloudLoading/> :
            <ReactIgnore style={!cloud.knowledge.length ? { opacity: 0 } : {}}>
              <textarea style={{ opacity: 0 }} value={contents}/>
            </ReactIgnore>
        }
      </div>

    )
  }
}