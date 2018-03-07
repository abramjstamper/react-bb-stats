import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import TextField from '../form/textField';
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
              <TextField fieldName="fname" label="First Name" />
              <TextField fieldName="lname" label="Last Name" />
              <TextField fieldName="homeNumber" label="Home Number" />
              <TextField fieldName="awayNumber" label="Away Number" />
              <TextField fieldName="position" label="Position" />
              <TextField fieldName="height" label="Height" />
              <TextField fieldName="weight" label="Weight" />
              <TextField fieldName="class" label="Class" />
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