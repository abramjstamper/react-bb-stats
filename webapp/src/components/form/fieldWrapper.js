import React from 'react';
import { Field } from 'redux-form';

const FieldWrapper = props => {
  return (
    <div className="field">
      <label className="label">{props.label}</label>
      <div>
        <Field
          className="input"
          name={props.fieldName}
          component="input"
          type={props.type}
          placeholder={props.label}
        />
      </div>
    </div>
  );
};

export default FieldWrapper;