import * as React from 'react';

import { Field, reduxForm } from 'redux-form'
import { createCloudInit } from "../../../../actions";

let CloudForm = props => {

  const { cloudGroups } = props;
  console.log('props.cloudGroups');
  console.log(props.cloudGroups);

  return (
    <form onSubmit={ props.handleCloudFormSubmit }>
      <div>
        <label htmlFor="name">Cloud Name</label>
        <div>
          <Field name="name" component="input" type="text"/>
        </div>
      </div>
      <div>
        <label>Cloud Group</label>
        <div>
          <Field name="cloudId" component="select">
            <option />
            {cloudGroups.length > 0 && cloudGroups.map((item, i) =>
              <option value={item.id}>{item.name}</option>
            )}
          </Field>
        </div>
        <div>
          <label htmlFor="goal">Why do you create this cloud?</label>
          <div>
            <Field name="goal" component="textarea" type="text"/>
          </div>
        </div>
      </div>
      <button type="submit">Submit</button >
    </form>
  )
}

CloudForm = reduxForm({
  // a unique name for the form
  form: 'cloudForm'
})(CloudForm)

export default CloudForm;