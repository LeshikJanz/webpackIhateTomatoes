import * as React from 'react';
import { Field, reduxForm } from 'redux-form'
import { required } from "../../../../components/ReduxFormFields/RenderField/validators";
import { renderField } from "../../../../components/ReduxFormFields/RenderField/index";
require('styles/form.scss');
const Select = require('react-select');

const reactSelect = ({ input, options, hint }) => (
  <div>
    <Select.Creatable
      {...input}
      value={input.value}
      onChange={(value) => {return input.onChange(value)}}
      onBlur={() => input.onBlur(input.value)}
      options={options}
      clearableValue={false}
      promptTextCreator={ (label) => `Create cloud '${label}'` }
    />
    <div className="hint">{hint}</div>
  </div>
);

let RenewForm = props => {
  const { clouds, handleModalAction, handleSubmit } = props;

  return (
    <form onSubmit={ handleSubmit }>
      <div className="modal-body">
        <div className="form-element">
          <label className="input-label">Cloud</label>
          <Field className="input-container input-modal" name="cloud"
                 component={reactSelect}
                 options={clouds}
                 validate={required}
                 hint="*Select existing cloud name or write down new name for adding copy of knowledge to the fresh cloud"
          />
        </div>
      </div>
      <div className="modal-footer btn-actions">
        <button className="primary" type="submit" disabled={props.invalid}>Copy</button>
        <button className="secondary" onClick={handleModalAction}>Cancel</button>
      </div>
    </form>
  )
};

RenewForm = reduxForm({
  form: 'RenewForm'
})(RenewForm);

export default RenewForm;