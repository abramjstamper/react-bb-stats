import React, { Component } from 'react';
import { reduxForm, reset } from 'redux-form';
import { connect } from 'react-redux';
import FieldWrapper from '../elements/FieldWrapper';
import Modal from '../elements/Modal';
import { editTeam } from '../../actions/actionCreators';

class EditTeamForm extends Component {

  submit = (e) => {
    e.preventDefault();
    this.props.editTeam(this.props.form.editTeamForm.values);
  }

  componentWillMount() {
    if (typeof this.props.team === undefined) {
      this.props.initialize(this.props.team);
      this.team = this.props.team;
    } else {
      this.props.initialize(this.props.teams[this.props.location.payload.id]);
      this.team = this.props.teams[this.props.location.payload.id];
      console.log(this.team);
    }
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <Modal
          title={this.team.teamName}
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
          buttonLabel={"Edit Team"}
        />
      </form>
    );
  }
}

const mapStateToProps = state => state;

EditTeamForm = connect(
  mapStateToProps,
  {
    editTeam,
    reset
  }
)(EditTeamForm);

export default reduxForm({ form: 'editTeamForm' })(EditTeamForm); 