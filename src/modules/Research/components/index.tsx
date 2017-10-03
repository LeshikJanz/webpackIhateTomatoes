import * as React from 'react';
import ResearchForm from "../containers/researchForm";
import '../styles/style.scss';
import FlyingTags from "modules/Cloud/components/JqueryCloud/containers/flyingTags";
import { DEFAULT_TAG_CLOUD_SETTINGS } from "constants/cloud";
import PopUpModal from "modules/DraftModal/containers";
import { CloudLoading } from "components/CloudLoading";

export const Research = ({ tags, loading, searchForm }) => (
  <div className="research-container">
    <ResearchForm/>
    { // No knowledge found
      (!tags.length && (searchForm && searchForm.name && searchForm.name.length >= 3) && !loading) &&
      <div className="no-knowledge-label">
        <h1>There is no one knowledge for <b>{ searchForm.name }</b></h1>
      </div>
    }
    { // No search started
      (!tags.length && !(searchForm && searchForm.name) && !loading) &&
      <div className="no-knowledge-label">
        <h1>Start finding perfect experience from all over the world!</h1>
      </div>
    }
    { // Search request should be more than 2 symbols
      (!tags.length && (searchForm && searchForm.name.length < 3 && searchForm.name.length > 0) && !loading) &&
      <div className="no-knowledge-label">
        <h1>Search request should be more than 2 symbols</h1>
      </div>
    }
    { // Search in progress or show Flying tags
      loading ?
        <CloudLoading/> :
        <FlyingTags
          isTooltipShown={true}
          tagCanvasSettings={DEFAULT_TAG_CLOUD_SETTINGS}
          tags={tags}/>
    }
    <PopUpModal/>
  </div>
);

