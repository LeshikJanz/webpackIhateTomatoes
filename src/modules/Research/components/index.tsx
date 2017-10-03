import * as React from 'react';
import ResearchForm from "../containers/researchForm";
import '../styles/style.scss';
import FlyingTags from "modules/Cloud/components/JqueryCloud/containers/flyingTags";
import { DEFAULT_TAG_CLOUD_SETTINGS } from "constants/cloud";
import PopUpModal from "modules/DraftModal/containers";
import { CloudLoading } from "components/CloudLoading";

export const Research = ({ tags, loading }) => (
  <div className="research-container">
    <ResearchForm/>
    {
      loading ?
        <CloudLoading/> :
        <FlyingTags
          tagCanvasSettings={DEFAULT_TAG_CLOUD_SETTINGS}
          tags={tags}/>
    }
    <PopUpModal/>
  </div>
);

