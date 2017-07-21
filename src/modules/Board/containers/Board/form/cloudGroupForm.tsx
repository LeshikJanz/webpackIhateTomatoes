import * as React from 'react';

import { Field, reduxForm } from 'redux-form'

let CloudGroupForm = props => (
  <form onSubmit={ props.handleCloudGroupFormSubmit }>
    <div>
      <label htmlFor="name">Cloud Group Name</label>
      <div>
        <Field name="name" component="input" type="text"/>
      </div>
    </div>
    <div>
      <div>
        <label htmlFor="title">What type of content are you going to save here?</label>
        <div>
          <Field name="title" component="textarea" type="text"/>
        </div>
      </div>
    </div>
    <div className="btn-actions">
      <button className="primary" type="submit">Confirm</button>
      <button className="secondary" type="button" onClick={props.changeModalStatus}>Cancel</button>
    </div>
  </form>
)

CloudGroupForm = reduxForm({
  form: 'cloudGroupForm'
})(CloudGroupForm)

export default CloudGroupForm;