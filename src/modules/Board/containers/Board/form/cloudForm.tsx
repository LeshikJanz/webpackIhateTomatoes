import * as React from 'react';
import { Field, reduxForm } from 'redux-form'
import { ICloudGroup } from "interfaces/index";
require('styles/form.scss');
const Select = require('react-select');

let CloudForm = props => {
  const { cloudGroups, handleModalAction, handleSubmit } = props;

  const reactSelect = ({ input, options, hint }) => (
    <div>
      <Select.Creatable
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
          <label className="input-label" htmlFor="name">Cloud Name</label>
          <div>
            <Field placeholder="Enter cloud name..." name="name" className="input-container input-modal"
                   component="input" type="text"/>
          </div>
        </div>
        <div className="form-element">
          <label className="input-label">Cloud Group</label>
          <div>
            <Field className="input-container input-modal" name="cloudGroup"
                   component={reactSelect}
                   options={cloudGroups.map(
                                    o => ({
                                          ...o,
                                          label: o.name,
                                          value: o.id,
                                         }))}
                   hint="Enter a value that's NOT in the list, then hit return"
            />
            {/*<Field className="input-container input-modal" name="cloudId" component="select">*/}
            {/*<option key="-1" value="Choice cloud group..."/>*/}
            {/*{cloudGroups.length > 0 && cloudGroups.map((item, i) =>*/}
            {/*<option key={i} value={item.id}>{item.name}</option>*/}
            {/*)}*/}
            {/*</Field>*/}
          </div>
        </div>
        <div className="form-element">
          <div>
            <label className="input-label" htmlFor="goal">Why do you create this cloud?</label>
            <div>
              <Field placeholder="Enter short explanation..." className="input-container input-modal"
                     style={{ height: '100px' }} name="goal" component="textarea" type="text"/>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-footer btn-actions">
        <button className="primary" type="submit">Confirm</button>
        <button className="secondary" onClick={handleModalAction}>Cancel</button>
      </div>
    </form>
  )
}

CloudForm = reduxForm({
  form: 'cloudForm'
})(CloudForm)

export default CloudForm;