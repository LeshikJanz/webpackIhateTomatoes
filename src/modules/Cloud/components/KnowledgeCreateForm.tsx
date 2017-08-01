import * as React from 'react';
import { Field, reduxForm } from 'redux-form'
const Select = require('react-select');

let KnowledgeCreateForm = (props) => {
  const { handleSubmit, clouds, handleModalAction } = props;

  const reactSelect = ({ input, options, hint }) => (
    <div>
      <Select
        {...input}
        value={input.value}
        onChange={(value) => {return input.onChange(value)}}
        onBlur={() => input.onBlur(input.value)}
        options={options}
        clearableValue={false}
      />
      <div className="hint">{hint}</div>
    </div>
  );

  return (
    <form onSubmit={ handleSubmit }>
      <div className="modal-body">
        <div className="form-element">
          <label className="input-label" htmlFor="name">Knowledge Name</label>
          <div>
            <Field placeholder="Enter knowledge name..." name="name" className="input-container input-modal"
                   component="input" type="text"/>
          </div>
        </div>
        <div className="form-element">
          <label className="input-label">Cloud</label>
          <div>
            <Field className="input-container input-modal" name="cloud"
                   component={reactSelect}
                   options={clouds}
            />
          </div>
        </div>
      </div>
      <div className="modal-footer btn-actions">
        <button className="primary" type="submit">Confirm</button>
        <button className="secondary" onClick={handleModalAction}>Cancel</button>
      </div>
    </form>
  )
};

KnowledgeCreateForm = reduxForm({
  form: 'cloudForm'
})(KnowledgeCreateForm);

export default KnowledgeCreateForm;
