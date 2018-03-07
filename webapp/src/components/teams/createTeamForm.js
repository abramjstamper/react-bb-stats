import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import TextField from '../form/textField';
import Modal from '../uiElements/modal';
import { createNewTeam } from '../../actions/actionCreators';
import {reset} from 'redux-form';

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
          title={"New Team"
            // this.props.form.createTeamForm && this.props.form.createTeamForm.values.teamName?"Create a New Team":this.props.form.createTeamForm.values.teamName
          }
          body={
            <div>
              <TextField fieldName="teamName" label="Team Name" />
              <TextField fieldName="abbreviation" label="Abbreviation" />
              <TextField fieldName="headCoach" label="Head Coach Name" />
              <TextField fieldName="assistiantCoach" label="Assistiant Coach Name" />
              <TextField fieldName="city" label="City" />
              <TextField fieldName="state" label="State" />
            </div>
          }
          buttonLabel={"Add Team"}
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