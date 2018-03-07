import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import TextField from '../form/textField';
// import SelectField from '../form/selectField';
import Modal from '../uiElements/modal';
import { createNewSeason } from '../../actions/actionCreators';
import { reset } from 'redux-form';

class CreateSeasonForm extends Component {

  submit = (e) => {
    e.preventDefault();
    this.props.createNewSeason(this.props.form.createNewSeason.values);
    this.props.reset("createNewSeason");
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <Modal
          title={"Create Season"}
          body={
            <div>
              <TextField fieldName="year" label="Year" />
              <TextField fieldName="description" label="Description" />
              <div className="control">
                <div className="select">
                  <Field name="teamId" className="input" component="select">
                    { Object.keys(this.props.teams).map((team, i) => <option key={i} value={team}>{this.props.teams[team].teamName}</option>)}
                  </Field>
                </div>
              </div>
            </div>
          }
          buttonLabel={"New Season"}
        />
      </form>
    );
  }
}

const mapStateToProps = state => state;

CreateSeasonForm = connect(
  mapStateToProps,
  {
    createNewSeason,
    reset
  }
)(CreateSeasonForm);

export default reduxForm({ form: 'createNewSeason' })(CreateSeasonForm);