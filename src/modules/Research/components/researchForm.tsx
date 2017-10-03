import * as React from 'react';
import { reduxForm } from "redux-form";
import { GlobalSearch } from "./search/GlobalSearch";
import { ResultsDropdown } from "./search/ResultsDropdown";

let ResearchForm = ({ getKnowledges, tags = [], searchForm }) => (
  <form onChange={getKnowledges}>
    <GlobalSearch name="name"
                  numberFounded={tags.length}
                  placeholder="Global Search by knowledge..."
                  searchValue={searchForm && searchForm.name.length > 2 && searchForm.name}
    />
  </form>
);


ResearchForm = reduxForm({
  form: 'ResearchForm'
})(ResearchForm);

export default ResearchForm;