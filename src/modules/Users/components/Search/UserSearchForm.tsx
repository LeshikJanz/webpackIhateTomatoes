import * as React from 'react';
import { Field, reduxForm } from "redux-form";
import { Toggle } from "components/Toggle";
import { SearchFormField } from "components/Search/SearchFormField";
import '../../styles/search.scss';
import { Places } from "components/ReduxFormFields/Places";

let UserSearchForm = ({ userSearchForm, getUsers }) => (
  <form className="user-search-form" onChange={getUsers}>
    <div className="search-group">
      <label htmlFor="searchValue">Name</label>
      <SearchFormField name="searchValue"/>
    </div>
    <div className="search-group">
      <label htmlFor="address">Address</label>
      <div>
        <Field name="address"
               component={Places} label="address"/>
      </div>
    </div>
    <div className="search-group">
      <div className="form-element-horizontal">
        <label>Hints: </label>
        <Toggle name="hintsEnabled"/>
      </div>
      <div className="form-element-horizontal">
        <label>Sky vertical compact: </label>
        <Toggle name="verticalCompactEnabled"/>
      </div>
      <div className="form-element-horizontal">
        <label>Private: </label>
        <Toggle name="privateSky"/>
      </div>
    </div>
    <div className="search-group">
      <div className="form-element-horizontal">
        <label>Cloud repeating system: </label>
        <Toggle name="cloudRepeatingSystem"/>
      </div>
    </div>
  </form>
);

UserSearchForm = reduxForm({
  form: 'UserSearchForm'
})(UserSearchForm);

export default UserSearchForm;