import * as React from 'react';
import { Field, reduxForm } from 'redux-form'
require('styles/form.scss');

let KnowledgeNamingForm = props => {
  const { changeModalStatus, handleCloudFormSubmit } = props;

  return (
    <form onSubmit={ handleCloudFormSubmit }>
      <div className="modal-body">
        <div className="form-element">
          <label className="input-label" htmlFor="name">Knowledge Name</label>
          <div>
            <Field placeholder="Enter knowledge name..." name="name" className="input-container input-modal" component="input" type="text"/>
          </div>
        </div>
      </div>
      <div className="modal-footer btn-actions">
        <button className="primary" type="submit">Confirm</button>
        <button className="secondary" onClick={changeModalStatus}>Cancel</button>
      </div>
    </form>
  )
}

KnowledgeNamingForm = reduxForm({
  form: 'cloudForm'
})(KnowledgeNamingForm)

export default KnowledgeNamingForm;