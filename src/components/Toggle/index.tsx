import * as React from 'react';
import './style.scss';
import { Field } from "redux-form";

export const Toggle = ({ onChange, name, checked }) => (
  <div className="tg-list-item">
    <Field name={name} className="tgl tgl-flip" id={name} component="input" type="checkbox"
           onChange={onChange} normalize={v => !!v}/>
    <label className="tgl-btn" data-tg-off="Nope" data-tg-on="Yeah!" htmlFor={name}/>
  </div>
);