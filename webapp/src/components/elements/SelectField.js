import React from 'react';
import { Field } from 'redux-form';

let SelectField = props => {
  return (
    <div className="field">
      <label className="label">{props.label}</label>
      <div className="select">
        <Field
          className="input"
          name={props.fieldName}
          component="input"
          type="select"
        >
        {props.options}
        </Field>
      </div>
    </div>
  );
};

export default SelectField;