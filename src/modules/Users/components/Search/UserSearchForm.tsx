import * as React from 'react';
import { Field, reduxForm } from "redux-form";
import { Toggle } from "components/Toggle";
import { SearchFormField } from "components/Search/SearchFormField";
const styles = require('../../styles/search.scss');
const classNames = require('classnames/bind');
const cx = classNames.bind(styles);
import { Places } from "components/ReduxFormFields/Places";
import { CollapsingLabel } from "components/CollapsingLabel";

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
      <div className={cx([{"hiddenField": !props.isNameOpened}, { "activeField": props.isNameOpened }])}>
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
      <div className={cx([{"hiddenField": !props.isAddressOpened}, { "activeField": props.isAddressOpened }])}>
        <Field name="address" cssClasses={placesCssClasses} handleSelect={ getUsers }
               component={Places} placeholder="Search by Address..." label=" address"/>
      </div>
    </div>
    <div className=" search-group">
      <div className=" form-element-horizontal">
        <label>Hints: </label>
        <Toggle name=" hintsEnabled"/>
      </div>
      <div className=" form-element-horizontal">
        <label>Sky vertical compact: </label>
        <Toggle name=" verticalCompactEnabled"/>
      </div>
      <div className=" form-element-horizontal">
        <label>Private: </label>
        <Toggle name=" privateSky"/>
      </div>
    </div>
    <div className=" search-group">
      <div className=" form-element-horizontal">
        <label>Cloud repeating system: </label>
        <Toggle name=" cloudRepeatingSystem"/>
      </div>
    </div>
  </form>
);

UserSearchForm = reduxForm({
  form: 'UserSearchForm'
})(UserSearchForm);

export default UserSearchForm;