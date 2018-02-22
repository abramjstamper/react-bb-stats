import React from 'react';
import { Field } from 'redux-form';

let TextField = props => {
  return (
    <div className="field">
      <label className="label">{props.label}</label>
      <div>
        <Field
          className="input"
          name={props.fieldName}
          component="input"
          type="text"
          placeholder={props.label}
        />
      </div>
    </div>
  );
};

export default TextField;