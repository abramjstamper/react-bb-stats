import React, { Component } from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { connect } from 'react-redux';
import FieldWrapper from '../form/fieldWrapper';
import Modal from '../uiElements/modal';
import { createNewSeason } from '../../actions/actionCreators';

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
          title={"New Season"}
          body={
            <div>
              <FieldWrapper fieldName="year" label="Year" type="text" />
              <FieldWrapper fieldName="description" label="Description" type="text"/>
              <div className="control">
                <div className="select">
                  <Field name="teamId" className="input" component="select">
                    { Object.keys(this.props.teams).map((team, i) => <option key={i} value={team}>{this.props.teams[team].teamName}</option>)}
                  </Field>
                </div>
              </div>
            </div>
          }
          buttonLabel={"Create Season"}
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