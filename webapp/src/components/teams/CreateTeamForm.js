import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, reset } from 'redux-form';
import FieldWrapper from '../elements/FieldWrapper';
import Modal from '../elements/Modal';
import { createNewTeam } from '../../actions/actionCreators';

class CreateTeamForm extends Component {

  constructor() {
    super();
    this.state = {
      title: "Create a New Team"
    };
  }

  submit = (e) => {
    console.log(this.props.form.createTeamForm.values);
    e.preventDefault();
    this.props.createNewTeam(this.props.form.createTeamForm.values);
    this.props.reset("createTeamForm");
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <Modal
          title={"New Team"}
          body={
            <div>
              <FieldWrapper fieldName="teamName" label="Team Name" />
              <FieldWrapper fieldName="abbreviation" label="Abbreviation" />
              <FieldWrapper fieldName="headCoach" label="Head Coach Name" />
              <FieldWrapper fieldName="assistiantCoach" label="Assistiant Coach Name" />
              <FieldWrapper fieldName="city" label="City" />
              <FieldWrapper fieldName="state" label="State" />
            </div>
          }
          buttonLabel={"Create Team"}
        />
      </form>
    );
  }
}

const mapStateToProps = state => state;

CreateTeamForm = connect(
  mapStateToProps,
  {
    createNewTeam,
    reset 
  }
)(CreateTeamForm);

export default reduxForm({ form: 'createTeamForm' })(CreateTeamForm);