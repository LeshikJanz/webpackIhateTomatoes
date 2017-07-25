import * as React from 'react';

import { Field, reduxForm } from 'redux-form'

let CloudGroupForm = props => (
  <form onSubmit={ props.handleSubmit }>
    <div className="modal-body">
      <div className="form-element">
        <label htmlFor="name">Cloud Group Name</label>
        <div>
          <Field placeholder="Enter group name..." name="name" className="input-container input-modal" component="input"
                 type="text"/>
        </div>
      </div>
      <div>
        <div className="form-element">
          <label htmlFor="title">What type of content are you going to save here?</label>
          <div>
            <Field placeholder="Enter short explanation..." name="title" className="input-container input-modal"
                   style={{ height: '100px' }} component="textarea" type="text"/>
          </div>
        </div>
      </div>
      <div className="modal-footer btn-actions">
        <button className="primary" type="submit">Confirm</button>
        <button className="secondary" onClick={props.handleModalAction}>Cancel</button>
      </div>
    </div>
  </form>
)

CloudGroupForm = reduxForm({
  form: 'cloudGroupForm'
})(CloudGroupForm)

export default CloudGroupForm;