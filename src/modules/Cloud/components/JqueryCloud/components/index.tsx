import * as React from 'react';
import "assets/js/tagcanvas.min.js";
import "../style.scss";
import { urls } from "urls";
import { CloudLoading } from "./CloudLoading";
import CloudActions from "../containers/cloudActions";
import FlyingTags from "../containers/flyingTags";
import { DEFAULT_TAG_CLOUD_SETTINGS } from "constants/cloud";

export const TagCloud = ({ locationPath, handleKeyPress, cloud, loading, tags }) => (
  <div>
    {
      locationPath !== urls.index &&
      <CloudActions cloudNameInput={this.cloudNameInput}
                    handleKeyPress={handleKeyPress}/>
    }
    {
      (!cloud.knowledge.length && locationPath.indexOf('/cloud') === 0 && !loading) &&
      <div className="no-knowledge-label">
        <h1>There is no one knowledge right now! </h1>
        <h3>Click on the Lightning Bolt in the top left corner for creating
          first one.</h3>
      </div>
    }
    {
      loading ? <CloudLoading/> :
        <FlyingTags
          tagCanvasSettings={DEFAULT_TAG_CLOUD_SETTINGS}
          tags={tags}
        />
    }
  </div>
);