import * as React from 'react';
import "assets/js/tagcanvas.min.js";
import "../style.scss";
import { dimensionMultiplier } from "../constants/index";
import { DEFAULT_CLOUD_ID } from "constants/index";
import { urls } from "urls";
import { CloudLoading } from "./CloudLoading";
import CloudActions from "../containers/cloudActions";
import FlyingTags from "../containers/flyingTags";

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
      fadeIn: 10,
      radiusX: dimensionMultiplier,
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

export class TagCloud extends React.Component {
  componentDidMount = () =>
    this.props.fetchCloudInit(this.props.cloudId || DEFAULT_CLOUD_ID);

  componentDidUpdate = () =>
    this.handleKnowledgeCreateButtonHighlight();

  shouldComponentUpdate = (nextProps, nextState) =>
    !nextProps.isModalOpen;

  handleKeyPress = ({ key }) => {
    if ( key === 'Enter' ) {
      this.props.updateCloud();
      this.cloudNameInput.blur();
    }
  };

  handleKnowledgeCreateButtonHighlight = () => {
    if ( !this.props.tags.length && this.props.locationPath.indexOf('/cloud') === 0 ) {
      !this.props.highlight.enabled && this.props.enableHighlight('createKnowledge')
    } else {
      this.props.highlight.enabled && this.props.disableHighlight('createKnowledge')
    }
  };

  render() {
    const {
      locationPath, cloud, loading, tags
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
            <FlyingTags
              tagCloudController={tagCloudController}
              tags={tags}
            />
        }
      </div>

    )
  }
}