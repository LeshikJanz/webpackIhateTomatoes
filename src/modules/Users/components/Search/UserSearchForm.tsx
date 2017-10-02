import * as React from 'react';
import { Field, reduxForm } from "redux-form";
import { Toggle } from "components/Toggle";
import { SearchFormField } from "components/Search/SearchFormField";
const styles = require('../../styles/search.scss');
const classNames = require('classnames/bind');
const cx = classNames.bind(styles);
import { Places } from "components/ReduxFormFields/Places";
import { CollapsingLabel } from "components/CollapsingLabel";
import { ProfileField } from "../../../Profile/components/ProfileField";

const placesCssClasses = {
  root: 'search-bar',
  input: '',
  autocompleteContainer: 'my-autocomplete-container'
};

let UserSearchForm = ({ userSearchForm, getUsers, ...props }) => (
  <form className="user-search-form" onChange={getUsers}>
    <div className="search-group">
      <CollapsingLabel
        title="Name"
        htmlFor="name"
        isOpened={props.isNameOpened}
        handleOpen={props.handleName}
      />
      <div className={cx([{ "hiddenField": !props.isNameOpened }, { "activeField": props.isNameOpened }])}>
        <SearchFormField name="name" placeholder="Search by name..."/>
      </div>
    </div>
    <div className="search-group">
      <CollapsingLabel
        title="Address"
        htmlFor="address"
        isOpened={props.isAddressOpened}
        handleOpen={props.handleAddress}
      />
      <div className={cx([{ "hiddenField": !props.isAddressOpened }, { "activeField": props.isAddressOpened }])}>
        <Field name="address" cssClasses={placesCssClasses} handleSelect={ getUsers }
               component={Places} placeholder="Search by Address..." label=" address"/>
      </div>
    </div>
  </form>
);

UserSearchForm = reduxForm({
  form: 'UserSearchForm'
})(UserSearchForm);

export default UserSearchForm;