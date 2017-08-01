import * as React from 'react';
import { Field, reduxForm } from 'redux-form'
import { ICloud } from "../../Board/interfaces/index";
const Select = require('react-select');

let KnowledgeCreateForm = (props) => {
  const { handleSubmit, clouds, handleModal, cloudId } = props;

  const reactSelect = ({ input, options, hint }) => (
    <div>
      <Select.Creatable
        {...input}
        value={input.value || options.find((c: ICloud) => c.id === cloudId )}
        onChange={(value) => {return input.onChange(value)}}
        onBlur={() => input.onBlur(input.value)}
        options={options}
        clearableValue={false}
        promptTextCreator={ (label) => `Create cloud '${label}'` }
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
        <div className="form-element" style={{ height: '160px' }}>
          <label className="input-label">Cloud</label>
          <div>
            <Field className="input-container input-modal" name="cloud"
                   component={reactSelect}
                   options={clouds}
                   cloudId={cloudId}
                   hint="*Select existing cloud name or write down new name for adding knowledge to the fresh cloud"
            />
          </div>
        </div>
      </div>
      <div className="modal-footer btn-actions">
        <button className="primary" type="submit">Confirm</button>
        <button className="secondary" onClick={handleModal}>Cancel</button>
      </div>
    </form>
  )
};

KnowledgeCreateForm = reduxForm({
  form: 'knowledgeForm'
})(KnowledgeCreateForm);

export default KnowledgeCreateForm;
