import * as React from 'react';
import { lifecycle } from 'recompose';
import { Field, reduxForm } from 'redux-form'
import { ICloud } from "interfaces";
import { renderField } from "components/ReduxFormFields/RenderField";
import { required } from "components/ReduxFormFields/RenderField/validators";
const Select = require('react-select');

const enhance = lifecycle({
  componentDidUpdate() {
    const { cloudId, options, input } = this.props;

    input.onChange(options.find((c: ICloud) => input.value === "" &&
    c.id === cloudId && c.accountId === localStorage.getItem('UserId')));
  }
});

const reactSelect = enhance(({ input, options, hint }) => (
  <div>
    <Select.Creatable
      {...input}
      value={input.value}
      onChange={(value) => {
        return input.onChange(value)
      }}
      onBlur={() => input.onBlur(input.value)}
      options={options}
      clearableValue={false}
      promptTextCreator={ (label) => `Create cloud '${label}'` }
    />
    <div className="hint">{hint}</div>
  </div>
));

let KnowledgeCreateForm = (props) => {
  const {
    handleSubmit, clouds, handleModal, cloudId,
    knowledgeNamePlaceholder = "Enter knowledge name..."
  } = props;

  return (
    <form onSubmit={ handleSubmit }>
      <div className="modal-body">
        <div className="form-element">
          <div>
            <Field placeholder={knowledgeNamePlaceholder} name="name" className="input-container input-modal"
                   label="Knowledge Name"
                   component={renderField}
                   validate={required}
                   type="text"/>
          </div>
        </div>
        <div className="form-element" style={{ height: '160px' }}>
          <label className="input-label">Cloud</label>
          <div>
            <Field className="input-container input-modal" name="cloud"
                   component={reactSelect}
                   options={clouds}
                   cloudId={cloudId}
                   validate={required}
                   hint="*Select existing cloud name or write down new name for adding knowledge to the fresh cloud"
            />
          </div>
        </div>
      </div>
      <div className="modal-footer btn-actions">
        <button className="primary" type="submit" disabled={props.invalid}>Create</button>
        <button className="secondary" onClick={handleModal}>Cancel</button>
      </div>
    </form>
  )
};

KnowledgeCreateForm = reduxForm({
  form: 'knowledgeCreateForm'
})(KnowledgeCreateForm);

export default KnowledgeCreateForm;
