import * as React from 'react';
import ResearchForm from "../containers/researchForm";
import '../styles/style.scss';
import TagCloud from "modules/Cloud/components/JqueryCloud/containers";

export const Research = ({ tags }) => (
  <div className="research-container">
    <ResearchForm/>
    <TagCloud tags={tags}/>
  </div>
);

