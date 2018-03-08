import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import FieldWrapper from '../form/fieldWrapper';
import Modal from '../uiElements/modal';
import { createNewPlayer } from '../../actions/actionCreators';
import { reset } from 'redux-form';

class CreatePlayerForm extends Component {

  submit = (e) => {
    e.preventDefault();
    this.props.createNewPlayer(this.props.form.createPlayerForm.values, this.props.location.payload.id);
    this.props.reset("createPlayerForm");
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <Modal
          title={"New Player"}
          body={
            <div>
              <FieldWrapper fieldName="fname" label="First Name" type="text"/>
              <FieldWrapper fieldName="lname" label="Last Name" type="text"/>
              <FieldWrapper fieldName="homeNumber" label="Home Number" type="text"/>
              <FieldWrapper fieldName="awayNumber" label="Away Number" type="text"/>
              <FieldWrapper fieldName="position" label="Position" type="text"/>
              <FieldWrapper fieldName="height" label="Height" type="text"/>
              <FieldWrapper fieldName="weight" label="Weight" type="text"/>
              <FieldWrapper fieldName="class" label="Class" type="text"/>
              <div className="field">
                <label htmlFor="isActive">Active</label>
                <Field name="isActive" component="input" type="checkbox"/>
              </div>
            </div>
          }
          buttonLabel={"Create Player"}
        />
      </form>
    );
  }
}

const mapStateToProps = state => state;

CreatePlayerForm = connect(
  mapStateToProps,
  {
    createNewPlayer,
    reset
  }
)(CreatePlayerForm);

export default reduxForm({ form: 'createPlayerForm' })(CreatePlayerForm);