import * as React from 'react';
import { reduxForm } from "redux-form";
import { GlobalSearch } from "./search/GlobalSearch";
import { ResultsDropdown } from "./search/ResultsDropdown";

let ResearchForm = ({ getKnowledges }) => (
  <form onChange={getKnowledges}>
    <GlobalSearch name="name" placeholder="Search by knowledge..."/>
  </form>
);


ResearchForm = reduxForm({
  form: 'ResearchForm'
})(ResearchForm);

export default ResearchForm;