import * as React from 'react';

import { Field, reduxForm } from 'redux-form'

let CloudForm = props => {

  const { cloudGroups, changeModalStatus, handleCloudFormSubmit } = props;

  return (
    <form onSubmit={ handleCloudFormSubmit }>
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
              <option key={i} value={item.id}>{item.name}</option>
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
      <div className="btn-actions">
        <button className="primary" type="submit">Confirm</button>
        <button className="secondary" onClick={changeModalStatus}>Cancel</button>
      </div>
      {/*<button type="submit">Submit</button >*/}
    </form>
  )
}

CloudForm = reduxForm({
  form: 'cloudForm'
})(CloudForm)

export default CloudForm;