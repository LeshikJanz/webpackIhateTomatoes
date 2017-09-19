import * as React from 'react';
import { Field, reduxForm } from 'redux-form'
import { required } from "../../../../components/ReduxFormFields/RenderField/validators";
import { renderField } from "../../../../components/ReduxFormFields/RenderField/index";
require('styles/form.scss');

let CloudForm = props => {
  const { handleModalAction, handleSubmit } = props;

  return (
    <form onSubmit={ handleSubmit }>
      <div className="modal-body">
        <div className="form-element">
          <div>
            <Field placeholder="Enter cloud name..." name="name" className="input-container input-modal"
                   label="Cloud Name"
                   component={renderField}
                   validate={required} type="text"/>
          </div>
        </div>
        <div className="form-element">
          <label className="input-label" htmlFor="goal">Why do you create this cloud?</label>
          <Field placeholder="Enter short explanation..." className="input-container input-modal"
                 name="goal" component="textarea" type="text"/>
        </div>
      </div>
      <div className="modal-footer btn-actions">
        <button className="primary" type="submit" disabled={props.invalid}>Create</button>
        <button className="secondary" onClick={handleModalAction}>Cancel</button>
      </div>
    </form>
  )
};

CloudForm = reduxForm({
  form: 'cloudForm'
})(CloudForm);

export default CloudForm;